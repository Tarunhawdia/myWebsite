import type { Variants } from "framer-motion";

// Smooth, editorial easing
export const ease = [0.22, 1, 0.36, 1] as const;

// Fade + rise, used for most scroll reveals
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

// Container that staggers its children into view
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

// Small pop for chips / icons
export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// Shared viewport config so sections reveal once, a bit before fully in view
export const viewport = { once: true, margin: "0px 0px -120px 0px" } as const;
