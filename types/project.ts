export type ProjectStat = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  projectType: "real" | "demo" | "coming-soon";
  year: string;
  status: string;
  featured: boolean;

  shortDescription: string;
  description: string;

  coverImage: string;
  gallery: string[];

  technologies: string[];
  features: string[];
  stats: ProjectStat[];

  liveUrl: string;
  githubUrl: string;
};