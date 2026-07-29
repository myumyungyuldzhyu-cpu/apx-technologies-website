import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "okolo-men",
    title: "ОКОЛО МЕН",
    shortTitle: "ОКОЛО МЕН",
    category: "Локална бизнес платформа",
    projectType: "real",
    year: "2026",
    status: "Активен проект",
    featured: true,

    shortDescription:
      "Модерна локална платформа, която помага на хората да откриват бизнеси, услуги и полезни места около себе си.",

    description:
      "ОКОЛО МЕН е цялостна дигитална платформа за представяне и откриване на местни бизнеси. Проектът включва публични бизнес страници, търсене по категории и градове, потребителски профили, фирмени профили, VIP позиции, потвърдени бизнеси, галерии, контакти, карта, отзиви и административен панел.",

    coverImage: "/projects/okolo-men.webp",
    gallery: ["/projects/okolo-men.webp"],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "NextAuth",
      "Vercel",
    ],

    features: [
      "Регистрация за физически лица и фирми",
      "Потребителски и фирмени профили",
      "Създаване и редактиране на бизнес",
      "Търсене по ключова дума, категория и град",
      "VIP и потвърдени бизнеси",
      "Галерия, контакти, карта и навигация",
      "Рейтинг и отзиви",
      "Административен панел",
      "Responsive дизайн",
    ],

    stats: [
      { label: "Тип проект", value: "Web Platform" },
      { label: "Статус", value: "В разработка" },
      { label: "Дизайн", value: "Responsive" },
      { label: "Година", value: "2026" },
    ],

    liveUrl: "https://okolomen-production.vercel.app",
    githubUrl: "",
  },

  {
    slug: "apx-market-analysis",
    title: "APX Market Analysis Platform",
    shortTitle: "APX Platform",
    category: "FinTech платформа",
    projectType: "real",
    year: "2026",
    status: "В разработка",
    featured: true,

    shortDescription:
      "Професионална платформа за технически анализ, пазарни графики, индикатори и трейдинг инструменти.",

    description:
      "APX Market Analysis Platform е модерна уеб платформа за анализ на финансовите пазари. Тя предоставя реални OHLC графики, различни времеви рамки, наблюдение на символи, персонализирани индикатори, пазарни новини, потребителски профили и премиум интерфейс за трейдъри.",

    coverImage: "/projects/apx.webp",
    gallery: ["/projects/apx.webp"],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lightweight Charts",
      "Twelve Data API",
      "NextAuth",
      "Vercel",
    ],

    features: [
      "Реални OHLC свещи",
      "Интерактивна графика",
      "Множество времеви рамки",
      "APX Channel индикатор",
      "Market Watch панел",
      "Пазарни новини",
      "Икономически календар",
      "Потребителски профили",
      "Тъмен премиум интерфейс",
      "Мобилна версия",
    ],

    stats: [
      { label: "Тип проект", value: "FinTech Platform" },
      { label: "Графики", value: "Real-time OHLC" },
      { label: "Статус", value: "В разработка" },
      { label: "Година", value: "2026" },
    ],

    liveUrl: "",
    githubUrl: "",
  },

  {
    slug: "delchevi-mebeli",
    title: "Делчеви Мебели",
    shortTitle: "Делчеви Мебели",
    category: "Фирмен уебсайт",
    projectType: "real",
    year: "2026",
    status: "В разработка",
    featured: true,

    shortDescription:
      "Професионален фирмен сайт за производство и представяне на мебели по поръчка.",

    description:
      "Делчеви Мебели е премиум уебсайт за мебелен бизнес, създаден с фокус върху силното визуално представяне на продуктите. Структурата включва основни категории, подкатегории, отделни продуктови страници, галерия, контакти и възможност за административно управление на съдържанието.",

    coverImage: "/projects/delchevi.webp",
    gallery: ["/projects/delchevi.webp"],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Vercel",
    ],

    features: [
      "Премиум начална страница",
      "Категории и подкатегории",
      "Продуктови страници",
      "Галерия с реализирани проекти",
      "Контактна форма",
      "Мобилна версия",
      "Подготовка за административен панел",
    ],

    stats: [
      { label: "Тип проект", value: "Business Website" },
      { label: "Индустрия", value: "Мебели" },
      { label: "Статус", value: "В разработка" },
      { label: "Година", value: "2026" },
    ],

    liveUrl: "",
    githubUrl: "",
  },

 {
  slug: "dentalux-premium",
  title: "Dentalux Premium",
  shortTitle: "Dentalux",
  category: "Дентален уебсайт",

  projectType: "demo",
  featured: true,

  year: "2026",
  status: "Demo Project",

  shortDescription:
    "Премиум демо уебсайт за модерна дентална клиника с онлайн записване и представяне на услугите.",

  description:
    "Dentalux Premium е демонстрационен проект, създаден да покаже как би изглеждал модерен уебсайт за дентална клиника. Включва премиум дизайн, представяне на лекари, услуги, онлайн записване и мобилна оптимизация.",

  coverImage: "/projects/dentalux.webp",
  gallery: ["/projects/dentalux.webp"],

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Design",
  ],

  features: [
    "Premium Hero",
    "Представяне на услуги",
    "Екип от лекари",
    "Онлайн записване",
    "Често задавани въпроси",
    "Контакти",
    "Responsive дизайн",
  ],

  stats: [
    { label: "Тип проект", value: "Demo Website" },
    { label: "Индустрия", value: "Dental Clinic" },
    { label: "Статус", value: "Demo Project" },
    { label: "Година", value: "2026" },
  ],

  liveUrl: "https://dentalux-premium.vercel.app",
  githubUrl: "",
},
  {
    slug: "aura-restaurant",
    title: "Aura Restaurant",
    shortTitle: "Aura Restaurant",
    category: "Ресторантски уебсайт",
    projectType: "coming-soon",
    year: "2026",
    status: "coming-soon",
    featured: false,

    shortDescription:
      "Концепция за елегантен ресторантски сайт с меню, галерия и онлайн резервации.",

    description:
      "Aura Restaurant е концептуален проект за модерен ресторант с акцент върху атмосферата, визуалното изживяване и лесния достъп до меню, резервации и контакти.",

    coverImage: "",
    gallery: [],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],

    features: [
      "Hero секция с голямо изображение",
      "Дигитално меню",
      "Галерия",
      "Онлайн резервации",
      "Работно време",
      "Карта и контакти",
      "Мобилна версия",
    ],

    stats: [
      { label: "Тип проект", value: "Restaurant Website" },
      { label: "Индустрия", value: "Ресторантьорство" },
      { label: "Статус", value: "Coming Soon" },
      { label: "Година", value: "2026" },
    ],

    liveUrl: "",
    githubUrl: "",
  },

  {
    slug: "aurora-hotel",
    title: "Aurora Hotel & Spa",
    shortTitle: "Aurora Hotel",
    category: "Хотелски уебсайт",
    projectType: "coming-soon",
    year: "2026",
    status: "coming-soon",
    featured: false,

    shortDescription:
      "Концепция за луксозен хотелски сайт със стаи, удобства, галерия и резервации.",

    description:
      "Aurora Hotel & Spa е концептуален проект за хотел или ваканционен комплекс. Структурата ще представя стаите, удобствата, локацията и възможностите за резервация в премиум интерфейс.",

    coverImage: "",
    gallery: [],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],

    features: [
      "Луксозна начална страница",
      "Списък със стаи",
      "Детайлни страници",
      "Удобства и услуги",
      "Галерия",
      "Форма за резервация",
      "Карта и локация",
      "Мобилна версия",
    ],

    stats: [
      { label: "Тип проект", value: "Hotel Website" },
      { label: "Индустрия", value: "Хотелиерство" },
      { label: "Статус", value: "Coming Soon" },
      { label: "Година", value: "2026" },
    ],

    liveUrl: "",
    githubUrl: "",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getRealProjects() {
  return projects.filter((p) => p.projectType === "real");
}

export function getDemoProjects() {
  return projects.filter((p) => p.projectType === "demo");
}

export function getComingSoonProjects() {
  return projects.filter((p) => p.projectType === "coming-soon");
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}