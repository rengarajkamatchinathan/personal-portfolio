import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { about } from "@/data/about"

// Small dim terminal prompt, e.g.  ❯ cat about.md
function Prompt({ command }: { command: string }) {
  return (
    <p className="font-mono text-xs text-primary">
      <span className="text-primary/50">❯</span> {command}
    </p>
  )
}

export function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-3 animate-fade-in-up">
          <SectionEyebrow path="about" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{about.heading}</h2>
        </div>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-3 lg:gap-12">
          {/* Bio — framed as `cat about.md` output */}
          <div className="space-y-4 lg:col-span-2 animate-fade-in-up stagger-2">
            <Prompt command="cat about.md" />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Facts — as a .profile config block */}
          <div className="space-y-4 lg:col-span-1 animate-fade-in-up stagger-3">
            <Prompt command="cat ~/.profile" />
            <dl className="space-y-2.5">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-3 font-mono text-xs sm:text-sm">
                  <dt className="w-24 shrink-0 text-muted-foreground">{fact.label}</dt>
                  <dd className={cn("flex items-center gap-2 text-foreground", fact.label === "status" && "text-primary")}>
                    {fact.label === "status" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-10 lg:mt-12 animate-fade-in-up stagger-4">
          <Link
            href={about.cta.href}
            className="group inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            <span className="underline-animate">{about.cta.label}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
