import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Heart } from 'lucide-react';
import profile from '../assets/profil1.png' // ✅ import photo

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Profile Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl profile-photo">
                <img 
                  src={profile}   // ✅ imported image path
                  alt="Girish - Engineering Student & AI Enthusiast"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center backdrop-blur-sm" style={{ display: 'none' }}>
                  <User size={120} className="text-neon-blue/60" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green rounded-full animate-bounce-slow shadow-lg shadow-neon-green/50"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-pulse-slow shadow-lg shadow-neon-purple/50"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-neon-blue rounded-full animate-float shadow-lg shadow-neon-blue/50"></div>
              
              {/* Glow effect around photo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Engineering Student & AI Enthusiast
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a 3rd-year BE Computer Science student at{' '}
              <span className="text-neon-green font-semibold">RV College of Engineering</span>. 
              My passion lies at the intersection of AI, Embedded Systems, and Edge AI, where I strive 
              to solve real-world problems that make a meaningful impact.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From agriculture and surveillance to defense applications, I'm driven by the challenge 
              of creating innovative solutions that can serve our nation and make my family proud. 
              My dream is to live a simple, happy life while contributing to something bigger than myself.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 glass-card hover-glow"
              >
                <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                  <GraduationCap size={20} className="text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Education</p>
                  <p className="font-semibold text-white">BE Computer Science</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 glass-card hover-glow"
              >
                <div className="w-10 h-10 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold text-white">Bangalore, India</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 glass-card hover-glow"
              >
                <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center">
                  <Heart size={20} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Passion</p>
                  <p className="font-semibold text-white">AI + Embedded Systems</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 glass-card hover-glow"
              >
                <div className="w-10 h-10 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                  <Heart size={20} className="text-neon-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Goal</p>
                  <p className="font-semibold text-white">Contribute to Nation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
