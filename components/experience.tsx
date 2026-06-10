"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { experience } from "@/data/experience"

export function Experience() {
  const [inView, setInView] = useState(false)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
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

        <ol ref={listRef} className="relative max-w-3xl">
          {/* rail track */}
          <span aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-border/60" />
          {/* ⑤ rail draws in on scroll */}
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-primary/60 to-primary/10 transition-transform duration-1200 ease-out",
              inView ? "scale-y-100" : "scale-y-0",
            )}
          />

          {experience.map((item, index) => (
            <li
              key={item.id}
              className={cn("relative pl-8 pb-10 last:pb-0 opacity-0", inView && "animate-fade-in-up")}
              style={{ animationDelay: `${index * 140 + 150}ms` }}
            >
              {/* node dot — ⑤ current gets a soft glow */}
              <span
                className={cn(
                  "absolute left-[-6.5px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background",
                  item.current
                    ? "bg-primary shadow-[0_0_14px_2px_var(--glow-color-strong)]"
                    : "bg-background border-2 border-border",
                )}
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {item.role} <span className="font-normal text-muted-foreground">· {item.company}</span>
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{item.period}</span>
              </div>

              <p className="mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
