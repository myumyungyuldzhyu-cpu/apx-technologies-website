"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Gauge,
  Headphones,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const trustItems = [
  { icon: Sparkles, label: "Premium дизайн" },
  { icon: Zap, label: "Висока скорост" },
  { icon: Search, label: "SEO основа" },
  { icon: Headphones, label: "Реална поддръжка" },
];

const stats = [
  { value: "100%", label: "Custom Design" },
  { value: "90+", label: "Performance Goal" },
  { value: "24/7", label: "Project Access" },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Vercel",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] pt-[78px]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="apx-glow -right-24 top-0 apx-pulse" />
        <div className="apx-glow -left-64 top-[340px] opacity-50" />
        <div className="apx-grid absolute inset-0 opacity-35" />
        <div className="absolute left-1/2 top-20 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="apx-container relative z-10">
        <div className="grid min-h-[740px] items-center gap-14 py-16 lg:grid-cols-[0.94fr_1.06fr] lg:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-[12px] font-semibold text-white/75 backdrop-blur-xl"
            >
              <BadgeCheck size={15} className="text-blue-400" />
              Premium web development studio
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-[720px] text-[44px] font-black leading-[1.04] tracking-[-0.055em] text-white sm:text-[58px] lg:text-[70px]"
            >
              Сайтове, които правят бизнеса
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                невъзможен за пренебрегване.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[650px] text-[16px] leading-8 text-white/55"
            >
              APX Technologies създава премиум уебсайтове и дигитални продукти,
              изградени около силна визия, висока скорост и реални бизнес цели.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="apx-button-primary group">
                Разгледай проектите
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a href="#contact" className="apx-button-secondary group">
                Започни проект
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 grid max-w-[620px] grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-4 py-4 ${
                    index !== stats.length - 1
                      ? "border-r border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div className="text-[20px] font-black tracking-[-0.03em] text-white sm:text-[24px]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-500/[0.06]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105">
                      <Icon size={16} />
                    </span>
                    <span className="text-[12px] font-semibold text-white/65">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.95,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[560px]"
          >
            <div className="absolute left-[4%] top-[8%] h-[84%] w-[84%] rounded-full bg-blue-600/20 blur-[120px]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[1%] top-[4%] w-[92%]"
            >
              <div className="relative mx-auto">
                <div className="rounded-[30px] border border-white/10 bg-[#060b12] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.7)]">
                  <div className="overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#030914]">
                    <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
                      </div>
                      <div className="rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                        apxtechnologies.bg
                      </div>
                    </div>

                    <div className="relative min-h-[385px] overflow-hidden bg-[radial-gradient(circle_at_65%_25%,rgba(37,99,235,0.22),transparent_35%),linear-gradient(145deg,#030914_0%,#07111f_55%,#02060d_100%)]">
                      <div className="apx-grid absolute inset-0 opacity-25" />

                      <div className="relative grid min-h-[385px] grid-cols-[1.1fr_0.9fr] gap-4 p-6">
                        <div className="flex flex-col justify-center">
                          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-blue-300">
                            <Sparkles size={10} />
                            Digital excellence
                          </div>

                          <h2 className="mt-5 max-w-[260px] text-[31px] font-black leading-[1.02] tracking-[-0.06em] text-white">
                            Premium websites built for growth.
                          </h2>

                          <p className="mt-4 max-w-[250px] text-[10px] leading-5 text-white/45">
                            Strategy, design and development combined into one
                            powerful digital experience.
                          </p>

                          <div className="mt-5 flex gap-2">
                            <span className="rounded-lg bg-blue-500 px-3 py-2 text-[8px] font-bold text-white">
                              View projects
                            </span>
                            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[8px] font-bold text-white/55">
                              Start a project
                            </span>
                          </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                          <div className="absolute h-40 w-40 rounded-full border border-blue-400/15" />
                          <div className="absolute h-56 w-56 rounded-full border border-white/[0.04]" />

                          <div className="relative rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                            <h3 className="text-center text-[48px] font-black leading-none tracking-[-0.09em]">
                              <span className="text-white">AP</span>
                              <span className="text-blue-500">X</span>
                            </h3>

                            <p className="mt-2 text-center text-[7px] font-bold uppercase tracking-[0.42em] text-white/45">
                              Technologies
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-2">
                              {[
                                { icon: Code2, label: "Web" },
                                { icon: Smartphone, label: "Apps" },
                                { icon: Gauge, label: "Speed" },
                                { icon: ShieldCheck, label: "Support" },
                              ].map((item) => {
                                const Icon = item.icon;

                                return (
                                  <div
                                    key={item.label}
                                    className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/20 px-2.5 py-2"
                                  >
                                    <Icon size={11} className="text-blue-400" />
                                    <span className="text-[7px] font-semibold text-white/55">
                                      {item.label}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-5 rounded-full border border-white/[0.06] bg-black/20 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.2em] text-white/30 backdrop-blur-xl">
                        Built with Next.js
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto h-4 w-[93%] rounded-b-[40px] bg-gradient-to-b from-[#182334] to-[#05080d]" />
                <div className="mx-auto h-[10px] w-[44%] rounded-b-full bg-[#101722]" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -11, 0], rotate: [2, 1, 2] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[2%] right-[0%] z-20 w-[165px] rotate-[2deg] rounded-[30px] border border-white/15 bg-[#05090f] p-[7px] shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#07101d]">
                <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-white/10" />

                <div className="px-4 pb-5 pt-8">
                  <div className="text-center">
                    <h3 className="text-[24px] font-black leading-none tracking-[-0.08em]">
                      <span className="text-white">AP</span>
                      <span className="text-blue-500">X</span>
                    </h3>
                    <p className="mt-1 text-[5px] uppercase tracking-[0.38em] text-white/45">
                      Technologies
                    </p>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      { icon: Code2, label: "Web Solutions" },
                      { icon: Smartphone, label: "Web Applications" },
                      { icon: Sparkles, label: "AI Solutions" },
                      { icon: ShieldCheck, label: "Support" },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                            <Icon size={12} />
                          </span>
                          <span className="text-[8px] font-semibold text-white/65">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-2%] top-[5%] z-20 hidden rounded-2xl border border-white/10 bg-[#07101d]/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:block"
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Performance
              </div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-[24px] font-black text-white">96</span>
                <span className="pb-1 text-[10px] font-semibold text-green-400">
                  Excellent
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-white/[0.06] py-7">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.32em] text-white/35">
            Технологии, на които се доверяваме
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-5"
          >
            {technologies.map((technology) => (
              <motion.div
                key={technology}
                variants={fadeUp}
                className="flex items-center gap-2 text-[13px] font-semibold text-white/55 transition hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-black text-blue-400">
                  {technology.slice(0, 2)}
                </span>
                {technology}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
