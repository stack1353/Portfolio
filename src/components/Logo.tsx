import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../config/personal';

type LogoProps = {
  size?: number;
  showText?: boolean;
  onClick?: () => void;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ size = 40, showText = true, onClick, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center space-x-3 cursor-pointer select-none ${className}`}
    >
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'conic-gradient(from 0deg, #00d4ff33, #a855f733, #22d3ee33, #00d4ff33)'
          }}
        />
        {/* Inner card */}
        <div className="absolute inset-0.5 bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg border border-white/10 flex items-center justify-center">
          <span className="text-white font-extrabold" style={{ fontSize: Math.max(14, size * 0.45) }}>
            G
          </span>
        </div>
        {/* Glow */}
        <div className="absolute -inset-1 rounded-xl blur-xl opacity-30 bg-gradient-to-r from-neon-blue to-neon-purple" />
      </div>

      {showText && (
        <div className="leading-tight">
          <span className="text-lg font-bold gradient-text block">{personal.name}</span>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 hidden sm:block">Portfolio</span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;



