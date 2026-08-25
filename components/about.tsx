import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { about } from "@/data/about"

function Prompt({ command }: { command: string }) {
  return <p className="font-mono text-xs text-primary"><span className="text-primary/50">❯</span> {command}</p>
}

export function About() {
  return (
    <section id="about" className="border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 animate-fade-in-up"><SectionEyebrow path="about" /><h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{about.heading}</h2></div>
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-12">
          <div className="space-y-6 animate-fade-in-up stagger-2">
            <div className="relative aspect-[16/9] overflow-hidden border border-primary/25 bg-card shadow-[0_0_50px_var(--glow-color)]">
              <Image src="/profile.jpg" alt="Rengaraj, software developer" fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover object-center grayscale-[20%] transition duration-700 hover:scale-105 hover:grayscale-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/55 via-transparent to-primary/15" />
              <span className="absolute bottom-3 left-3 border border-primary/30 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">identity // verified</span>
            </div>
            <Prompt command="cat about.md" />
            <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{about.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          </div>
          <div className="flex flex-col gap-4 animate-fade-in-up stagger-3"><Prompt command="cat ~/.profile" /><dl className="flex flex-col gap-2.5">{about.facts.map((fact) => <div key={fact.label} className="flex items-baseline gap-3 font-mono text-xs sm:text-sm"><dt className="w-24 shrink-0 text-muted-foreground">{fact.label}</dt><dd className={cn("flex items-center gap-2 text-foreground", fact.label === "status" && "text-primary")}>{fact.label === "status" && <span className="size-1.5 animate-pulse rounded-full bg-primary" />}{fact.value}</dd></div>)}</dl><Link href={about.cta.href} className="group mt-4 inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"><span className="underline-animate">{about.cta.label}</span><ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></Link></div>
        </div>
      </div>
    </section>
  )
}
