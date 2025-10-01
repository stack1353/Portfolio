import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Sparkles } from 'lucide-react';
import Button from './Button';
import LazyWrapper from './LazyWrapper';
const ThreeGlobe = React.lazy(() => import('./ThreeGlobe'));

const Hero: React.FC = memo(() => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-neon-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <LazyWrapper fallback={null}>
          <ThreeGlobe />
        </LazyWrapper>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-lg sm:text-xl text-neon-blue font-mono mb-4">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hello, I'm
            </motion.span>
          </h2>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
        >
          <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-orange-400 bg-clip-text text-transparent">Girish </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-medium px-4"
        >
          Engineering Student | Aspiring{' '}
          <span className="text-neon-green">AI ML</span> Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Passionate about solving real-world problems through AI, IoT, and Embedded Systems. 
          Currently pursuing Computer Science at RV College of Engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <Button
            variant="primary"
            size="lg"
            icon={Download}
            className="w-full sm:w-auto"
            href="/resume.pdf"
            download
          >
            Download Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="w-full sm:w-auto"
          >
            Explore More
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-neon-blue cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 sm:top-20 right-4 sm:right-20 text-neon-blue/30"
      >
        <Sparkles size={32} className="sm:w-10 sm:h-10" />
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 