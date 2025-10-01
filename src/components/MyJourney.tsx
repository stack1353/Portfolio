import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Rocket, Sparkles, MapPin } from 'lucide-react';

type Milestone = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon: React.ElementType;
  color: string; // tailwind color token like neon-blue
};

const milestones: Milestone[] = [
  {
    title: 'BE Computer Science',
    subtitle: 'RV College of Engineering',
    period: '2024 — Present',
    description: 'Studying core CS with focus on AI, Embedded Systems, and Edge AI.',
    icon: GraduationCap,
    color: 'neon-blue'
  },
  {
    title: 'Research & Prototyping',
    subtitle: 'Computer Vision & IoT',
    period: '2024 — Present',
    description: 'Built YOLO-based surveillance, crop disease detection with Raspberry Pi + IMX477.',
    icon: Rocket,
    color: 'neon-purple'
  },
  {
    title: 'Open Source & Projects',
    subtitle: 'Web + AI Tools',
    period: 'Ongoing',
    description: 'Created educational AlgoViz, Rescue Radar platform, and AI-powered utilities.',
    icon: Award,
    color: 'neon-green'
  },
  {
    title: 'Career Aspirations',
    subtitle: 'DRDO | ISRO | Bosch | NVIDIA',
    period: 'Future',
    description: 'Aim to contribute to impactful R&D blending AI with embedded hardware.',
    icon: Briefcase,
    color: 'neon-pink'
  }
];

const MyJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">My <span className="gradient-text">Journey</span></h2>
          <p className="text-xl text-gray-400">Education, milestones, and the road ahead</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>

          <ol className="space-y-10">
            {milestones.map((m, idx) => (
              <li key={idx} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.05 * idx }}
                  className={`flex flex-col sm:flex-row ${idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  {/* Dot */}
                  <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-${m.color}/30 border border-${m.color}/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.25)]`}> 
                      <m.icon size={16} className={`text-${m.color}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`group glass-card p-6 mt-4 sm:mt-0 sm:w-[calc(50%-3rem)] ${idx % 2 === 0 ? 'sm:ml-[calc(50%+2rem)]' : 'sm:mr-[calc(50%+2rem)]'}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-${m.color}/20 flex items-center justify-center`}>
                        <m.icon size={18} className={`text-${m.color}`} />
                      </div>
                      <h3 className="text-white text-xl font-bold">{m.title}</h3>
                    </div>
                    <p className="text-gray-300 font-medium mb-1">{m.subtitle}</p>
                    <p className="text-xs text-gray-500 mb-4">{m.period}</p>
                    <p className="text-gray-400 leading-relaxed">{m.description}</p>

                    {/* Hover expansion */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        <Sparkles size={14} className="text-neon-blue" />
                        <span>Curiosity driven learning</span>
                        <MapPin size={14} className="text-neon-purple" />
                        <span>Bangalore</span>
                      </div>
                    </motion.div>

                    <div className={`absolute inset-0 rounded-2xl border border-${m.color}/20 group-hover:border-${m.color}/40 transition-all duration-300 pointer-events-none`}></div>
                  </motion.div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;


