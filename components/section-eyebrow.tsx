// Shared section label rendered as a terminal-style path, e.g. ~/experience
export function SectionEyebrow({ path }: { path: string }) {
  return (
    <p className="font-mono text-xs text-primary">
      <span className="text-primary/50">~/</span>
      {path}
    </p>
  )
}
