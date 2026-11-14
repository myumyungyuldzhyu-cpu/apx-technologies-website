
"use client";

import { useState } from "react";
import styles from "./ProjectsGallery.module.css";

type Project = {
  name: string;
  description: string;
  status: string;
  category: string;
  image: string;
  url: string | null;
};

// Снимките трябва да са в public/projects/
const projects: Project[] = [
  {
    name: "APX Shoes",
    description: "Онлайн магазин за обувки",
    status: "В разработка",
    category: "E-COMMERCE",
    image: "/projects/apx-shoes.webp",
    url: null,
  },
  {
    name: "FIN-TEX",
    description: "Корпоративен сайт за иновативни строителни системи",
    status: "Проект",
    category: "WEBSITE",
    image: "/projects/fin-tex.webp",
    url: "https://fin-tex.vercel.app/",
  },
  {
    name: "Перголи",
    description: "Концепция за сайт за перголи",
    status: "Демо",
    category: "WEBSITE",
    image: "/projects/pergoli.webp",
    url: "https://pergola-demo-alpha.vercel.app/",
  },
  {
    name: "APX Clothing",
    description: "Концепция за собствен моден бранд",
    status: "В разработка",
    category: "BRAND",
    image: "/projects/apx-clothing.webp",
    url: null,
  },
  {
    name: "APX Parfume",
    description: "Парфюмерия с продукти под бранда APX",
    status: "В разработка",
    category: "BRAND",
    image: "/projects/apx-parfume.webp",
    url: null,
  },
  {
    name: "Неземен Рай",
    description: "Онлайн магазин за подаръци",
    status: "В разработка",
    category: "E-COMMERCE",
    image: "/projects/nezemen-rai.webp",
    url: null,
  },
  {
    name: "Делчеви – Мебели",
    description: "Концепция за сайт за мебелни решения",
    status: "Проект",
    category: "WEBSITE",
    image: "/projects/delchevi-mebeli.webp",
    url: null,
  },
  {
    name: "Dentalux Premium",
    description: "Премиум демо сайт за дентална клиника",
    status: "Демо",
    category: "WEBSITE",
    image: "/projects/dentalux-premium.webp",
    url: "https://dentalux-premium.vercel.app/",
  },
  {
    name: "APX Care",
    description:
      "Платформа за грижа и сигурност на възрастни хора и връзка с близките",
    status: "Проект",
    category: "PLATFORM",
    image: "/projects/apx-care.webp",
    url: null,
  },
  {
    name: "APX Chat",
    description: "Приложение за комуникация и съобщения",
    status: "В разработка",
    category: "PLATFORM",
    image: "/projects/apx-chat.webp",
    url: null,
  },
  {
    name: "APX Market Analysis",
    description: "Платформа за технически и пазарен анализ",
    status: "В разработка",
    category: "TRADING",
    image: "/projects/apx-market-analysis.webp",
    url: null,
  },
  {
    name: "APX Vision Studio",
    description: "Концепция за AI визуализации на интериори",
    status: "В разработка",
    category: "AI",
    image: "/projects/apx-vision-studio.webp",
    url: null,
  },
  {
    name: "Около Мен",
    description: "Регионален бизнес каталог",
    status: "Проект",
    category: "DIRECTORY",
    image: "/projects/okolo-men.webp",
    url: null,
  },
  {
    name: "APX Mobile",
    description: "Сайт за мобилни телефони и представяне на модели",
    status: "В разработка",
    category: "E-COMMERCE",
    image: "/projects/apx-mobile.webp",
    url: null,
  },
  {
    name: "APX Detailing",
    description: "Сайт за автомобилен детайлинг, услуги и галерия",
    status: "В разработка",
    category: "WEBSITE",
    image: "/projects/apx-detailing.webp",
    url: null,
  },
  {
    name: "APX Start",
    description:
      "Платформа за цели, обучение и практически материали",
    status: "В разработка",
    category: "PLATFORM",
    image: "/projects/apx-start.webp",
    url: null,
  },
  {
    name: "APX Wear",
    description: "Моден онлайн магазин",
    status: "В разработка",
    category: "E-COMMERCE",
    image: "/projects/apx-wear.webp",
    url: null,
  },
];

const filters = [
  "ВСИЧКИ",
  "WEBSITE",
  "E-COMMERCE",
  "PLATFORM",
  "TRADING",
  "BRAND",
  "AI",
  "DIRECTORY",
];

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={styles.placeholder}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          textAlign: "center",
          padding: 20,
        }}
      >
        <span>{project.category}</span>
        <strong>{project.name}</strong>
        <small>Проверете файла: {project.image}</small>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={`Изглед от ${project.name}`}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
        backgroundColor: "#0b1428",
      }}
    />
  );
}

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("ВСИЧКИ");

  const shown =
    filter === "ВСИЧКИ"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>
          APX TECHNOLOGIES / PORTFOLIO
        </p>

        <h2>
          Нашите <span>проекти.</span>
        </h2>

        <p>
          Сайтове, онлайн магазини и собствени дигитални продукти
          — от идея до работеща концепция.
        </p>
      </div>

      <div
        className={styles.filters}
        aria-label="Филтър по категория"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? styles.active : ""}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {shown.map((project, index) => (
          <article
            className={styles.card}
            key={project.name}
          >
            <div className={styles.visual}>
              <ProjectImage project={project} />

              <span className={styles.status}>
                {project.status}
              </span>
            </div>

            <div className={styles.info}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
                {" / "}
                {project.category}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Посети сайта на ${project.name}`}
                >
                  Посети сайта ↗
                </a>
              ) : (
                <span className={styles.noLink}>
                  Представяне на проекта
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>
        © 2026 APX Technologies · От идея към реално решение.
      </footer>
    </section>
  );
}
