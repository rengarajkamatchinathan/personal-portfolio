import { BlogHero } from "@/components/public/blog/blog-hero";
import { BlogExplorer } from "@/components/public/blog/blog-explorer";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rengaraj.vercel.app';

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes, deep-dives, and things I'm figuring out as I build — web development, AI, cloud, and more.",
  openGraph: {
    title: "Blog — Rengaraj K",
    description: "Notes, deep-dives, and things I'm figuring out as I build.",
    url: `${baseUrl}/blog`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-blog.png`,
        width: 1200,
        height: 630,
        alt: "Rengaraj K — Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Rengaraj K",
    description: "Notes, deep-dives, and things I'm figuring out as I build.",
    images: [`${baseUrl}/og-image-blog.png`],
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogExplorer />
    </div>
  );
}
