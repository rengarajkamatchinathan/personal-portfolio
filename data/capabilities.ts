// Capabilities (Skills & Tools) section.
// `iconKey` maps to a lucide icon inside components/capabilities.tsx (keeps this file pure data).
export type CapabilityIconKey = "product" | "apis" | "infra" | "ai" | "tools"

export interface Domain {
  title: string
  tagline: string
  iconKey: CapabilityIconKey
  tools: string[]
  // Proficiency overlay for the dot meter: core = ●●● (daily driver),
  // familiar = ●○○ (used it, not deep). Anything in `tools` not listed in
  // either defaults to "working" = ●●○. Names must match `tools` exactly.
  core?: string[]
  familiar?: string[]
}

export const capabilities = {
  heading: "How I work across the stack",
  intro: "Less a list of logos, more what I can own end to end — from the interface down to what keeps it running.",
  domains: [
    {
      title: "Product",
      tagline: "across web, desktop & mobile",
      iconKey: "product",
      tools: ["Next.js", "React", "Electron", "React Native", "Expo", "TypeScript", "shadcn"],
      core: ["Next.js", "React", "TypeScript"],
      familiar: ["Electron"],
    },
    {
      title: "Backend",
      tagline: "designing systems that last",
      iconKey: "apis",
      tools: ["FastAPI", "Spring Boot", "Django", "Node.js", "Prisma", "Python", "JavaScript", "PostgreSQL", "Redis", "RabbitMQ"],
      core: ["FastAPI", "Django", "Python", "PostgreSQL"],
      familiar: ["RabbitMQ", "Redis"],
    },
    {
      title: "Infrastructure",
      tagline: "shipping it and keeping it healthy",
      iconKey: "infra",
      tools: ["Azure", "AWS", "Terraform", "Docker", "CI/CD"],
      core: ["AWS", "Docker"],
      familiar: ["Terraform"],
    },
    {
      title: "AI",
      tagline: "building agentic LLM apps",
      iconKey: "ai",
      tools: ["AI SDK", "LangChain", "MCP", "RAG", "Prompt caching", "Memory", "Tool calling", "Agents", "Embeddings", "Vector DBs"],
      core: ["RAG", "Agents", "Tool calling"],
      familiar: ["Prompt caching", "Embeddings"],
    },
    {
      title: "Tools",
      tagline: "the day-to-day workbench",
      iconKey: "tools",
      tools: ["VS Code", "Linux"],
      core: ["VS Code"],
    },
  ] satisfies Domain[],
  practices: ["System design", "Testing", "CI/CD", "Observability", "Code review", "Mentoring"],
} as const
