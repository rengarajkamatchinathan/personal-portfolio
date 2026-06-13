"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/data/projects"

export function ProjectDetail({ project }: { project: Project }) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // The cover may also live in screenshots[0]; fall back to the cover alone if needed.
  const shots = project.screenshots?.length ? project.screenshots : project.image ? [project.image] : []
  const meta = [project.year, project.repoType, project.category].filter(Boolean).join(" · ")
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const step = useCallback(
    (dir: number) => setActiveIndex((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length],
  )

  useEffect(() => setIsVisible(true), [])

  // Lightbox: lock body scroll + wire up keyboard nav only while open.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") step(1)
      else if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, step])

  return (
    <>
      {/* Header */}
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-12 border-b border-border/30">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className={cn(
              "group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0",
              isVisible && "animate-fade-in-up",
            )}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-mono">back to projects</span>
          </Link>

          {/* Meta row */}
          <div
            className={cn("mb-4 flex flex-wrap items-center gap-3 opacity-0", isVisible && "animate-fade-in-up")}
            style={{ animationDelay: "100ms" }}
          >
            {meta && <span className="font-mono text-xs text-muted-foreground">{meta}</span>}
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  project.status === "completed" && "bg-primary shadow-sm shadow-primary/50",
                  project.status === "in-progress" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                  project.status === "archived" && "bg-muted-foreground",
                )}
              />
              <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
            </span>
          </div>

          <h1
            className={cn(
              "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5 opacity-0",
              isVisible && "animate-fade-in-up",
            )}
            style={{ animationDelay: "150ms" }}
          >
            <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
              {project.title}
            </span>
          </h1>

          <p
            className={cn(
              "max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 opacity-0",
              isVisible && "animate-fade-in-up",
            )}
            style={{ animationDelay: "200ms" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            className={cn("flex flex-wrap gap-2 mb-7 opacity-0", isVisible && "animate-fade-in-up")}
            style={{ animationDelay: "250ms" }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          {(project.live || project.github) && (
            <div
              className={cn("flex flex-wrap items-center gap-3 opacity-0", isVisible && "animate-fade-in-up")}
              style={{ animationDelay: "300ms" }}
            >
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-sm text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20"
                >
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                  <span>Live demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:text-foreground"
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span>Source</span>
                </a>
              )}
              {project.repoType === "private" && !project.github && (
                <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border/70 px-4 py-2 font-mono text-sm text-muted-foreground">
                  <Github className="h-4 w-4" />
                  Private repo
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          {shots.length > 0 ? (
            <>
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">Screenshots</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {shots.length} {shots.length === 1 ? "image" : "images"}
                </span>
              </div>

              <div className={cn(shots.length === 1 ? "max-w-3xl" : "columns-1 sm:columns-2 gap-4 [&>*]:mb-4")}>
                {shots.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="group block w-full overflow-hidden rounded-xl border border-border/60 bg-secondary/30 transition-all duration-300 hover:border-primary/40 break-inside-avoid"
                    aria-label={`Open screenshot ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="font-mono text-sm text-muted-foreground">Screenshots coming soon.</p>
          )}

          <div className="mt-12 border-t border-border/30 pt-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="underline-animate">all projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 sm:p-8 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot viewer`}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shots[activeIndex]}
            alt={`${project.title} screenshot ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-lg border border-border/60 object-contain shadow-2xl"
          />

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-xs text-muted-foreground">
            {activeIndex + 1} / {shots.length}
          </span>
        </div>
      )}
    </>
  )
}
