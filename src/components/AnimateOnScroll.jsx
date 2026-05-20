"use client";
import { motion } from "framer-motion";

/**
 * Wraps children with a scroll-triggered fade+slide animation.
 * direction: "up" | "down" | "left" | "right"
 */
export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const offsets = {
    up:    { y: 40,  x: 0   },
    down:  { y: -40, x: 0   },
    left:  { y: 0,   x: 40  },
    right: { y: 0,   x: -40 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
