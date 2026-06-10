export interface Education {
  id: string
  degree: string
  institution: string
  period: string // e.g. "2019 — 2023"
  detail?: string // optional — field, grade, or a short note
}

// Newest first.
export const education: Education[] = [
  {
    id: "be-cse",
    degree: "B.E. Computer Science",
    institution: "Panimalar Engineering College",
    period: "Oct 2020 — Jun 2024",
    detail: "Grade: 8.65 / 10 · First class with distinction",
  },
]
