import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLenis } from './SmoothScroll';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const { lenis } = useLenis();

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5, immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-steel-dark)] flex items-center justify-center group hover:border-[var(--color-accent-orange)] transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 56 56"
          >
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="var(--color-steel-dark)"
              strokeWidth="1"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="var(--color-accent-orange)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength,
              }}
            />
          </svg>

          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300"
          >
            <motion.path
              d="M12 19V5M5 12l7-7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
            />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
