"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ОКОЛО МЕН",
    category: "Business Directory Platform",
    description:
      "Модерна платформа за откриване на местни бизнеси, услуги и професионалисти с профили, търсене, категории и рейтинги.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "/projects/okolo-men",
    liveUrl: "https://okolomen.com",
    size: "large",
    accent: "from-blue-500/30 via-cyan-400/10 to-transparent",
    preview: "directory",
  },
  {
    title: "APX Market Analysis",
    category: "Trading Platform",
    description:
      "Платформа за пазарен анализ с интерактивни графики, пазарни инструменти, потребителски профили и модерен dashboard.",
    technologies: ["Next.js", "React", "TypeScript", "API"],
    href: "/projects/apx-market-analysis",
    liveUrl: "#",
    size: "medium",
    accent: "from-violet-500/25 via-blue-500/10 to-transparent",
    preview: "trading",
  },
  {
    title: "Delchevi Furniture",
    category: "Furniture Website",
    description:
      "Представителен сайт за мебелен бизнес с продуктови категории, галерия и професионално бизнес представяне.",
    technologies: ["Next.js", "Tailwind CSS", "Responsive", "SEO"],
    href: "/projects/delchevi",
    liveUrl: "#",
    size: "medium",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    preview: "furniture",
  },
  {
    title: "Dental Clinic Concept",
    category: "Medical Website",
    description:
      "Премиум концепция за дентална клиника с услуги, екип, галерия, контакти и възможност за записване на час.",
    technologies: ["Custom Design", "Appointments", "Mobile", "SEO"],
    href: "/projects/dental-clinic",
    liveUrl: "#",
    size: "wide",
    accent: "from-emerald-400/20 via-cyan-400/10 to-transparent",
    preview: "dental",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ProjectPreview({ type }: { type: string }) {
  if (type === "directory") {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1020] p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-500/80" />
            <div>
              <div className="h-2.5 w-20 rounded-full bg-white/80" />
              <div className="mt-1.5 h-1.5 w-14 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="h-8 w-20 rounded-xl bg-blue-500/20" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="h-20 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-400/5" />
              <div className="mt-3 h-2.5 w-3/4 rounded-full bg-white/70" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/15" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
    );
  }

  if (type === "trading") {
    return (
      <div className="relative h-full min-h-[230px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080d18] p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="h-3 w-24 rounded-full bg-white/75" />
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-lg bg-white/5" />
            <div className="h-7 w-7 rounded-lg bg-blue-500/20" />
          </div>
        </div>

        <div className="relative mt-5 h-32 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <svg viewBox="0 0 500 160" className="absolute inset-0 h-full w-full">
            <polyline
              points="0,126 45,118 85,128 128,92 174,102 220,72 267,86 312,52 358,63 404,31 458,45 500,19"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-blue-400"
            />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["BUY", "TREND", "SCORE"].map((label) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
              <div className="text-[9px] font-semibold tracking-[0.18em] text-white/35">
                {label}
              </div>
              <div className="mt-2 h-2.5 w-12 rounded-full bg-blue-400/70" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "furniture") {
    return (
      <div className="relative h-full min-h-[230px] overflow-hidden rounded-[24px] border border-white/10 bg-[#14100c] p-4">
        <div className="h-full rounded-[20px] bg-gradient-to-br from-amber-200/20 via-orange-400/10 to-transparent p-5">
          <div className="flex h-full min-h-[190px] items-end justify-between gap-4">
            <div className="max-w-[55%] pb-4">
              <div className="h-3 w-24 rounded-full bg-white/80" />
              <div className="mt-3 h-2 w-32 rounded-full bg-white/25" />
              <div className="mt-2 h-2 w-20 rounded-full bg-white/15" />
              <div className="mt-5 h-9 w-24 rounded-xl bg-amber-400/20" />
            </div>

            <div className="relative h-36 w-40">
              <div className="absolute bottom-0 left-1/2 h-16 w-36 -translate-x-1/2 rounded-t-[40px] bg-amber-200/30" />
              <div className="absolute bottom-12 left-1/2 h-14 w-28 -translate-x-1/2 rounded-3xl bg-amber-100/20" />
              <div className="absolute bottom-0 left-5 h-10 w-2 rounded-full bg-amber-100/30" />
              <div className="absolute bottom-0 right-5 h-10 w-2 rounded-full bg-amber-100/30" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[230px] overflow-hidden rounded-[24px] border border-white/10 bg-[#071315] p-4">
      <div className="grid h-full min-h-[190px] grid-cols-[0.8fr_1.2fr] gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="h-8 w-8 rounded-xl bg-emerald-400/30" />
          <div className="mt-6 h-3 w-24 rounded-full bg-white/80" />
          <div className="mt-3 h-2 w-full rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
          <div className="mt-6 h-9 w-28 rounded-xl bg-emerald-400/20" />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-300/20 to-cyan-300/5">
          <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-t-[80px] bg-white/10" />
          <div className="absolute left-1/2 top-8 h-14 w-14 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="absolute bottom-8 left-1/2 h-20 w-28 -translate-x-1/2 rounded-t-[40px] bg-white/15" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#05070d] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col gap-6 lg:mb-18 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Selected work
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Проекти, които показват
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                реални възможности.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/55 sm:text-lg">
            Всеки проект е създаден с индивидуален дизайн, модерни технологии и
            внимание към всеки детайл.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {projects.map((project, index) => {
            const isLarge = project.size === "large";
            const isWide = project.size === "wide";

            return (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-3 transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] ${
                  isLarge || isWide ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`}
                />

                <div
                  className={`relative grid gap-6 rounded-[24px] border border-white/5 bg-[#080b12]/75 p-4 backdrop-blur-sm sm:p-5 ${
                    isLarge || isWide
                      ? "lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch"
                      : ""
                  }`}
                >
                  <div className={isLarge || isWide ? "lg:order-2" : ""}>
                    <ProjectPreview type={project.preview} />
                  </div>

                  <div
                    className={`flex flex-col justify-between px-1 pb-1 sm:px-2 ${
                      isLarge || isWide ? "lg:order-1 lg:py-5" : "pt-1"
                    }`}
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                          {project.category}
                        </span>
                        <span className="text-xs font-semibold text-white/25">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/55"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition duration-300 hover:bg-blue-400"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>

                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/65 transition duration-300 hover:border-blue-400/40 hover:text-white"
                        >
                          Live Demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.035] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/10"
          >
            Виж всички проекти
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}