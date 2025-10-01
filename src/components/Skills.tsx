import React from 'react';
import { motion } from 'framer-motion';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip
} from 'recharts';

const skillsData = [
  { category: 'AI/ML', level: 80 },
  { category: 'Embedded', level: 75 },
  { category: 'Web', level: 85 },
  { category: 'DSA', level: 70 },
  { category: 'Tools', level: 78 }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A high-level view of my proficiency across core domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 hover-glow"
        >
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData} outerRadius={120} className="text-gray-300">
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="category" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 10 }} stroke="rgba(255,255,255,0.1)" />
                <Tooltip contentStyle={{ background: 'rgba(17,24,39,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#E5E7EB' }} />
                <Radar name="Proficiency" dataKey="level" stroke="#00D4FF" fill="#00D4FF" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Legend / Explanations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8"
        >
          {skillsData.map((s, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <div className="text-sm text-gray-400">{s.category}</div>
              <div className="mt-2 text-2xl font-bold text-white">{s.level}%</div>
              <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full">
                <div className="h-1.5 bg-neon-blue rounded-full" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;