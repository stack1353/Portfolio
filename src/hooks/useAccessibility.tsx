import React, { useEffect, useRef, useState } from 'react';

// Focus management for accessibility
export const useFocusManagement = () => {
  const focusableElements = useRef<HTMLElement[]>([]);

  const trapFocus = (container: HTMLElement) => {
    const focusable = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    focusableElements.current = Array.from(focusable);
    
    const firstElement = focusableElements.current[0];
    const lastElement = focusableElements.current[focusableElements.current.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  };

  return { trapFocus };
};

// Skip to content link
export const SkipToContent: React.FC = () => {
  const handleClick = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon-blue text-white px-4 py-2 rounded-md z-50"
    >
      Skip to main content
    </a>
  );
};

// ARIA live region for announcements
export const useAnnouncer = () => {
  const announcerRef = useRef<HTMLDivElement>(null);

  const announce = (message: string) => {
    if (announcerRef.current) {
      announcerRef.current.textContent = message;
    }
  };

  const Announcer: React.FC = () => (
    <div
      ref={announcerRef}
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );

  return { announce, Announcer };
};

// Keyboard navigation helpers
export const useKeyboardNavigation = () => {
  const handleKeyDown = (e: KeyboardEvent, actions: Record<string, () => void>) => {
    const action = actions[e.key];
    if (action) {
      e.preventDefault();
      action();
    }
  };

  const handleArrowKeys = (
    e: KeyboardEvent,
    onUp?: () => void,
    onDown?: () => void,
    onLeft?: () => void,
    onRight?: () => void
  ) => {
    switch (e.key) {
      case 'ArrowUp':
        onUp?.();
        break;
      case 'ArrowDown':
        onDown?.();
        break;
      case 'ArrowLeft':
        onLeft?.();
        break;
      case 'ArrowRight':
        onRight?.();
        break;
    }
  };

  return { handleKeyDown, handleArrowKeys };
};

// Screen reader only text
export const SrOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// High contrast mode detection
export const useHighContrast = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};
