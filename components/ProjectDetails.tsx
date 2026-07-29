"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Monitor,
  Rocket,
  Search,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";

import type { Project } from "@/types/project";

type ProjectDetailsProps = {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
};

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

const processSteps = [
  {
    number: "01",
    title: "Проучване",
    description:
      "Определяне на целите, аудиторията, структурата и основните функционалности на проекта.",
    icon: Search,
  },
  {
    number: "02",
    title: "Концепция",
    description:
      "Изграждане на визуалната посока, потребителското изживяване и цялостната идентичност.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Разработка",
    description:
      "Превръщане на одобрения дизайн в бърз, адаптивен и функционален дигитален продукт.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Тестване",
    description:
      "Проверка на функционалностите, мобилната версия, скоростта и поведението на различни устройства.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Публикуване",
    description:
      "Финално оптимизиране, свързване на услугите и публикуване на проекта онлайн.",
    icon: Rocket,
  },
];

function getStatusClasses(status: string) {
  const normalizedStatus = status.toLocaleLowerCase("bg-BG");

  if (
    normalizedStatus.includes("активен") ||
    normalizedStatus.includes("готов")
  ) {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (
    normalizedStatus.includes("разработка") ||
    normalizedStatus.includes("процес")
  ) {
    return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }

  return "border-blue-400/20 bg-blue-400/10 text-blue-300";
}

export default function ProjectDetails({
  project,
  previousProject,
  nextProject,
}: ProjectDetailsProps) {
  const mainImage = project.coverImage || project.gallery[0];
  const desktopImage = project.gallery[0] || mainImage;
  const tabletImage = project.gallery[1] || desktopImage;
  const mobileImage = project.gallery[2] || desktopImage;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-220px] top-[-220px] h-[640px] w-[640px] rounded-full bg-blue-600/15 blur-[190px]" />
        <div className="absolute right-[-260px] top-[220px] h-[680px] w-[680px] rounded-full bg-cyan-500/10 blur-[210px]" />
        <div className="absolute bottom-[-300px] left-1/3 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[220px]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Всички проекти
          </Link>

          <Link
            href="/"
            className="text-sm font-black tracking-[0.18em] text-white"
          >
            AP<span className="text-blue-400">X</span> TECHNOLOGIES
          </Link>
        </header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid gap-10 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-24 lg:pt-28"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                {project.category}
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${getStatusClasses(
                  project.status,
                )}`}
              >
                {project.status}
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                {project.year}
              </span>
            </div>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-white/55 sm:text-lg">
              {project.shortDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Разгледай проекта
                <ArrowUpRight className="h-4 w-4" />
              </a>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-bold transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  Отвори сайта
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </motion.section>

        {mainImage ? (
          <motion.section
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent p-3 shadow-2xl shadow-blue-950/30 sm:p-5"
          >
            <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07101f] sm:min-h-[560px]">
              <Image
                src={mainImage}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#030712]/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/65 backdrop-blur-xl sm:left-8 sm:top-8">
                Featured project
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                  Project preview
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                  {project.shortTitle}
                </h2>
              </div>
            </div>
          </motion.section>
        ) : null}

        <section
          id="overview"
          className="grid gap-10 border-b border-white/10 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Overview
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Идеята зад проекта.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-base leading-8 text-white/55 sm:text-lg">
              {project.description}
            </p>
          </motion.div>
        </section>

        <section className="grid gap-12 border-b border-white/10 py-24 lg:grid-cols-[1fr_1.2fr] lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Project information
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Основни данни.
            </h2>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {project.stats.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${stat.value}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="bg-[#07101f] p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  {stat.label}
                </p>

                <p className="mt-3 text-lg font-black">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {desktopImage ? (
          <section className="border-b border-white/10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Responsive experience
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Създаден за всеки екран.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                Проектът е оптимизиран за настолни компютри, таблети и мобилни
                устройства, за да осигури еднакво добро изживяване навсякъде.
              </p>
            </motion.div>

            <div className="relative mt-14 min-h-[470px] lg:min-h-[650px]">
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 right-0 top-0 mx-auto w-full max-w-5xl"
              >
                <div className="rounded-[30px] border border-white/10 bg-[#0a1222] p-3 shadow-2xl shadow-black/40 sm:p-4">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <Monitor className="h-4 w-4 text-white/30" />
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] border border-white/10 bg-[#07101f]">
                    <Image
                      src={desktopImage}
                      alt={`${project.title} desktop preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1000px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 0.18 }}
                className="absolute bottom-0 left-2 w-[44%] max-w-[360px] sm:left-8 lg:left-20"
              >
                <div className="rounded-[28px] border border-white/10 bg-[#0a1222] p-3 shadow-2xl shadow-black/50">
                  <div className="mb-3 flex items-center justify-between px-1">
                    <Tablet className="h-4 w-4 text-white/30" />
                    <span className="h-1.5 w-10 rounded-full bg-white/10" />
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#07101f]">
                    <Image
                      src={tabletImage}
                      alt={`${project.title} tablet preview`}
                      fill
                      sizes="360px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 0.28 }}
                className="absolute bottom-0 right-2 w-[27%] max-w-[210px] sm:right-10 lg:right-24"
              >
                <div className="rounded-[30px] border border-white/10 bg-[#0a1222] p-2.5 shadow-2xl shadow-black/50">
                  <div className="mb-2 flex justify-center">
                    <span className="h-1.5 w-14 rounded-full bg-white/10" />
                  </div>

                  <div className="relative aspect-[9/19] overflow-hidden rounded-[24px] border border-white/10 bg-[#07101f]">
                    <Image
                      src={mobileImage}
                      alt={`${project.title} mobile preview`}
                      fill
                      sizes="210px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="mt-2 flex justify-center">
                    <Smartphone className="h-3.5 w-3.5 text-white/20" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ) : null}

        <section className="border-b border-white/10 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Development process
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              От идея до готов продукт.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
              Всеки проект преминава през ясни етапи, които осигуряват стабилна
              структура, професионална визия и надеждна работа.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-blue-400/70 via-white/10 to-transparent md:block" />

            <div className="space-y-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="relative grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-400/25 hover:bg-white/[0.055] md:grid-cols-[56px_0.45fr_1fr] md:items-center md:gap-8 md:bg-transparent md:p-5 md:hover:bg-white/[0.035]"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-[#07101f] text-blue-300 shadow-xl shadow-black/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                        Стъпка {step.number}
                      </p>
                      <h3 className="mt-2 text-xl font-black sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-white/50 sm:text-base">
                      {step.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-24 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Technologies
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Използвани технологии.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.055]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-[0.2em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-blue-400 opacity-50 transition group-hover:opacity-100" />
                </div>

                <p className="mt-8 text-lg font-black">{technology}</p>
                <p className="mt-2 text-sm text-white/40">
                  Част от технологичната основа на проекта.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-24 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Core features
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Основни функционалности.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <motion.article
                key={`${feature}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.035 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.055] sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-black leading-7 sm:text-xl">
                      {feature}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {project.gallery.length > 1 ? (
          <section className="border-b border-white/10 py-24 lg:py-32">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Gallery
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Изгледи от проекта.
            </h2>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={`${image}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07101f] sm:min-h-[360px] ${
                    index === 0 ? "lg:col-span-2 lg:min-h-[600px]" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 1280px"
                        : "(max-width: 1024px) 100vw, 640px"
                    }
                    className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="py-24 lg:py-32">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Continue exploring
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Други проекти.
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden items-center gap-2 text-sm font-bold text-white/60 transition hover:text-white sm:inline-flex"
            >
              Виж всички
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group relative min-h-[250px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-8"
              >
                {previousProject.coverImage ? (
                  <Image
                    src={previousProject.coverImage}
                    alt={previousProject.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />

                <div className="relative flex h-full min-h-[194px] flex-col justify-end">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                    Предишен проект
                  </p>
                  <h3 className="mt-3 text-2xl font-black transition group-hover:text-blue-300">
                    {previousProject.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group relative min-h-[250px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-8"
              >
                {nextProject.coverImage ? (
                  <Image
                    src={nextProject.coverImage}
                    alt={nextProject.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />

                <div className="relative flex h-full min-h-[194px] flex-col items-end justify-end text-right">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                    Следващ проект
                  </p>
                  <h3 className="mt-3 text-2xl font-black transition group-hover:text-blue-300">
                    {nextProject.title}
                  </h3>
                </div>
              </Link>
            ) : null}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
                Start a project
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Имате идея за собствен дигитален продукт?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                APX Technologies изгражда индивидуални уебсайтове и платформи,
                съобразени с конкретния бизнес и неговите цели.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#030712] transition hover:-translate-y-0.5 hover:bg-blue-100"
            >
              Свържете се
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}