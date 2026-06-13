import {
  siNextdotjs, siReact, siElectron, siExpo, siTypescript, siShadcnui,
  siFastapi, siSpringboot, siSpring, siDjango, siNodedotjs, siPrisma, siPython,
  siJavascript, siPostgresql, siRedis, siRabbitmq, siTerraform, siDocker,
  siLangchain, siLinux, siTailwindcss, siRedux, siMui, siFormik, siMysql,
  siFirebase, siFlutter, siDart, siTensorflow, siOpencv, siScikitlearn,
} from "simple-icons"

type SimpleIcon = { path: string; title: string; hex: string }

// Tool/tag display name → simple-icons brand mark. Anything not listed here
// (AWS, Azure, VS Code — removed from simple-icons upstream — plus conceptual
// items like RAG, Agents, CI/CD) renders a 2-letter monogram instead.
const ICONS: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs, React: siReact, Electron: siElectron,
  "React Native": siReact, Expo: siExpo, TypeScript: siTypescript,
  shadcn: siShadcnui, FastAPI: siFastapi, "Spring Boot": siSpringboot,
  Spring: siSpring, Django: siDjango, "Node.js": siNodedotjs, Prisma: siPrisma,
  Python: siPython, JavaScript: siJavascript, PostgreSQL: siPostgresql,
  Redis: siRedis, RabbitMQ: siRabbitmq, Terraform: siTerraform, Docker: siDocker,
  LangChain: siLangchain, Linux: siLinux, Tailwind: siTailwindcss, Redux: siRedux,
  MUI: siMui, Formik: siFormik, MySQL: siMysql, Firebase: siFirebase,
  Flutter: siFlutter, Dart: siDart, TensorFlow: siTensorflow, OpenCV: siOpencv,
  "scikit-learn": siScikitlearn,
}

function monogram(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()
}

// Monochrome brand mark (inherits currentColor) with a graceful monogram
// fallback. Presentational + hookless, so it works in server and client trees.
export function BrandGlyph({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  const icon = ICONS[name]
  if (icon) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d={icon.path} />
      </svg>
    )
  }
  return (
    <span className="grid h-3.5 w-3.5 place-items-center rounded-[3px] bg-foreground/10 text-[7px] font-bold leading-none text-foreground/70">
      {monogram(name)}
    </span>
  )
}
