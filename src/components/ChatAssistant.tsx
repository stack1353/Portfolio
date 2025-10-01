import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { personal } from "../config/personal";
import { postJson } from "../utils/api";

type ChatMessage = { role: "user" | "assistant"; content: string };

const ChatAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hi! I'm ${personal.name}'s AI assistant. Ask me about skills, projects, or goals.`,
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const systemPrompt = useMemo(() => {
    return `You are a helpful AI assistant for ${personal.name}'s portfolio.
Focus on: AI/ML, Embedded Systems, Web, projects (Rescue Radar, Crime Detection, Crop Disease Detection, AlgoViz, Diet Planner), education at RVCE, location Bangalore, goals (R&D, DRDO/ISRO/Bosch/NVIDIA, national contribution). Be concise and friendly.`;
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || status === "loading") return;
    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setStatus("loading");

    try {
      const data = await postJson("/api/ai-chat", {
        systemPrompt,
        messages: [...messages, userMessage],
      });

      if (!data?.content) {
        throw new Error("Empty response");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-[90vw] max-w-sm glass-card border border-white/10 shadow-xl rounded-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10 bg-dark-900">
              <div className="text-sm font-semibold text-white">Chat with Girish’s AI</div>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 max-h-80 overflow-y-auto p-3 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                    m.role === "assistant"
                      ? "bg-gray-800 text-gray-100 self-start"
                      : "bg-gradient-to-r from-neon-blue to-neon-purple text-white self-end ml-auto"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {status === "loading" && (
                <div className="text-sm text-gray-400">🤖 Thinking…</div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex items-center gap-2 bg-dark-900">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about skills, projects, goals…"
                className="flex-1 bg-dark-800/50 border border-white/10 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-blue/50"
              />
              <button
                onClick={sendMessage}
                disabled={status === "loading"}
                className="px-3 py-2 rounded-md bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="mt-3 w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white flex items-center justify-center shadow-lg hover:shadow-neon-blue/25"
      >
        <MessageCircle size={20} />
      </motion.button>
    </div>
  );
};

export default ChatAssistant;
