import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import type { Project } from "@/data/projects"

const MAX_TAGS = 5

// Shared project card — used by the homepage Projects section and the /projects page.
// The whole card links to the project's detail page (/projects/<id>); screenshots and
// the live/source buttons live there, so the overview stays clean and text-focused.
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const visibleTags = project.tags.slice(0, MAX_TAGS)
  const hiddenTagCount = project.tags.length - visibleTags.length
  // year · visibility · category — built from whatever fields are present.
  const meta = [project.year, project.repoType, project.category].filter(Boolean).join(" · ")

  return (
    <Link
      href={`/projects/${project.id}`}
      aria-label={`View ${project.title}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card/40 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
        project.highlight ? "sm:col-span-2 lg:col-span-2 border-primary/30" : "border-border/60",
        project.featured && !project.highlight && "sm:col-span-2 lg:col-span-1",
      )}
      style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Meta row: year · visibility · category (left) + status (right) */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground">{meta || " "}</span>
          <span className="flex items-center gap-2.5">
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                project.status === "completed" && "bg-primary shadow-sm shadow-primary/50",
                project.status === "in-progress" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                project.status === "archived" && "bg-muted-foreground",
              )}
            />
            <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
          </span>
        </div>

        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight transition-all duration-300 group-hover:text-gradient">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-3">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors group-hover:border-primary/30"
            >
              {tag}
            </span>
          ))}
          {hiddenTagCount > 0 && (
            <span className="rounded-md border border-dashed border-border/70 bg-secondary/30 px-2.5 py-1 font-mono text-xs text-muted-foreground">
              +{hiddenTagCount}
            </span>
          )}
        </div>

        {/* Availability hints — what's waiting on the detail page (not links themselves). */}
        {(project.live || project.github) && (
          <div className="mt-auto flex items-center gap-4 pt-1 font-mono text-[11px] text-muted-foreground">
            {project.live && (
              <span className="inline-flex items-center gap-1.5 text-primary/80">
                <Globe className="h-3.5 w-3.5" />
                live
              </span>
            )}
            {project.github && (
              <span className="inline-flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" />
                source
              </span>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
    </Link>
  )
}
