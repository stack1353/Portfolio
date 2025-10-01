import React, { memo, forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface CardProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = true,
  onClick,
  ...motionProps
}, ref) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-dark-800 border border-white/10',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10',
    elevated: 'bg-dark-800 border border-white/10 shadow-lg shadow-neon-blue/10',
    outlined: 'bg-transparent border-2 border-neon-blue/20 hover:border-neon-blue/40'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:shadow-neon-blue/25 hover:scale-105' : '';
  
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      ref={ref}
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default memo(Card);
