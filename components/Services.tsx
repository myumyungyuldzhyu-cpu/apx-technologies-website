"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  Gauge,
  LayoutTemplate,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Корпоративни уебсайтове",
    description:
      "Професионални бизнес сайтове с премиум визия, ясна структура и силно първо впечатление.",
    label: "Web Design",
  },
  {
    icon: Code2,
    title: "Уеб приложения",
    description:
      "Персонализирани платформи, клиентски портали, админ панели и системи според нуждите на бизнеса.",
    label: "Development",
  },
  {
    icon: Smartphone,
    title: "Responsive дизайн",
    description:
      "Отлично изживяване на телефон, таблет и компютър без компромис във визията.",
    label: "Mobile First",
  },
  {
    icon: Search,
    title: "SEO оптимизация",
    description:
      "Техническа основа за по-добро индексиране, висока скорост и по-добро представяне в търсачките.",
    label: "Visibility",
  },
  {
    icon: Gauge,
    title: "Висока производителност",
    description:
      "Бързо зареждане, оптимизиран код и модерна технологична архитектура.",
    label: "Performance",
  },
  {
    icon: Bot,
    title: "AI решения",
    description:
      "Интелигентни асистенти, автоматизации и персонализирани AI функционалности.",
    label: "Automation",
  },
  {
    icon: Database,
    title: "Бази данни и системи",
    description:
      "Сигурна работа с PostgreSQL, Prisma, потребителски профили и бизнес логика.",
    label: "Infrastructure",
  },
  {
    icon: ShieldCheck,
    title: "Поддръжка и развитие",
    description:
      "Техническа поддръжка, актуализации и развитие на проекта след публикуване.",
    label: "Long-term",
  },
];

const stats = [
  {
    value: "5+",
    label: "Завършени проекта",
  },
  {
    value: "100%",
    label: "Responsive дизайн",
  },
  {
    value: "24/7",
    label: "Онлайн присъствие",
  },
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

export default function Services() {
  return (
    <section
      id="services"
      className="apx-section relative overflow-hidden border-b border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="apx-glow -left-72 top-24 opacity-35" />
        <div className="apx-grid absolute inset-0 opacity-20" />
        <div className="absolute right-[-180px] top-[18%] h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="apx-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="apx-kicker justify-center">
            Нашите услуги
          </motion.span>

          <motion.h2 variants={fadeUp} className="apx-title">
            Всичко необходимо за
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              силно дигитално присъствие.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="apx-muted mx-auto mt-6 max-w-2xl text-[16px] leading-8"
          >
            От първата идея до публикуването и поддръжката — създаваме
            завършени дигитални решения за реални бизнес цели.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
          className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group apx-panel relative overflow-hidden rounded-[26px] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">
                      <Icon size={24} />
                    </div>

                    <span className="text-[11px] font-black tracking-[0.2em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400/70">
                    {service.label}
                  </p>

                  <h3 className="mt-3 text-[21px] font-black tracking-[-0.025em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/50">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="text-[11px] font-semibold text-white/30">
                      APX Technologies
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/35 transition group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group apx-panel rounded-[24px] p-7 text-center transition hover:-translate-y-1 hover:border-blue-500/25"
            >
              <p className="text-[40px] font-black tracking-[-0.05em] text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 overflow-hidden rounded-[30px] border border-blue-400/15 bg-gradient-to-r from-blue-500/10 via-white/[0.025] to-cyan-500/10 p-8"
        >
          <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="flex max-w-2xl items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                <Sparkles size={22} />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-white">
                  Имате идея за нов проект?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Ще превърнем идеята ви в професионален дигитален продукт,
                  създаден специално за вашия бизнес.
                </p>
              </div>
            </div>

            <a href="#contact" className="apx-button-primary group shrink-0">
              Обсъди своя проект
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}