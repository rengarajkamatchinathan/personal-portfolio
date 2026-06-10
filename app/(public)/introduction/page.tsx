import { Code2, Server, Cloud, Bot } from "lucide-react"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { profile } from "@/data/profile"

const focus = [
  {
    icon: Code2,
    title: "Product",
    description: "User-facing apps across web, desktop, and mobile — Next.js, React, Electron, and React Native.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Services built to last — FastAPI, Spring Boot, Django, and Node, backed by PostgreSQL and Redis.",
  },
  {
    icon: Cloud,
    title: "Cloud & infrastructure",
    description: "Provisioning and shipping on AWS and Azure with Terraform, Docker, and CI/CD.",
  },
  {
    icon: Bot,
    title: "AI & agents",
    description: "Agentic LLM apps — RAG, long-term memory, tool-calling, and MCP.",
  },
]

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <SectionEyebrow path="intro" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  {profile.name}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              A full-stack software engineer from {profile.location}. I build production web apps and agentic AI — end
              to end, from the interface a user clicks down to the infrastructure it runs on.
            </p>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How I work</h2>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I like the whole pipeline. Frontend, backend, cloud, AI — I&apos;m happiest when I can own a problem from
                idea to production and back again.
              </p>
              <p>
                Most of my time goes into building with TypeScript and Next.js, designing the services behind them, and
                shipping on AWS and Azure. Lately a lot of that is agentic AI — RAG, memory, tool-calling, and MCP.
              </p>
              <p>
                I care more about reliable, boring systems than clever ones: small iterations, good observability, and
                automating the dull parts. When something&apos;s interesting, I reverse-engineer it to learn how it
                works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              What I build
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Across the stack</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {focus.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/60 bg-card/40 glass p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/60"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/15">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
