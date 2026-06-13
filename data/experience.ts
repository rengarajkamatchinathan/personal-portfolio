export interface Experience {
  id: string
  role: string
  company: string
  location?: string
  start: string // ISO month, e.g. "2025-05"
  end: string | null // null = present → rendered as the current role
  description: string // supports **bold** segments
  highlights?: string[] // short impact/achievement chips shown above the tech tags
  tags?: string[]
}

// Newest first. Period label + duration are computed from start/end at render.
export const experience: Experience[] = [
  {
    id: "synergech",
    role: "Software Development Engineer",
    company: "Synergech Technologies",
    location: "Chennai",
    start: "2024-08",
    end: null,
    description:
      "Core engineer on two AI products. **InfraGenie** turns a simple prompt into complex, production-ready infrastructure code — generating **Terraform/OpenTofu** configurations and provisioning them through **DeployIt**. **ATG** tests applications end-to-end using AI — autonomous agents that plan, execute, and validate test flows. Built the agentic backbone behind both: **multi-agent orchestration** with MCP, tool calling, and agent memory, backed by Redis caching and RabbitMQ messaging over FastAPI services and Next.js frontends. Also working platform-side for a **US insurance-domain client**.",
    highlights: [
      "Core engineer on two AI products — InfraGenie & ATG",
      "Built the agentic backbone: multi-agent orchestration with MCP, tool calling & memory",
      "FastAPI services and Next.js frontends, backed by Redis caching and RabbitMQ messaging",
      "Platform work for a US insurance-domain client",
    ],
    tags: [
      "Next.js",
      "FastAPI",
      "System Design",
      "Redis",
      "RabbitMQ",
      "AI",
      "MCP",
      "Agents",
      "Multi-agent Orchestration",
      "Tools",
      "Memory",
      "Caching",
    ],
  },
  {
    id: "tmachine",
    role: "Intern",
    company: "TMachine",
    location: "Chennai",
    start: "2023-12",
    end: "2024-07",
    description:
      "Built **Eyepoint**, an eye-tracking analytics platform. Developed gaze-estimation pipelines with **OpenCV, MediaPipe, and TensorFlow** — from camera capture through model inference (NumPy, scikit-learn) — served by a **Django** backend and paired with a **React** dashboard for visualizing gaze analytics.",
    highlights: [
      "Built Eyepoint — an eye-tracking analytics platform",
      "Gaze-estimation pipelines with OpenCV, MediaPipe & TensorFlow",
      "Django backend paired with a React dashboard for gaze analytics",
    ],
    tags: ["Django", "React", "OpenCV", "scikit-learn", "NumPy", "MediaPipe", "TensorFlow", "Python"],
  },
]
