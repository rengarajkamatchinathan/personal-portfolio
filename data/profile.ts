// Single source of truth for identity. Change it here and it propagates across
// the header, footer, SEO metadata, structured data, and section content.
export const profile = {
  name: "Rengaraj", // given name — used in first-person prose ("I'm Rengaraj…")
  fullName: "Rengaraj Kamatchinathan", // legal/full name — used in SEO & structured data
  brand: "Rengaraj K", // wordmark / site name
  role: "Software Development Engineer",
  location: "India",
  tagline: "Software Engineer & Full-Stack Developer",
  description:
    "Rengaraj Kamatchinathan (Rengaraj K) — a full-stack software engineer from India, building production web apps and agentic AI end to end across the stack.",
  email: "rengaraj02k@gmail.com",
  siteUrl: "https://rengaraj.vercel.app",
  github: "https://github.com/rengarajkamatchinathan",
  linkedin: "https://linkedin.com/in/rengarajkamatchinathan",
  x: "https://x.com/rengarajks",
  xHandle: "@rengarajks",
  leetcode: "https://leetcode.com/u/rengaraj02k/",
  instagram: "https://www.instagram.com/rengaraj_kamatchinathan/",
  avatar: "/profile.png", // portrait/headshot — hero, blog author, structured data
} as const
