import { useEffect } from 'react';

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'education',
  'skills',
  'projects',
  'contact',
];

export const useAnimations = () => {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-bounce-in-up');
            entry.target.classList.remove('opacity-0');
          } else {
            entry.target.classList.remove('animate-bounce-in-up');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('opacity-0');
        observer.observe(el);
      }
    });

    return () => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
}; 