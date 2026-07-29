"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FlaskConical,
  ImageIcon,
  Layers3,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";

const realProjects = projects.filter(
  (project) => project.projectType === "real",
);

const demoProjects = projects.filter(
  (project) => project.projectType === "demo",
);

const comingSoonProjects = projects.filter(
  (project) => project.projectType === "coming-soon",
);



const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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

function getProjectGradient(index: number) {
  const gradients = [
    "from-blue-500/25 via-cyan-400/10 to-transparent",
    "from-violet-500/25 via-blue-500/10 to-transparent",
    "from-amber-500/20 via-orange-500/10 to-transparent",
  ];

  return gradients[index % gradients.length];
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-220px] top-[-220px] h-[620px] w-[620px] rounded-full bg-blue-600/15 blur-[180px]" />
        <div className="absolute right-[-260px] top-[220px] h-[640px] w-[640px] rounded-full bg-cyan-500/10 blur-[190px]" />
        <div className="absolute bottom-[-300px] left-1/3 h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-[200px]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Начало
          </Link>

          <div className="text-sm font-black tracking-[0.18em] text-white">
            AP<span className="text-blue-400">X</span> TECHNOLOGIES
          </div>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-12 pb-16 pt-20 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-20 lg:pt-28"
        >
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Selected work
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Реални проекти.
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Бъдещи идеи.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Реални клиентски разработки, завършени демонстрационни проекти и
              концепции, които скоро ще се превърнат в дигитални продукти.
            </p>
          </div>

          <div className="grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 lg:w-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <BriefcaseBusiness className="h-5 w-5 text-blue-300" />
              <p className="mt-4 text-2xl font-black">{realProjects.length}</p>
              <p className="mt-1 text-xs text-white/40">Реални</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <Layers3 className="h-5 w-5 text-violet-300" />
              <p className="mt-4 text-2xl font-black">{demoProjects.length}</p>
              <p className="mt-1 text-xs text-white/40">Демо</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <FlaskConical className="h-5 w-5 text-cyan-300" />
              <p className="mt-4 text-2xl font-black">
                {comingSoonProjects.length}
              </p>
              <p className="mt-1 text-xs text-white/40">Coming Soon</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <Code2 className="h-5 w-5 text-blue-300" />
              <p className="mt-4 text-2xl font-black">Full</p>
              <p className="mt-1 text-xs text-white/40">Stack</p>
            </div>
          </div>
        </motion.section>

        <section>
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-blue-300">
                <Sparkles className="h-4 w-4" />
                Featured work
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Реални проекти
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45">
              Активни клиентски сайтове и собствени платформи, изградени с реална
              цел, реален код и реален процес.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 gap-7 lg:grid-cols-2"
          >
            {realProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${getProjectGradient(
                    index,
                  )} opacity-75 transition duration-500 group-hover:opacity-100`}
                />

                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Отвори проекта ${project.title}`}
                  className="relative block"
                >
                  <div
                    className={`relative overflow-hidden border-b border-white/10 bg-[#07101f] ${
                      index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                    }`}
                  >
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} preview`}
                        fill
                        priority={index < 2}
                        sizes={
                          index === 0
                            ? "100vw"
                            : "(max-width: 1024px) 100vw, 50vw"
                        }
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm font-semibold text-white/30">
                        Project preview
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6">
                      <span
                        className={`rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur-xl ${getStatusClasses(
                          project.status,
                        )}`}
                      >
                        {project.status}
                      </span>

                      <span className="rounded-full border border-white/10 bg-[#030712]/65 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/55 backdrop-blur-xl">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#030712]/65 text-white/75 backdrop-blur-xl transition duration-300 group-hover:rotate-45 group-hover:border-blue-400/40 group-hover:bg-blue-500 group-hover:text-white sm:right-6 sm:top-6">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                          {project.category}
                        </p>

                        <h3
                          className={`mt-4 font-black tracking-[-0.04em] ${
                            index === 0
                              ? "text-4xl sm:text-5xl"
                              : "text-3xl sm:text-4xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <span className="pt-1 text-xs font-bold tracking-[0.25em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
                      {project.shortDescription}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-sm font-bold text-white transition group-hover:text-blue-300">
                        Виж проекта
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-white/50 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:my-28" />

        <section>
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-violet-300">
                <Layers3 className="h-4 w-4" />
                Demo showcase
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Демо проекти
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45">
              Завършени демонстрационни сайтове, създадени да покажат дизайн,
              функционалност и подхода на APX Technologies.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-7 lg:grid-cols-2"
          >
            {demoProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[32px] border border-violet-400/15 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/25 via-blue-500/10 to-transparent opacity-75 transition duration-500 group-hover:opacity-100" />

                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Отвори демо проекта ${project.title}`}
                  className="relative block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#07101f]">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm font-semibold text-white/30">
                        Demo preview
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6">
                      <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-violet-200 backdrop-blur-xl">
                        {project.status}
                      </span>

                      <span className="rounded-full border border-white/10 bg-[#030712]/65 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/55 backdrop-blur-xl">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#030712]/65 text-white/75 backdrop-blur-xl transition duration-300 group-hover:rotate-45 group-hover:border-violet-400/40 group-hover:bg-violet-500 group-hover:text-white sm:right-6 sm:top-6">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-300">
                          {project.category}
                        </p>

                        <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                          {project.title}
                        </h3>
                      </div>

                      <span className="pt-1 text-xs font-bold tracking-[0.25em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
                      {project.shortDescription}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-sm font-bold text-white transition group-hover:text-violet-300">
                        Виж демото
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-white/50 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:my-28" />

        <section>
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                <FlaskConical className="h-4 w-4" />
                Future concepts
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Coming Soon
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45">
              Тези категории са част от бъдещото портфолио. Реални изображения
              и case studies ще бъдат добавени след изграждането на сайтовете.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
          >
            {comingSoonProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                variants={itemVariants}
                className="group relative min-h-[470px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.045]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(145deg,#07101f_0%,#030712_100%)]" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />

                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-cyan-400/10 transition duration-700 group-hover:scale-125" />
                <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full border border-blue-400/10 transition duration-700 group-hover:scale-110" />

                <div className="relative flex h-full min-h-[470px] flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">
                      Coming Soon
                    </span>

                    <span className="text-xs font-black tracking-[0.22em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-2xl transition duration-500 group-hover:bg-cyan-400/30" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <ImageIcon className="h-8 w-8" />
                      </div>
                    </div>

                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.32em] text-cyan-300">
                      Future APX Project
                    </p>

                    <h3 className="mt-4 text-3xl font-black tracking-[-0.045em]">
                      {project.category}
                    </h3>

                    <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
                      {project.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white/30">
                        Preview after launch
                      </span>

                      <Link
                        href="/#contact"
                        aria-label={`Обсъди бъдещ проект за ${project.category}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20 overflow-hidden rounded-[34px] border border-blue-400/15 bg-gradient-to-r from-blue-500/10 via-white/[0.035] to-cyan-500/10 p-8 sm:p-12 lg:mt-28 lg:p-14"
        >
          <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
                Next real project
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-5xl">
                Вашият бизнес може да бъде следващият реален проект.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
                Създаваме индивидуални сайтове и платформи с премиум дизайн,
                бърза работа и ясна бизнес цел.
              </p>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-black transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Започнете проект
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.section>
      </section>
    </main>
  );
}