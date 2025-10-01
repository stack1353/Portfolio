import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, SunMedium, Sparkles } from 'lucide-react';

export type ThemeMode = 'dark' | 'light' | 'neon';

const THEME_KEY = 'theme-mode';

function applyTheme(mode: ThemeMode) {
  const html = document.documentElement;
  const body = document.body;
  
  // Add transition class for smooth theme switching
  body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  
  // Remove all theme classes
  html.classList.remove('theme-dark', 'theme-light', 'theme-neon');
  body.classList.remove('theme-dark', 'theme-light', 'theme-neon');
  
  // Add new theme class
  html.classList.add(`theme-${mode}`);
  body.classList.add(`theme-${mode}`);
  
  // Remove transition after animation completes
  setTimeout(() => {
    body.style.transition = '';
  }, 400);
}

const ThemeSwitcher: React.FC = () => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as ThemeMode) || 'dark';
    setMode(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, mode);
    applyTheme(mode);
  }, [mode]);

  const handleThemeChange = (newMode: ThemeMode) => {
    setMode(newMode);
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      applyTheme(newMode);
    }, 50);
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to Dark Mode"
        onClick={() => handleThemeChange('dark')}
        className={`p-2 sm:px-3 sm:py-2 rounded-md border transition-all duration-300 ${
          mode === 'dark' 
            ? 'bg-gray-800 text-white border-gray-600 shadow-lg shadow-gray-900/50' 
            : 'text-gray-300 hover:bg-gray-800/50 border-gray-700 hover:border-gray-600'
        }`}
      >
        <Moon size={14} className="sm:w-4 sm:h-4" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to Light Mode"
        onClick={() => handleThemeChange('light')}
        className={`p-2 sm:px-3 sm:py-2 rounded-md border transition-all duration-300 ${
          mode === 'light' 
            ? 'bg-blue-100 text-blue-900 border-blue-300 shadow-lg shadow-blue-200/50' 
            : 'text-gray-300 hover:bg-blue-100/20 border-gray-700 hover:border-blue-300'
        }`}
      >
        <SunMedium size={14} className="sm:w-4 sm:h-4" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to Neon Mode"
        onClick={() => handleThemeChange('neon')}
        className={`p-2 sm:px-3 sm:py-2 rounded-md border transition-all duration-300 ${
          mode === 'neon' 
            ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-neon-green border-neon-green/50 shadow-lg shadow-neon-green/25 animate-pulse' 
            : 'text-gray-300 hover:bg-purple-600/10 border-gray-700 hover:border-neon-green/30'
        }`}
      >
        <Sparkles size={14} className="sm:w-4 sm:h-4" />
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
