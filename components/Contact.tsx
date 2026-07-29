"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+359 899 277 511",
    href: "tel:+359899277511",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@apx-technologies.com",
    href: "mailto:info@apx-technologies.com",
  },
  {
    icon: MapPin,
    title: "Локация",
    value: "Стара Загора, България",
    href: "https://maps.google.com/?q=Stara+Zagora+Bulgaria",
  },
];

const benefits = [
  "Безплатна първоначална консултация",
  "Индивидуален подход към всеки проект",
  "Модерни технологии и премиум дизайн",
  "Поддръжка след публикуване",
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="apx-section relative overflow-hidden border-b border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="apx-glow right-[-180px] top-16 opacity-30" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="apx-grid absolute inset-0 opacity-20" />
      </div>

      <div className="apx-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="apx-kicker">
              Контакти
            </motion.span>

            <motion.h2 variants={fadeUp} className="apx-title">
              Нека създадем
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                следващия ти проект.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="apx-muted mt-6 max-w-xl text-[16px] leading-8"
            >
              Разкажи ми за идеята си и ще изградим професионален уебсайт или
              платформа, съобразени с нуждите и целите на твоя бизнес.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-10 space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target={contact.title === "Локация" ? "_blank" : undefined}
                    rel={
                      contact.title === "Локация"
                        ? "noreferrer"
                        : undefined
                    }
                    variants={fadeUp}
                    className="group apx-panel flex items-center gap-4 rounded-[22px] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                        {contact.title}
                      </p>

                      <p className="mt-1 truncate font-bold text-white/80 transition group-hover:text-white">
                        {contact.value}
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      className="ml-auto shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-400">
                Какво получавате
              </p>

              <div className="mt-5 space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />

                    <p className="text-sm leading-6 text-white/55">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="apx-panel relative overflow-hidden rounded-[32px] p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-[90px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400">
                    Нов проект
                  </p>

                  <h3 className="mt-1 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
                    Изпрати запитване
                  </h3>
                </div>
              </div>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/45">
                      Име
                    </span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Вашето име"
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-blue-500/50 focus:bg-blue-500/[0.035] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/45">
                      Email
                    </span>

                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-blue-500/50 focus:bg-blue-500/[0.035] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-white/45">
                    Компания
                  </span>

                  <input
                    type="text"
                    name="company"
                    placeholder="Име на компанията (по желание)"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-blue-500/50 focus:bg-blue-500/[0.035] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-white/45">
                    Проект
                  </span>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Разкажете накратко за проекта..."
                    className="resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/25 focus:border-blue-500/50 focus:bg-blue-500/[0.035] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                  />
                </label>

                <button type="submit" className="apx-button-primary group mt-1">
                  <Send size={16} />
                  Започни проекта
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>

              <div className="mt-7 border-t border-white/[0.06] pt-6 text-center">
                <h4 className="text-xl font-black tracking-[-0.04em]">
                  <span className="text-white">AP</span>
                  <span className="text-blue-500">X</span>
                </h4>

                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                  Technologies
                </p>

                <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-white/35">
                  Създаваме модерни уебсайтове и дигитални продукти, които
                  впечатляват още от първото посещение.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}