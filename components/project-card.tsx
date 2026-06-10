import { cn } from "@/lib/utils"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"

// Shared project card — used by the homepage Projects section and the /projects page.
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card/40 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
        project.highlight ? "sm:col-span-2 lg:col-span-2 border-primary/30" : "border-border/60",
        project.featured && !project.highlight && "sm:col-span-2 lg:col-span-1",
      )}
      style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
    >
      {project.image && (
        <div className="overflow-hidden border-b border-border/60 bg-secondary/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Meta row: year (left) + status (right) */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground">{project.year ?? " "}</span>
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

        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight transition-all duration-300 group-hover:text-gradient">
            {project.title}
          </h3>
          {project.category === "work" && (
            <span className="rounded border border-border/80 bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              work
            </span>
          )}
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-3">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div className="mt-auto flex items-center gap-4 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
              >
                <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                <span className="underline-animate">source</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
              >
                <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                <span className="underline-animate">live</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  )
}
