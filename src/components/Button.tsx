import React, { memo, forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  ...motionProps
}, ref) => {
  const baseClasses = 'relative font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:shadow-neon-blue/25',
    secondary: 'bg-gradient-to-r from-neon-purple to-neon-green text-white hover:shadow-lg hover:shadow-neon-purple/25',
    outline: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white hover-glow',
    ghost: 'text-gray-300 hover:text-neon-blue hover:bg-white/5'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;
  
  const content = (
    <>
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
        />
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="mr-2" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && !loading && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="ml-2" />
      )}
    </>
  );
  
  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        target={target}
        rel={rel}
        download={download as any}
        className={buttonClasses}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default memo(Button);
