"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1500);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2100);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020712] transition-all duration-700 ${
        leaving
          ? "pointer-events-none scale-105 opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="apx-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />

          <div className="relative flex items-center justify-center leading-none">
            <span className="text-[72px] font-black tracking-[-0.09em] text-white sm:text-[92px]">
              AP
            </span>

            <span className="text-[72px] font-black tracking-[-0.09em] text-blue-500 sm:text-[92px]">
              X
            </span>
          </div>
        </div>

        <p className="mt-3 text-[10px] font-black uppercase tracking-[0.62em] text-white/55 sm:text-[12px]">
          Technologies
        </p>

        <div className="mt-10 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
          <div className="apx-loading-bar h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400" />
        </div>

        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.28em] text-blue-300/60">
          Building Digital Excellence
        </p>
      </div>
    </div>
  );
}