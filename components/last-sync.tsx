"use client"

import { useEffect, useState } from "react"

// Build timestamp, injected via next.config.mjs (frozen at each deploy/build).
const BUILD_TIME = process.env.NEXT_PUBLIC_BUILD_TIME

function relativeFrom(iso: string): string {
  const diff = Math.max(0, Date.now() - new Date(iso).getTime())
  const min = Math.floor(diff / 60_000)
  if (min < 1) return "just now"
  if (min < 60) return `${min}m ago`
  const hrs = Math.floor(min / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`
  const years = Math.floor(months / 12)
  return `${years} year${years === 1 ? "" : "s"} ago`
}

// Renders: ● last sync 2h ago — the dot + label, to drop inside a pill.
// Computed on the client against the visitor's clock, so it stays accurate
// without a redeploy (a visitor 30 days later sees "30 days ago").
export function LastSync() {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    if (!BUILD_TIME) return
    const tick = () => setLabel(relativeFrom(BUILD_TIME))
    tick()
    const id = setInterval(tick, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      <span>last sync {label ?? "…"}</span>
    </>
  )
}
