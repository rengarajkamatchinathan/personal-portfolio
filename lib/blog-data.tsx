import { profile } from "@/data/profile"

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
  }
  featured: boolean
  color: string
}

const author = {
  name: profile.fullName,
  avatar: "/profile.jpg",
  role: profile.role,
}

export const blogPosts: BlogPost[] = [
  {
    id: 3,
    slug: "mcp-ai-takes-action",
    title: "MCP: how AI finally takes action",
    excerpt:
      "Most AI can talk. With the Model Context Protocol, it can safely connect to your real tools — databases, browsers, APIs — and actually do the work.",
    content: `
## Most AI can talk — MCP lets it act

Most AI can talk. But with **MCP (Model Context Protocol)**, AI can finally take action.

MCP lets a model safely connect to your real tools — Playwright, databases, APIs, files, browsers, anything — and perform actual tasks instead of just giving suggestions.

## Why it matters

- Run tests automatically
- Debug with real system context
- Automate workflows on your machine
- Connect AI to any internal tool
- Build powerful copilots for your team

## A real example

You ask your AI:

> "Check my database and tell me how many users signed up today."

With MCP:

1. The model connects to your database through an MCP data tool
2. Safely runs a pre-approved SQL query
3. Retrieves the exact count from your live DB
4. Analyzes the trend — up or down vs yesterday
5. Sends you a clear summary with insights

No dashboards. No manual queries. Your AI becomes a real analyst — connected directly to your systems, with guardrails.
`,
    date: "Jun 2026",
    readTime: "3 min",
    category: "ai",
    tags: ["MCP", "Agents", "LLM", "Automation"],
    author,
    featured: true,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 1,
    slug: "json-vs-toon",
    title: "JSON vs TOON — same data, less noise",
    excerpt:
      "Most people send JSON to LLMs without thinking — but models read every character, so more text means more tokens. TOON keeps the same data ~57% smaller.",
    content: `
## Same data, less noise

Most people send JSON to LLMs without thinking. But LLMs don't "execute" JSON — they read every character. More text means more tokens.

TOON fixes that.

## What's happening

- **JSON** repeats keys and symbols on every record.
- **TOON** defines the structure once, then sends clean rows.

On the same payload:

- JSON → **404 bytes**
- TOON → **171 bytes**
- Same data, **~57% smaller**

## Example

JSON:

\`\`\`json
{
  "users": [
    { "id": 1, "name": "Ada", "role": "admin" },
    { "id": 2, "name": "Lin", "role": "editor" }
  ]
}
\`\`\`

TOON:

\`\`\`
users{id,name,role}:
1,Ada,admin
2,Lin,editor
\`\`\`

Same data — the keys are declared once, then every row is just values.

## Why it matters

- Better speed
- Lower cost at scale
- Cleaner inputs for structured data
- Works well for logs, events, memory, and agent workflows

## The catch

TOON doesn't make models smarter — it just removes unnecessary text. The model still has to reason; you're only cutting the noise that eats tokens.
`,
    date: "Jun 2026",
    readTime: "3 min",
    category: "ai",
    tags: ["LLM", "Tokens", "AI Optimization", "Data Engineering"],
    author,
    featured: true,
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 2,
    slug: "cloud-outages-resilience-engineering",
    title: "Cloud outages don't ask for permission — they just happen",
    excerpt:
      "A Cloudflare disruption was a reminder that even the most battle-tested networks fail. For DevOps and SRE teams, outages are masterclasses in resilience engineering.",
    content: `
## When the internet blinks

A Cloudflare disruption reminded us once again how even the most powerful global networks can bring the internet to its knees. From content platforms to SaaS tools, services flashed **500 Internal Server Errors** — and for many teams, it was a sudden wake-up call.

For DevOps, SRE, and Cloud Engineers, incidents like this are more than downtime. They're real-world masterclasses in **resilience engineering**.

## What this outage reinforces

### Failure is not an exception — it's the rule
No matter how distributed or battle-tested your architecture is, the possibility of failure is always alive.

### Design for failure, not for perfection
Multi-CDN, cross-region deployments, automated failovers, active/active setups, and robust health checks aren't "advanced techniques" anymore — they're survival essentials.

### Observability is your early warning system
Metrics, logs, traces, and alerting pipelines aren't buzzwords — they decide how fast you can detect, isolate, and recover from an incident.

### Disaster recovery must work, not just exist
A crisis is the worst time to discover your DR strategy is outdated or untested.

## Why it matters

Outages frustrate users, but they also highlight the critical role infrastructure teams play in keeping the digital world running. As cloud adoption accelerates, the demand for strong DevOps, SRE, and platform engineering only rises.

The goal isn't to avoid failure entirely — it's to make sure no single point can take everything down with it.
`,
    date: "Nov 2025",
    readTime: "4 min",
    category: "devops",
    tags: ["DevOps", "SRE", "Resilience Engineering", "Observability", "Cloud"],
    author,
    featured: false,
    color: "from-orange-500/20 to-amber-500/20",
  },
]


export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}
