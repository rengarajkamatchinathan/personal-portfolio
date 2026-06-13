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
  if (months < 12) return `${months} mo`
  const years = Math.floor(months / 12)
  const rest = months % 12
  return rest === 0 ? `${years}y` : `${years}y ${rest}mo`
}

export function Experience() {
  const [inView, setInView] = useState(false)
  // Resolved on the client so the current role's duration keeps counting
  // between deploys without a hydration mismatch.
  const [now, setNow] = useState<Date | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

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
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Where I&apos;ve worked</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            The roles and teams that shaped how I build.
          </p>
        </div>

        <div ref={listRef} className="max-w-4xl divide-y divide-border/40">
          {experience.map((item, index) => {
            const isCurrent = item.end === null
            const endDate = item.end ? parseMonth(item.end) : now
            const duration = endDate ? durationLabel(monthsBetween(parseMonth(item.start), endDate)) : null
            const period = `${monthLabel(item.start)} — ${item.end ? monthLabel(item.end) : "now"}`

            return (
              <div
                key={item.id}
                className={cn(
                  "grid gap-y-3 py-9 first:pt-0 last:pb-0 sm:grid-cols-[160px_1fr] sm:gap-x-10 opacity-0",
                  inView && "animate-fade-in-up",
                )}
                style={{ animationDelay: `${index * 140 + 150}ms` }}
              >
                {/* Left: period · duration · location */}
                <div className="flex flex-col gap-1 pt-0.5">
                  <span className="font-mono text-sm text-foreground">{period}</span>
                  {duration && <span className="font-mono text-xs text-muted-foreground">{duration}</span>}
                  {item.location && (
                    <span className="font-mono text-xs text-muted-foreground">{item.location.toLowerCase()}</span>
                  )}
                </div>

                {/* Right: role + company + bullets + tech */}
                <div className="sm:border-l sm:border-border/40 sm:pl-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{item.role}</h3>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-sm text-primary">{item.company}</p>

                  <p className="mt-4 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                    {item.description.replace(/\*\*/g, "")}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <p className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground/80">
                      {item.tags.join("  ·  ")}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
