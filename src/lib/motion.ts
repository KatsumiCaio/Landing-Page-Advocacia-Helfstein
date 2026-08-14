import { Variants, Transition } from 'motion/react';

// Motion Principles based on Emil Kowalski (speed & restraint) + Jakub Krehel (polish) + Jhey Tompkins (delight)

export const transitions: Record<string, Transition> = {
  springSnappy: {
    type: 'spring',
    stiffness: 400,
    damping: 28,
    mass: 0.8,
  },
  springSmooth: {
    type: 'spring',
    stiffness: 260,
    damping: 24,
    mass: 1,
  },
  springGentle: {
    type: 'spring',
    stiffness: 180,
    damping: 22,
    mass: 1.1,
  },
  easeFast: {
    duration: 0.18,
    ease: [0.16, 1, 0.3, 1], // ease-out-expo
  },
  easeMedium: {
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1],
  },
  easeSlow: {
    duration: 0.45,
    ease: [0.25, 1, 0.5, 1],
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.easeMedium,
  },
  exit: {
    opacity: 0,
    transition: transitions.easeFast,
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.springSmooth,
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: transitions.easeFast,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.springSnappy,
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 6,
    transition: transitions.easeFast,
  },
};

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(8px)',
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.15 },
  },
};

export const interactiveTap = {
  scale: 0.98,
  transition: { duration: 0.08 },
};

export const interactiveHover = {
  y: -2,
  transition: { duration: 0.15, ease: 'easeOut' as const },
};
