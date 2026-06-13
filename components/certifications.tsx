"use client"

import { useState } from "react"
import { BadgeCheck, ExternalLink } from "lucide-react"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { certifications } from "@/data/certifications"

// Badge precedence: issuer logo → short text code → ✓ badge.
// A missing/broken logo file never shows a broken image (falls back gracefully).
function CertBadge({ logo, short, issuer }: { logo?: string; short?: string; issuer: string }) {
  const [errored, setErrored] = useState(false)

  if (logo && !errored) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-white p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${issuer} logo`}
          className="h-full w-full object-contain"
          onError={() => setErrored(true)}
        />
      </span>
    )
  }

  if (short) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
        {short}
      </span>
    )
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
      <BadgeCheck className="h-5 w-5" />
    </span>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <SectionEyebrow path="certifications" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Certifications</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Credentials I&apos;ve earned along the way.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Top row: badge + date */}
              <div className="mb-5 flex items-start justify-between gap-3">
                <CertBadge logo={cert.logo} short={cert.short} issuer={cert.issuer} />
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{cert.year}</span>
              </div>

              <h3 className="mb-2 text-lg sm:text-xl font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-gradient">
                {cert.name}
              </h3>

              <p className="text-sm text-muted-foreground">{cert.issuer}</p>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground"
                >
                  <span className="underline-animate">verify</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
