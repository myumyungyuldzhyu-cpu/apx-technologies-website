"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const topGlowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const sideGlowY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const centerGlowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-[-10%] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"
      />

      <motion.div
        style={{ y: topGlowY }}
        className="absolute left-[-240px] top-[-240px] h-[680px] w-[680px] rounded-full bg-blue-600/15 blur-[190px]"
      />

      <motion.div
        style={{ y: sideGlowY }}
        className="absolute right-[-260px] top-[120px] h-[660px] w-[660px] rounded-full bg-cyan-500/10 blur-[190px]"
      />

      <motion.div
        style={{ y: centerGlowY }}
        className="absolute bottom-[-330px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[230px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.15)_55%,rgba(3,7,18,0.72)_100%)]" />
    </div>
  );
}