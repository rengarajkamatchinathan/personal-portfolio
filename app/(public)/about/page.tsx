import type { Metadata } from "next"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { about } from "@/data/about"

export const metadata: Metadata = {
  title: "About",
  description: "The full story — who I am, what I build, and how I work.",
}

export default function AboutPage() {
  return (
    <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-3 animate-fade-in-up">
          <SectionEyebrow path="about" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">The full story</h1>
        </div>

        <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
          {about.story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
