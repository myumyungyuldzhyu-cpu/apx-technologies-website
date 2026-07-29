"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  ImageIcon,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";

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
      staggerChildren: 0.12,
    },
  },
};

const comingSoonProjects = [
  {
    id: "medical",
    category: "Medical Website",
    description:
      "Премиум сайт за медицинска клиника с услуги, екип и онлайн записване.",
  },
  {
    id: "restaurant",
    category: "Restaurant Website",
    description:
      "Елегантен ресторантски сайт с меню, атмосфера и онлайн резервации.",
  },
  {
    id: "hotel",
    category: "Hotel Website",
    description:
      "Луксозна хотелска платформа със стаи, удобства и директни резервации.",
  },
];

export default function Projects() {
  const realProjects = projects
    .filter(
      (project) =>
        project.projectType === "real" && project.featured,
    )
    .slice(0, 3);

  const demoProjects = projects
    .filter(
      (project) =>
        project.projectType === "demo" && project.featured,
    )
    .slice(0, 3);

  return (
    <section
      id="projects"
      className="apx-section relative overflow-hidden border-b border-white/[0.06] bg-[#05070b]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="apx-grid absolute inset-0 opacity-15" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.06] blur-[140px]" />
      </div>

      <div className="apx-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <motion.span variants={fadeUp} className="apx-kicker">
              Избрани проекти
            </motion.span>

            <motion.h2 variants={fadeUp} className="apx-title">
              Реални проекти.
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Демо идеи. Бъдещи продукти.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="max-w-xl lg:pb-2">
            <p className="apx-muted text-[16px] leading-8">
              Портфолио, разделено ясно на реални разработки, демонстрационни
              проекти и концепции, които скоро ще бъдат превърнати в завършени
              дигитални продукти.
            </p>
          </motion.div>
        </motion.div>

        <ProjectSectionHeader
          icon={<Rocket className="h-4 w-4" />}
          eyebrow="Real Projects"
          title="Реални проекти"
          description="Активни клиентски сайтове и собствени платформи с реален код, реална цел и реално приложение."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
          className="grid gap-7 lg:grid-cols-2"
        >
          {realProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.38)] transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block"
                aria-label={`Разгледай проекта ${project.title}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#0b0f17] ${
                    index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                  }`}
                >
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      priority={index < 2}
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 1024px) 100vw, 50vw"
                      }
                      className="object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.055]"
                    />
                  ) : (
                    <ProjectPreviewPlaceholder label="Real Project" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/20 to-transparent" />
                  <div className="absolute inset-0 bg-blue-500/0 transition duration-500 group-hover:bg-blue-500/[0.04]" />

                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-sm font-black text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {index === 0 && (
                      <span className="hidden rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-300 backdrop-blur-md sm:inline-flex">
                        Featured Case Study
                      </span>
                    )}
                  </div>

                  <div className="absolute right-5 top-5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-md">
                    Real
                  </div>
                </div>

                <ProjectCardContent project={project} index={index} />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {realProjects.length === 0 && (
          <EmptyState
            title="Няма избрани реални проекти"
            text='Добави projectType: "real" и featured: true в data/projects.'
          />
        )}

        <SectionDivider />

        <ProjectSectionHeader
          icon={<FlaskConical className="h-4 w-4" />}
          eyebrow="Demo Projects"
          title="Демо проекти"
          description="Готови концепции, които демонстрират стил, структура и възможности, но не са клиентски реализации."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
          className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {demoProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-violet-400/30"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block"
                aria-label={`Разгледай демо проекта ${project.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0f17]">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.055]"
                    />
                  ) : (
                    <ProjectPreviewPlaceholder label="Demo Preview" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-violet-300 backdrop-blur-md">
                    Demo
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/70 backdrop-blur-md transition group-hover:bg-violet-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                    {project.shortTitle}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {project.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-white/55"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {demoProjects.length === 0 && (
          <EmptyState
            title="Няма избрани демо проекти"
            text='Добави projectType: "demo" и featured: true в data/projects.'
          />
        )}

        <SectionDivider />

        <ProjectSectionHeader
          icon={<Sparkles className="h-4 w-4" />}
          eyebrow="Coming Soon"
          title="Coming Soon"
          description="Бъдещи категории, които ще получат реални изображения и case studies след изграждането им."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
          className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {comingSoonProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.15),transparent_38%),linear-gradient(145deg,#07101f_0%,#030712_100%)]" />
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:30px_30px]" />

              <div className="relative flex min-h-[390px] flex-col p-6">
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
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <ImageIcon className="h-7 w-7" />
                    </div>
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                    Future APX Project
                  </p>

                  <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-white">
                    {project.category}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-white/45">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5 text-center text-xs font-semibold text-white/30">
                  Real preview after launch
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 flex justify-center"
        >
          <Link href="/projects" className="apx-button-secondary group">
            Виж всички проекти
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectSectionHeader({
  icon,
  eyebrow,
  title,
  description,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-blue-300">
          {icon}
          {eyebrow}
        </div>

        <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h3>
      </div>

      <p className="max-w-xl text-sm leading-7 text-white/45">{description}</p>
    </div>
  );
}

function ProjectCardContent({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <div className={`relative ${index === 0 ? "p-7 sm:p-9" : "p-6 sm:p-8"}`}>
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-6">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em]">
              <span className="text-blue-400">{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span className="text-white/35">{project.year}</span>
            </div>

            <h3
              className={`font-black tracking-[-0.04em] text-white ${
                index === 0
                  ? "text-3xl sm:text-4xl"
                  : "text-2xl sm:text-3xl"
              }`}
            >
              {project.shortTitle}
            </h3>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:rotate-45" />
          </div>
        </div>

        <p
          className={`text-white/52 ${
            index === 0
              ? "max-w-3xl text-[15px] leading-8 sm:text-[16px]"
              : "max-w-2xl text-sm leading-7 sm:text-[15px]"
          }`}
        >
          {project.shortDescription}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-white/55 transition duration-300 group-hover:border-blue-400/15 group-hover:text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectPreviewPlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.16),transparent_42%),linear-gradient(145deg,#07101f_0%,#030712_100%)]">
      <div className="text-center">
        <ImageIcon className="mx-auto h-8 w-8 text-blue-300" />
        <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-white/35">
          {label}
        </p>
      </div>
    </div>
  );
}

function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
      <Layers3 className="mx-auto h-9 w-9 text-blue-400" />
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/50">
        {text}
      </p>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:my-24" />
  );
}