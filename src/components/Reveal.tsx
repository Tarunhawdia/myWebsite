import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades + rises its children into view once on scroll. */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;
