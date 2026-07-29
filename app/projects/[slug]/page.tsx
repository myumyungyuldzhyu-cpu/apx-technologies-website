import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Проектът не е намерен | APX Technologies",
    };
  }

  return {
    title: `${project.title} | APX Technologies`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  return (
    <ProjectDetails
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
