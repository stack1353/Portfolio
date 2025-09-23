import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Building2, Globe, Award, Heart } from 'lucide-react';

const Goals: React.FC = () => {
  const goals = [
    {
      title: "AI + Embedded Systems Engineer",
      description: "Become a leading expert in the intersection of AI and Embedded Systems, developing cutting-edge solutions for real-world problems.",
      icon: Target,
      color: "neon-blue",
      timeline: "Long-term Career Goal"
    },
    {
      title: "R&D & Product Companies",
      description: "Work with prestigious organizations like DRDO, ISRO, Bosch, or NVIDIA to contribute to innovative research and development.",
      icon: Building2,
      color: "neon-purple",
      timeline: "Target Organizations"
    },
    {
      title: "National Contribution",
      description: "Contribute to the nation's technological advancement through defense, space, and infrastructure projects.",
      icon: Globe,
      color: "neon-green",
      timeline: "Patriotic Mission"
    },
    {
      title: "Family Pride",
      description: "Make my family proud by achieving excellence in my field and becoming a role model for future generations.",
      icon: Heart,
      color: "neon-pink",
      timeline: "Personal Motivation"
    },
    {
      title: "Simple & Happy Life",
      description: "Live a balanced life focused on meaningful work, personal growth, and contributing to something bigger than myself.",
      icon: Award,
      color: "neon-cyan",
      timeline: "Life Philosophy"
    },
    {
      title: "Innovation & Impact",
      description: "Create innovative solutions that solve real-world problems in agriculture, surveillance, defense, and beyond.",
      icon: Rocket,
      color: "neon-orange",
      timeline: "Innovation Focus"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="goals" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl"></div>
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
            My <span className="gradient-text">Goals</span> & Aspirations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vision for the future and the impact I want to create in the world of technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Main Goal Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-card p-8 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Primary Goal: <span className="gradient-text">AI + Embedded Systems Engineer</span>
              </h3>
              
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                My ultimate aspiration is to become a leading expert in the intersection of Artificial Intelligence 
                and Embedded Systems. I want to develop cutting-edge solutions that bridge the gap between 
                software intelligence and hardware capabilities, creating innovative systems that can operate 
                at the edge and solve real-world problems in fields like agriculture, surveillance, defense, 
                and smart cities.
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium border border-neon-blue/30">
                  Edge AI
                </span>
                <span className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium border border-neon-purple/30">
                  Computer Vision
                </span>
                <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full text-sm font-medium border border-neon-green/30">
                  IoT Systems
                </span>
                <span className="px-4 py-2 bg-neon-pink/20 text-neon-pink rounded-full text-sm font-medium border border-neon-pink/30">
                  Real-time Processing
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 30px rgba(0, 212, 255, 0.3)`
              }}
              className="group glass-card p-6 hover-glow cursor-pointer"
            >
              {/* Goal Icon */}
              <div className={`w-16 h-16 bg-${goal.color}/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-${goal.color}/30 transition-colors duration-300`}>
                <goal.icon size={32} className={`text-${goal.color}`} />
              </div>

              {/* Goal Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {goal.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {goal.description}
              </p>

              {/* Timeline */}
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 bg-${goal.color} rounded-full`}></div>
                <span className="text-xs text-gray-500 font-medium">
                  {goal.timeline}
                </span>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border border-${goal.color}/20 group-hover:border-${goal.color}/40 transition-all duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make a Difference
            </h3>
            <p className="text-gray-400 mb-6">
              I'm actively seeking opportunities to work on challenging projects that combine AI, 
              Embedded Systems, and real-world impact. Let's connect and explore how we can 
              work together to create innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-full hover-glow"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals; 