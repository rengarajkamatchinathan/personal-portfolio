import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { projects } from "@/data/projects"

// Homepage shows one row; the full filterable list lives on /projects.
const FEATURED_COUNT = 3

export function ProjectsGrid() {
  const featured = projects.slice(0, FEATURED_COUNT)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <SectionEyebrow path="projects" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Projects</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A selection of what I&apos;ve built — products, clones, and AI experiments.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 lg:mt-12 animate-fade-in-up stagger-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            <span className="underline-animate">view all projects</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
