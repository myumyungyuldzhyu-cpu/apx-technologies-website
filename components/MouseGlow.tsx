"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return;
    }

    let frameId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      glow.style.transform = `translate3d(${currentX - 210}px, ${currentY - 210}px, 0)`;

      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16)_0%,rgba(34,211,238,0.08)_34%,transparent_70%)] blur-[18px] will-change-transform lg:block"
    />
  );
}