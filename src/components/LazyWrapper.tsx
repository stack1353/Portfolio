import React, { Suspense, memo } from 'react';
import { motion } from 'framer-motion';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultFallback: React.FC = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-neon-blue border-t-transparent rounded-full"
    />
  </div>
));

const LazyWrapper: React.FC<LazyWrapperProps> = memo(({ 
  children, 
  fallback = <DefaultFallback />, 
  className = "" 
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
});

LazyWrapper.displayName = 'LazyWrapper';

export default LazyWrapper;
