"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock3,
  Code2,
  Gauge,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Реализирани проекта",
    icon: Rocket,
  },
  {
    value: "100%",
    label: "Responsive",
    icon: Code2,
  },
  {
    value: "24/7",
    label: "Поддръжка",
    icon: Clock3,
  },
  {
    value: "∞",
    label: "Идеи",
    icon: Award,
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Качество без компромис",
    text: "Всеки детайл се изпипва до най-малката подробност — от дизайна до производителността.",
  },
  {
    icon: Users,
    title: "Работа с клиента",
    text: "Всеки проект се разработва според конкретните изисквания, цели и идентичност на бизнеса.",
  },
  {
    icon: Palette,
    title: "Премиум визуална система",
    text: "Създаваме последователна визия, която изглежда професионално и вдъхва доверие.",
  },
  {
    icon: Gauge,
    title: "Скорост и ефективност",
    text: "Изграждаме бързи, оптимизирани и удобни продукти за реална ежедневна употреба.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Vercel",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="apx-section relative overflow-hidden border-b border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="apx-glow right-[-220px] top-20 opacity-30" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="apx-grid absolute inset-0 opacity-20" />
      </div>

      <div className="apx-container relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="apx-kicker">
              За APX Technologies
            </motion.span>

            <motion.h2 variants={fadeUp} className="apx-title">
              Ние не просто създаваме сайтове.
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Изграждаме дигитални продукти.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="apx-muted mt-7 max-w-2xl text-[16px] leading-8"
            >
              APX Technologies разработва модерни уебсайтове, бизнес
              платформи и уеб приложения с фокус върху дизайн, скорост,
              сигурност и отлично потребителско изживяване.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 rounded-[28px] border border-blue-400/15 bg-gradient-to-br from-blue-500/10 via-white/[0.025] to-transparent p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                <Sparkles size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-[-0.03em]">
                Нашата мисия
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Да изграждаме дигитални продукти, които изглеждат премиум,
                работят бързо и вдъхват доверие още при първото посещение.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2"
          >
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045]"
                >
                  <div className="absolute right-5 top-5 text-[11px] font-black tracking-[0.2em] text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300 transition group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-black tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="group rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6 text-center transition hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-500/[0.04]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:scale-105">
                  <Icon size={20} />
                </div>

                <p className="mt-5 text-4xl font-black tracking-[-0.05em]">
                  {item.value}
                </p>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.32em] text-white/35">
            Технологии и инструменти
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {technologies.map((technology) => (
              <motion.span
                key={technology}
                variants={fadeUp}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[12px] font-semibold text-white/55 transition hover:border-blue-400/20 hover:bg-blue-500/[0.06] hover:text-blue-200"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}