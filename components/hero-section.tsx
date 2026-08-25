"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowDownRight, Cpu, Orbit, Radio, Shield } from "lucide-react"
import { hero } from "@/data/hero"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const target = hero.roles[currentRole]
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < target.length) setDisplayText(target.slice(0, displayText.length + 1))
      else if (!isDeleting) setIsDeleting(true)
      else if (displayText.length > 0) setDisplayText(displayText.slice(0, -1))
      else { setIsDeleting(false); setCurrentRole((role) => (role + 1) % hero.roles.length) }
    }, !isDeleting && displayText === target ? 1800 : isDeleting ? 42 : 82)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative flex min-h-[min(920px,100svh)] overflow-hidden px-4 pb-20 pt-32 sm:px-8 lg:px-14"><div className="mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-[1440px] items-center">
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-14 lg:grid-cols-[1fr_0.92fr] lg:gap-8">
        <div className="max-w-3xl">
          <div className="mb-7 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            <span className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-2"><Radio className="size-3" data-icon="inline-start" /> {hero.eyebrow}</span>
            <span className="text-muted-foreground">SECTOR // 04.26</span>
          </div>
          <h1 className="text-balance font-sans text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-foreground sm:text-7xl lg:text-[7.6rem]">
            {hero.headlineLead}<br /><span className="inline-block min-w-[12ch] text-primary drop-shadow-[0_0_28px_color-mix(in_oklch,var(--primary)_55%,transparent)]">{displayText}<span className="text-accent">▋</span></span>
          </h1>
          <p className="mt-9 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{hero.description.lead}<strong className="font-medium text-foreground">{hero.description.highlight}</strong>{hero.description.tail}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={hero.ctas.primary.href} className="group inline-flex items-center justify-between gap-8 border border-primary bg-primary px-5 py-4 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-1"><span>{hero.ctas.primary.label}</span><ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" data-icon="inline-end" /></a>
            <Link href={hero.ctas.secondary.href} className="inline-flex items-center justify-center gap-3 border border-border bg-card/60 px-5 py-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-accent hover:text-accent">{hero.ctas.secondary.label}<Orbit className="size-4" /></Link>
          </div>
          <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-border/70 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="flex items-center gap-2"><Cpu className="size-3 text-primary" /> systems online</span><span className="flex items-center gap-2"><Shield className="size-3 text-accent" /> secure build</span><span>01 // engineer</span>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[570px] lg:mx-0 lg:ml-auto">
          <div className="absolute inset-[8%] rounded-full border border-primary/35 shadow-[0_0_100px_color-mix(in_oklch,var(--primary)_25%,transparent),inset_0_0_70px_color-mix(in_oklch,var(--primary)_12%,transparent)]" />
          <div className="absolute inset-[17%] rounded-full border border-dashed border-accent/45 animate-[spin_36s_linear_infinite]" />
          <div className="absolute inset-[28%] rounded-full border border-primary/30 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="absolute inset-[34%] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 grid size-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/70 bg-card/40 shadow-[0_0_60px_color-mix(in_oklch,var(--primary)_45%,transparent)] backdrop-blur-md sm:size-56"><div className="grid size-28 place-items-center rounded-full border border-primary/50 bg-primary/15 sm:size-36"><span className="font-serif text-6xl text-accent drop-shadow-[0_0_18px_var(--accent)]">R</span></div></div>
          <span className="absolute left-[4%] top-[22%] font-mono text-[9px] uppercase tracking-[0.25em] text-accent">identity core / 001</span><span className="absolute bottom-[21%] right-[1%] font-mono text-[9px] uppercase tracking-[0.25em] text-primary">power routing / stable</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground lg:flex"><span>descend into the archive</span><ArrowDownRight className="size-3 text-primary" /></div>
      </div>
    </section>
  )
}
