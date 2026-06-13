import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/data/projects";
import { ProjectDetail } from "@/components/public/projects/project-detail";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rengaraj.vercel.app";
  const url = `${baseUrl}/projects/${project.id}`;
  const ogImage = project.image ? `${baseUrl}${project.image}` : `${baseUrl}/og-image-projects.png`;

  return {
    title: project.title,
    description: project.description,
    keywords: project.tags,
    openGraph: {
      type: "website",
      url,
      title: `${project.title} — Rengaraj K`,
      description: project.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Rengaraj K`,
      description: project.description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
