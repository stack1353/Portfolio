import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Github, RefreshCw } from 'lucide-react';
import { personal } from '../config/personal';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

const fetchUserRepos = async (username: string, signal: AbortSignal): Promise<Repo[]> => {
  const params = new URLSearchParams({
    per_page: '12',
    sort: 'updated'
  });
  const response = await fetch(`https://api.github.com/users/${username}/repos?${params.toString()}`, { signal });
  if (!response.ok) {
    throw new Error('Failed to load repositories');
  }
  return response.json();
};

const FeaturedProjects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const username = personal.githubUsername || (personal as any).github?.split('/').pop();

  const filtered = useMemo(() => {
    return repos
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
      .slice(0, 6);
  }, [repos]);

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();
    const load = async () => {
      setStatus('loading');
      setError(null);
      try {
        const data = await fetchUserRepos(username, controller.signal);
        setRepos(data);
        setStatus('success');
      } catch (e: any) {
        if (e.name === 'AbortError') return;
        setError(e?.message || 'Failed to load');
        setStatus('error');
      }
    };
    load();
    return () => controller.abort();
  }, [username]);

  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Latest work from my GitHub repositories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </motion.div>

        {status === 'error' && (
          <div className="flex items-center justify-center gap-3 text-red-400 mb-8">
            <span>{error}</span>
            <button
              onClick={() => {
                setStatus('idle');
                setRepos([]);
                // trigger effect by toggling username noop
                setStatus('loading');
                const controller = new AbortController();
                fetchUserRepos(username, controller.signal)
                  .then((data) => {
                    setRepos(data);
                    setStatus('success');
                  })
                  .catch((e) => {
                    setError(e?.message || 'Failed to load');
                    setStatus('error');
                  });
              }}
              className="px-3 py-1 rounded-md border border-white/10 hover:bg-white/5"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(status === 'loading' ? Array.from({ length: 6 }) : filtered).map((repo, idx) => (
            <motion.div
              key={(repo as any)?.id ?? idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.25)' }}
              className="group relative glass-card p-6 hover-glow overflow-hidden"
            >
              {status === 'loading' ? (
                <div className="animate-pulse">
                  <div className="h-6 bg-white/10 rounded w-2/3 mb-3"></div>
                  <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6 mb-6"></div>
                  <div className="h-8 bg-white/10 rounded w-32"></div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {(repo as Repo).name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[48px]">
                    {(repo as Repo).description || 'No description provided.'}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Star size={16} />
                      <span className="text-sm">{(repo as Repo).stargazers_count}</span>
                    </div>
                    <motion.a
                      href={(repo as Repo).html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white border border-white/10 hover:border-neon-blue/40 inline-flex items-center gap-2"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-neon-blue/40 transition-all duration-300 pointer-events-none"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;


