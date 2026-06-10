import { profile } from "./profile"

// About section (homepage) + the longer story used on the /about page.
export const about = {
  heading: "A bit about me",
  bio: [
    `I'm ${profile.name} — a full-stack engineer who likes the whole pipeline, from the interface a user clicks to the infrastructure it runs on.`,
    "I build with Next.js, ship on AWS, and prefer reliable, boring systems over clever ones. Most days that means small iterations, good observability, and automating the dull parts.",
  ],
  facts: [
    { label: "role", value: profile.role },
    { label: "focus", value: "Web · Cloud · DevOps" },
    { label: "experience", value: "6+ years" },
    { label: "location", value: profile.location },
    { label: "status", value: "Open to work" },
  ],
  cta: { label: "read the full story", href: "/about" },
  story: [
    `I'm ${profile.name} — a software engineer driven by curiosity. I like understanding how things work all the way down, and I'm just as happy building something new as I am taking an existing system apart to see what makes it tick.`,
    "Most of my work lives across the full stack: shipping user-facing products with Next.js, designing the services behind them, and running it all on AWS. I care more about reliable, boring systems than clever ones — small iterations, good observability, and automating the dull parts.",
    "When something's interesting, I reverse-engineer it. That habit is where most of what I know came from — pulling things apart, rebuilding them better, and keeping the lessons. This page is the longer version of that story; the homepage is the highlight reel.",
  ],
} as const
