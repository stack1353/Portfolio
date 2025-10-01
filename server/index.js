const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const host = process.env.EMAIL_SMTP_HOST;
    const port = parseInt(process.env.EMAIL_SMTP_PORT || '587', 10);
    const user = process.env.EMAIL_SMTP_USER;
    const pass = process.env.EMAIL_SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL || 'girishgoudar1353@gmail.com' || user;

    let sent = false;

    // SMTP transport if configured
    if (!sent && host && user && pass && to) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass }
        });

        const info = await transporter.sendMail({
          from: `Portfolio Contact <${user}>`,
          to,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          text: `From: ${name} <${email}>\n\n${message}`,
          html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`
        });
        console.log('Email sent (SMTP)', info.messageId);
        sent = true;
      } catch (e) {
        console.error('SMTP send failed, will try Gmail fallback if available', e);
      }
    }

    // Gmail transport fallback if configured
    if (!sent && process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
          }
        });

        const info = await transporter.sendMail({
          from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
          to: to || process.env.GMAIL_USER,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          text: `From: ${name} <${email}>\n\n${message}`,
          html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`
        });
        console.log('Email sent (Gmail)', info.messageId);
        sent = true;
      } catch (e) {
        console.error('Gmail send failed', e);
      }
    }

    if (!sent) {
      // Dev/test fallback: use Ethereal to preview emails in non-production
      try {
        if (process.env.NODE_ENV !== 'production') {
          const testAccount = await nodemailer.createTestAccount();
          const transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: { user: testAccount.user, pass: testAccount.pass }
          });
          const info = await transporter.sendMail({
            from: `Portfolio Contact <${testAccount.user}>`,
            to: 'preview@example.com',
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            text: `From: ${name} <${email}>\n\n${message}`,
            html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`
          });
          const previewUrl = nodemailer.getTestMessageUrl(info);
          console.log('Ethereal email preview:', previewUrl);
          return res.json({ ok: true, previewUrl });
        }
      } catch (e) {
        console.error('Ethereal fallback failed', e);
      }
      console.log('Contact message (email not configured):', { name, email, subject, message });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact endpoint error', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

app.post('/api/ai-chat', async (req, res) => {
  try {
    const { messages, systemPrompt } = req.body || {};
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ ok: false, error: 'OPENAI_API_KEY not configured' });
    }
    if (!Array.isArray(messages)) {
      return res.status(400).json({ ok: false, error: 'messages array required' });
    }

    const payload = {
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
        ...messages
      ],
      temperature: 0.3,
      max_tokens: 500
    };

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('OpenAI error:', resp.status, text);
      return res.status(500).json({ ok: false, error: 'OpenAI request failed' });
    }

    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content || '';
    return res.json({ ok: true, content });
  } catch (err) {
    console.error('AI chat error', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
