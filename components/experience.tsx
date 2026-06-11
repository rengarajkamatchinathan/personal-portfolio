"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { experience } from "@/data/experience"

function parseMonth(iso: string): Date {
  const [year, month] = iso.split("-").map(Number)
  return new Date(year, month - 1, 1)
}

function monthLabel(iso: string): string {
  return parseMonth(iso)
    .toLocaleString("en-US", { month: "short", year: "numeric" })
    .toLowerCase()
}

// Inclusive month count (matches how LinkedIn counts: may 2025 → jun 2026 = 14 mo).
function monthsBetween(start: Date, end: Date): number {
  return Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1)
}

function durationLabel(months: number): string {
  if (months < 12) return `${months} month${months === 1 ? "" : "s"}`
  const years = Math.floor(months / 12)
  const rest = months % 12
  return rest === 0 ? `${years}y` : `${years}y ${rest}mo`
}

// Renders **bold** segments of a description.
function renderDescription(text: string) {
  return text.split("**").map((segment, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-foreground">
        {segment}
      </strong>
    ) : (
      segment
    ),
  )
}

export function Experience() {
  const [inView, setInView] = useState(false)
  // Resolved on the client so the current role's duration keeps counting
  // between deploys without a hydration mismatch.
  const [now, setNow] = useState<Date | null>(null)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    setNow(new Date())
    const el = listRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <SectionEyebrow path="experience" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Where I&apos;ve worked</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            The roles and teams that shaped how I build.
          </p>
        </div>

        <ol ref={listRef} className="relative">
          {/* rail track */}
          <span aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-border/60" />
          {/* rail draws in on scroll */}
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-primary/60 to-primary/10 transition-transform duration-1200 ease-out",
              inView ? "scale-y-100" : "scale-y-0",
            )}
          />

          {experience.map((item, index) => {
            const isCurrent = item.end === null
            const endDate = item.end ? parseMonth(item.end) : now
            const duration = endDate ? durationLabel(monthsBetween(parseMonth(item.start), endDate)) : null
            const visibleTags = item.tags ?? []

            return (
              <li
                key={item.id}
                className={cn("relative pl-8 pb-12 last:pb-0 opacity-0", inView && "animate-fade-in-up")}
                style={{ animationDelay: `${index * 140 + 150}ms` }}
              >
                {/* node dot — aligned to the role line */}
                <span
                  className={cn(
                    "absolute left-[-5.5px] top-2 h-3 w-3 rounded-full ring-4 ring-background",
                    isCurrent
                      ? "bg-primary shadow-[0_0_14px_2px_var(--glow-color-strong)]"
                      : "bg-background border-2 border-border",
                  )}
                />

                {/* Row 1: role + current chip */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{item.role}</h3>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      current
                    </span>
                  )}
                </div>

                {/* Row 2: mono meta line */}
                <p className="mt-1.5 font-mono text-xs leading-relaxed">
                  <span className="text-primary">
                    {item.company.toLowerCase()}
                    {item.location && ` · ${item.location.toLowerCase()}`}
                  </span>
                  <span className="text-muted-foreground">
                    {" · "}
                    {monthLabel(item.start)} — {item.end ? monthLabel(item.end) : "now"}
                    {duration && ` · ${duration}`}
                  </span>
                </p>

                {/* Row 3: description with bold highlights */}
                <p className="mt-3 max-w-5xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {renderDescription(item.description)}
                </p>

                {/* Row 4: tags with overflow */}
                {visibleTags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
