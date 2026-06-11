import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { about } from "@/data/about"

export const metadata: Metadata = {
  title: "About",
  description: "The full story — who I am, what I build, and how I work.",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <SectionEyebrow path="about" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                The full{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">story</span>
              </h1>
            </div>

            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">{about.storyLead}</p>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 space-y-3 animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              At a glance
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The short version</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up stagger-3">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="group rounded-xl border border-border/60 bg-card/40 glass p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/60"
              >
                <p className="mb-2 font-mono text-xs text-muted-foreground">{fact.label}</p>
                <p
                  className={cn(
                    "flex items-center gap-2 text-base font-semibold tracking-tight",
                    fact.label === "status" && "text-primary",
                  )}
                >
                  {fact.label === "status" && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />}
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story sub-sections */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
          {about.storySections.map((storySection, index) => (
            <div
              key={storySection.path}
              className={cn(
                "rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-10 space-y-5 animate-fade-in-up",
                index === 0 ? "stagger-3" : "stagger-4",
              )}
            >
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                  {storySection.path}
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{storySection.title}</h2>
              </div>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {storySection.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Influences */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 sm:mb-12 space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              {about.influences.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{about.influences.heading}</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 animate-fade-in-up stagger-2">
            {about.influences.columns.map((column) => (
              <div
                key={column.title}
                className="group rounded-xl border border-border/60 bg-card/40 glass p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/60"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{column.title}</p>
                <ul className="mt-5 space-y-5">
                  {column.items.map((item) => (
                    <li key={item.name} className="space-y-1">
                      <p className="text-base font-semibold tracking-tight">{item.name}</p>
                      {item.sub && <p className="font-mono text-xs text-muted-foreground">{item.sub}</p>}
                      {item.note && <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
