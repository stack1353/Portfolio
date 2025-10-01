import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Simple static import of posts metadata. In a real setup you might glob via Vite.
// For CRA, we can maintain a small registry.
type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
};

const posts: PostMeta[] = [
  {
    slug: 'edge-ai-vision-pipeline',
    title: 'Designing an Edge AI Vision Pipeline',
    date: '2025-09-01',
    tags: ['AI/ML', 'Embedded', 'Computer Vision'],
    excerpt: 'Key considerations for running computer vision models efficiently on edge devices.'
  },
  {
    slug: 'yolo-on-raspberry-pi',
    title: 'Running YOLO on Raspberry Pi with IMX477',
    date: '2025-08-10',
    tags: ['YOLO', 'Raspberry Pi', 'IMX477'],
    excerpt: 'Practical tips for model optimization, camera tuning, and thermal constraints.'
  }
];

const BlogList: React.FC = () => {
  const sorted = useMemo(() => {
    return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Knowledge <span className="gradient-text">Hub</span></h1>
          <p className="text-gray-400 text-lg">Posts and notes on AI, Embedded, and Web</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.25)' }}
              className="group glass-card p-6 hover-glow"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{p.title}</h3>
                <span className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{p.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/20">{t}</span>
                ))}
              </div>
              <Link to={`/blog/${p.slug}`} className="text-neon-blue font-medium">Read more →</Link>
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-neon-blue/40 transition-all pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;


