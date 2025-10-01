import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';

type FrontMatter = {
  title: string;
  date: string;
  tags?: string[];
};

type PostData = {
  frontmatter: FrontMatter;
  content: string;
};

const fetchMarkdown = async (slug: string, signal: AbortSignal): Promise<PostData> => {
  // For CRA, place markdown files in public/posts
  const res = await fetch(`/posts/${slug}.md`, { signal });
  if (!res.ok) throw new Error('Post not found');
  const text = await res.text();
  // very naive frontmatter parse: expects first lines between --- as YAML-like
  if (text.startsWith('---')) {
    const end = text.indexOf('\n---', 3);
    const fmRaw = text.slice(3, end).trim();
    const content = text.slice(end + 4).trim();
    const meta: any = {};
    fmRaw.split('\n').forEach((line) => {
      const [k, ...rest] = line.split(':');
      const v = rest.join(':').trim();
      if (k === 'tags') {
        meta[k] = v.replace(/\[|\]/g, '').split(',').map((x) => x.trim()).filter(Boolean);
      } else {
        meta[k.trim()] = v.replace(/^"|"$/g, '');
      }
    });
    return { frontmatter: meta as FrontMatter, content };
  }
  return { frontmatter: { title: slug, date: '' }, content: text };
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<PostData | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();
    setStatus('loading');
    fetchMarkdown(slug, controller.signal)
      .then((d) => {
        setData(d);
        setStatus('success');
      })
      .catch((e) => {
        setError(e?.message || 'Failed to load');
        setStatus('error');
      });
    return () => controller.abort();
  }, [slug]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Link to="/blog" className="text-neon-blue">← Back to Blog</Link>
        {status === 'loading' && (
          <div className="mt-6 glass-card p-6 animate-pulse">
            <div className="h-8 bg-white/10 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
            <div className="h-4 bg-white/10 rounded w-5/6"></div>
          </div>
        )}

        {status === 'error' && (
          <p className="mt-6 text-red-400">{error}</p>
        )}

        {status === 'success' && data && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h1 className="text-3xl font-bold text-white mb-2">{data.frontmatter.title}</h1>
            <p className="text-xs text-gray-500 mb-6">{data.frontmatter.date}</p>
            {data.frontmatter.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {data.frontmatter.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/20">{t}</span>
                ))}
              </div>
            )}
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{data.content}</ReactMarkdown>
            </div>
          </motion.article>
        )}
      </div>
    </section>
  );
};

export default BlogPost;


