import { GraduationCap } from "lucide-react"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { education } from "@/data/education"

export function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <SectionEyebrow path="education" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Education</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Where I studied before the rest of it was self-taught.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, index) => (
            <article
              key={edu.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{edu.period}</span>
              </div>

              <h3 className="mb-2 text-lg sm:text-xl font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-gradient">
                {edu.degree}
              </h3>

              <p className="text-sm text-muted-foreground">{edu.institution}</p>

              {edu.detail && <p className="mt-2 font-mono text-xs text-muted-foreground">{edu.detail}</p>}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
