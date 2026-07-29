"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { PropsWithChildren, MouseEvent } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function MagneticButton({ children, className = "" }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 15 });
  const springY = useSpring(y, { stiffness: 180, damping: 15 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}