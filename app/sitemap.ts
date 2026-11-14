
import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://apxtechnologies.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap =
    projects.map((project) => ({
      url: `${baseUrl}/projects/${encodeURIComponent(project.slug)}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectPages,
  ];
}
