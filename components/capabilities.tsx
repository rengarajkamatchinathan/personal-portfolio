import { LayoutTemplate, Server, Cloud, Brain, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { capabilities, type CapabilityIconKey } from "@/data/capabilities"

// Maps the data's iconKey → a lucide icon, so the data file stays pure values.
const iconMap: Record<CapabilityIconKey, LucideIcon> = {
  product: LayoutTemplate,
  apis: Server,
  infra: Cloud,
  ai: Brain,
  tools: Wrench,
}

// Bento layout: the two deepest stacks get a double-height tile, Tools runs full
// width. Spans only kick in at sm/lg — on phones every tile is a plain stacked card.
const spanClass: Partial<Record<CapabilityIconKey, string>> = {
  ai: "lg:row-span-2",
  apis: "lg:row-span-2",
  tools: "sm:col-span-2 lg:col-span-3",
}

// Render order so the bento tiles pack with no gaps (tall tiles first, wide last).
// Sort, don't hardcode the list — unknown/new domains just fall to the end.
const bentoOrder: CapabilityIconKey[] = ["ai", "apis", "product", "infra", "tools"]
const orderedDomains = [...capabilities.domains].sort(
  (a, b) =>
    (bentoOrder.indexOf(a.iconKey) + 1 || Infinity) - (bentoOrder.indexOf(b.iconKey) + 1 || Infinity),
)

export function Capabilities() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <SectionEyebrow path="skills" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{capabilities.heading}</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">{capabilities.intro}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:auto-rows-auto lg:grid-cols-3">
          {orderedDomains.map((domain, index) => {
            const Icon = iconMap[domain.iconKey]
            return (
              <article
                key={domain.title}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up ${spanClass[domain.iconKey] ?? ""}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/15">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                    {domain.title}
                  </h3>
                </div>

                <p className="mb-5 pl-12 text-sm leading-relaxed text-muted-foreground">{domain.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {domain.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up stagger-4">
          <span className="font-mono text-xs uppercase tracking-wider text-primary shrink-0">Practices</span>
          <div className="hidden h-px flex-1 bg-border/50 sm:block" />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted-foreground">
            {capabilities.practices.map((practice, index) => (
              <span key={practice} className="flex items-center gap-3">
                {index > 0 && <span className="text-primary/40">·</span>}
                <span className="transition-colors hover:text-foreground">{practice}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
