export interface Experience {
  id: string
  role: string
  company: string
  period: string // e.g. "2023 — Present"
  description: string // one or two lines of impact, not a tech list
  current?: boolean // most-recent role → filled, glowing node
}

// Newest first. Placeholder content — edit with your real roles/dates.
export const experience: Experience[] = [
  {
    id: "synergech",
    role: "Software Engineer",
    company: "Synergech Technologies",
    period: "2023 — Present",
    description:
      "Build and ship production web applications end to end, and lead AI tooling initiatives across the stack.",
    current: true,
  },
  {
    id: "tmachine",
    role: "Frontend Intern",
    company: "TMachine",
    period: "2022 — 2023",
    description:
      "Built Eyepoint, an eye-tracking analytics platform pairing a React frontend with gaze-estimation models.",
  },
  {
    id: "freelance",
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2021 — 2022",
    description: "Delivered full-stack products and high-fidelity clones for clients across the web stack.",
  },
]
