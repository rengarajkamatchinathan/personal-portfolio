import { profile } from "./profile"

// Hero section content. The typed `roles` rotate after `headlineLead`.
export const hero = {
  eyebrow: "Software engineer · builder · tinkerer",
  headlineLead: "Passionate about",
  roles: ["innovating", "reverse-engineering", "building things", "breaking things", "shipping ideas"],
  description: {
    lead: `I'm ${profile.name} — a software engineer driven by curiosity. I love`,
    highlight: " building new things",
    tail: ", and pulling existing ones apart to understand exactly how they work. If it's interesting, I'll figure it out — then make it better.",
  },
  portrait: {
    src: profile.avatar,
    alt: profile.name,
  },
  badges: {
    status: "available",
    role: profile.role,
  },
  ctas: {
    primary: { label: "view projects", href: "#projects" },
    secondary: { label: "introduction", href: "/introduction" },
  },
} as const
