"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 shadow-[0_0_18px_rgba(59,130,246,0.75)]"
      style={{ scaleX }}
    />
  );
}