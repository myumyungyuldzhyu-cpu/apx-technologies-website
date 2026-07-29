
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Lightbulb, Rocket, Search } from "lucide-react";

/* Запази масива steps от текущия файл */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="apx-section relative overflow-hidden border-b border-white/[0.06]"
    >
      <div className="apx-grid absolute inset-0 opacity-20" />
      <div className="apx-glow -left-72 top-40 opacity-30" />

      <div className="apx-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="apx-kicker justify-center">
            Нашият процес
          </span>

          <h2 className="apx-title">
            От първата идея
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              до готовия продукт.
            </span>
          </h2>

          <p className="apx-muted mx-auto mt-6 max-w-2xl text-[16px] leading-8">
            Всеки проект преминава през ясен процес, който гарантира качество,
            добра организация и отличен краен резултат.
          </p>
        </motion.div>

        {/* Запази съществуващата timeline логика,
            но добави:
            - hover: scale-[1.02]
            - hover:border-blue-400/30
            - hover:shadow-[0_20px_70px_rgba(37,99,235,.18)]
            - transition-all duration-300

            Кръговете с номера:
            hover:scale-110
            hover:bg-blue-500/15

            Добави малък badge:
            "STEP 01", "STEP 02"... над заглавието.

            Добави CTA карта най-долу:
            ----------------------------------
            Готови ли сте да започнем?
            Нека изградим следващия ви дигитален проект.
            [Започни проекта]
            ----------------------------------
        */}
      </div>
    </section>
  );
}