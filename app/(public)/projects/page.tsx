import { ProjectsPageContent } from "@/components/public/projects/projects-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rengaraj.vercel.app';

export const metadata: Metadata = {
  title: "Projects",
  description: "Products, clones, and AI experiments I've built — from web apps to agentic tools.",
  keywords: ["projects", "web development", "AI", "full-stack", "Next.js", "Rengaraj K"],
  openGraph: {
    title: "Projects — Rengaraj K",
    description: "Products, clones, and AI experiments I've built.",
    url: `${baseUrl}/projects`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-projects.png`,
        width: 1200,
        height: 630,
        alt: "Rengaraj K — Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Rengaraj K",
    description: "Products, clones, and AI experiments I've built.",
    images: [`${baseUrl}/og-image-projects.png`],
  },
  alternates: {
    canonical: `${baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsPageContent />
    </div>
  );
}
