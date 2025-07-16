import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { easeOut } from 'motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  return {
    ref,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { 
      duration: 2, 
      ease: easeOut 
    }
  };
}; 