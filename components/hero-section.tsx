"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { hero } from "@/data/hero"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = hero.roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % hero.roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                <span className="inline-flex size-2 rounded-full bg-primary animate-pulse" />
                <span>{hero.eyebrow}</span>
                <span className="text-muted-foreground/50">// 04.26</span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-7xl text-balance leading-[0.98]">
                {hero.headlineLead}
                <br />
                <span
                  className="inline-block whitespace-nowrap bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              {hero.description.lead}
              <span className="text-foreground font-medium">{hero.description.highlight}</span>
              {hero.description.tail}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <a
                href={hero.ctas.primary.href}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">{hero.ctas.primary.label}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <Link
                href={hero.ctas.secondary.href}
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
              >
                <span>{hero.ctas.secondary.label}</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right column - Photo */}
          <div className="flex justify-center lg:justify-end animate-scale-in stagger-4">
            <div className="relative w-full max-w-72">
              <div className="absolute -inset-8 rounded-full border border-primary/15 rotate-12" />
              <div className="absolute -inset-5 rounded-full border border-accent/20 -rotate-12" />
              <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.3em] text-accent/70 [writing-mode:vertical-rl] sm:block">
                precision / curiosity / craft
              </div>
              <div className="relative overflow-hidden rounded-xl border border-primary/35 bg-card/80 glass p-2 hover-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  className="aspect-4/5 w-full rounded-lg object-cover transition-all duration-500 hover:saturate-150 hover:brightness-110"
                />
              </div>

              <div className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 rounded-lg border border-primary/40 bg-primary/15 glass px-3 py-1.5 font-mono text-[11px] sm:text-xs text-primary animate-float">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  {hero.badges.status}
                </span>
              </div>
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 rounded-lg border border-border bg-card glass px-3 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground animate-float"
                style={{ animationDelay: "1s" }}
              >
                {hero.badges.role}
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-primary/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
        <span className="font-mono text-xs text-muted-foreground">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
