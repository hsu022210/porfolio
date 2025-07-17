import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { easeOut } from 'motion';

/**
 * useScrollAnimation
 * Unified hook for scroll-triggered and staggered animations.
 *
 * @param options - Optional configuration for stagger delay, margin, and once behavior.
 * @returns Animation props and variants for use with framer-motion components.
 */
export const useScrollAnimation = (options?: {
  staggerDelay?: number;
  margin?: string;
  once?: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    margin: (options?.margin ?? "-100px 0px -100px 0px"),
  });

  // For staggered animations
  const staggerDelay = options?.staggerDelay ?? 0;

  // Simple fade/slide-in animation
  const baseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: easeOut,
      },
    },
  };

  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  // Staggered child item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return {
    ref,
    isInView,
    // For simple scroll animations
    initial: baseVariants.hidden,
    animate: isInView ? baseVariants.visible : baseVariants.hidden,
    transition: baseVariants.visible.transition,
    // For staggered animations
    containerVariants,
    itemVariants,
  };
}; 