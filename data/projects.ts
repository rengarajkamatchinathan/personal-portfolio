export type ProjectStatus = "in-progress" | "completed" | "archived"

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  status: ProjectStatus
  year?: string
  image?: string // cover (first screenshot) — shown on the card
  screenshots?: string[] // full set, for a future gallery / detail view
  github?: string // source repo (real repos only)
  live?: string // live demo
  repoType?: "public" | "private"
  category?: "personal" | "work"
  featured?: boolean
  highlight?: boolean
}

// Filter chips on the /projects page ("all" + the statuses in use).
export const projectFilters = ["all", "in-progress", "completed"] as const

export const projects: Project[] = [
  {
    id: "reno",
    title: "Reno",
    description:
      "A terminal-based agentic code generator in the spirit of the Claude Code CLI. Pick your tech stack and Reno scaffolds and writes the project from your prompts.",
    tags: ["CLI", "Agentic AI", "Code generation"],
    status: "in-progress",
    year: "2026",
  },
  {
    id: "sarah-ai-v2",
    title: "Sarah AI Friend v2",
    description:
      "An AI companion that feels real — she starts conversations on her own, senses your mood, and responds with genuine emotion, from empathy to sarcasm. She adapts her tone to who she's talking to, reacts to the time of day and what's trending, and — backed by long-term memory in Pinecone — remembers your past chats, dreams, and feelings. Less a chatbot, more someone who gets you.",
    tags: ["RAG", "LLM", "NLP", "FastAPI", "Firebase", "Next.js", "Pinecone"],
    status: "completed",
    repoType: "public",
    category: "personal",
    github: "https://github.com/rengarajkamatchinathan/sarah-ai-02-api",
    live: "https://sarah-ai-01-e5d6.vercel.app/",
    image: "/projects/Sara/18.png",
    screenshots: ["/projects/Sara/18.png", "/projects/Sara/19.png", "/projects/Sara/20.png", "/projects/Sara/21.png", "/projects/Sara/22.png"],
  },
  {
    id: "tiktok-clone",
    title: "TikTok Clone",
    description:
      "A mood-aware short-video platform that personalizes the feed in real time. It tracks watch time, likes, and per-video mood tags to infer your current mood, then curates clips to uplift, calm, or energize you.",
    tags: ["React", "Redux", "Tailwind", "MUI", "Formik", "Spring", "MySQL"],
    status: "completed",
    repoType: "public",
    category: "personal",
    image: "/projects/project-Tiktok/1.png",
    screenshots: [
      "/projects/project-Tiktok/1.png",
      "/projects/project-Tiktok/2.png",
      "/projects/project-Tiktok/3.png",
      "/projects/project-Tiktok/4.png",
      "/projects/project-Tiktok/5.png",
      "/projects/project-Tiktok/6.png",
      "/projects/project-Tiktok/7.png",
      "/projects/project-Tiktok/8.png",
      "/projects/project-Tiktok/9.png",
      "/projects/project-Tiktok/10.png",
      "/projects/project-Tiktok/11.png",
      "/projects/project-Tiktok/12.png",
    ],
  },
  {
    id: "ethe-ecommerce",
    title: "ETHE (E-commerce)",
    description:
      "A microservices e-commerce platform with JWT auth, secure payments, a dynamic product catalog, and personalized recommendations.",
    tags: ["React", "Redux", "Tailwind", "MUI", "Formik", "Spring", "MySQL"],
    status: "completed",
    repoType: "public",
    category: "personal",
    live: "https://etheecommerce.vercel.app/",
    image: "/projects/ethe/1.png",
    screenshots: [
      "/projects/ethe/1.png",
      "/projects/ethe/2.png",
      "/projects/ethe/3.png",
      "/projects/ethe/4.png",
      "/projects/ethe/5.png",
      "/projects/ethe/6.png",
      "/projects/ethe/7.png",
      "/projects/ethe/8.png",
      "/projects/ethe/9.png",
      "/projects/ethe/10.png",
      "/projects/ethe/11.png",
      "/projects/ethe/12.png",
      "/projects/ethe/13.png",
    ],
  },
  {
    id: "facebook-classic-clone",
    title: "Facebook Classic Clone",
    description:
      "A faithful rebuild of Facebook's 2017 classic look with real-time likes, comments, messaging, and a personalized feed — wrapped in smooth animations.",
    tags: ["React", "Redux", "Tailwind", "MUI", "Formik", "Spring", "MySQL"],
    status: "completed",
    repoType: "public",
    category: "personal",
    live: "https://facebook-classic.vercel.app/",
    image: "/projects/project-fb/1.png",
    screenshots: [
      "/projects/project-fb/1.png",
      "/projects/project-fb/2.png",
      "/projects/project-fb/3.png",
      "/projects/project-fb/4.png",
      "/projects/project-fb/5.png",
      "/projects/project-fb/6.png",
      "/projects/project-fb/7.png",
    ],
  },
  {
    id: "eyepoint",
    title: "Eyepoint",
    description:
      "An eye-tracking analytics platform built during an internship at TMachine. It estimates user gaze to map screen focus areas, pairing a modern frontend with backend AI gaze-estimation models.",
    tags: ["React", "Tailwind", "Python", "OpenCV", "MediaPipe", "TensorFlow", "Dlib"],
    status: "completed",
    repoType: "private",
    category: "work",
    image: "/projects/ep/1.jpg",
    screenshots: ["/projects/ep/1.jpg"],
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description:
      "A Spotify-style music player for browsing and managing playlists, with favourites persisted locally.",
    tags: ["React", "Tailwind", "MUI", "APIs"],
    status: "completed",
    repoType: "public",
    category: "personal",
    live: "https://musicplayerss.vercel.app/",
    image: "/projects/Spotify/1.png",
    screenshots: [
      "/projects/Spotify/1.png",
      "/projects/Spotify/2.png",
      "/projects/Spotify/3.png",
      "/projects/Spotify/4.png",
      "/projects/Spotify/5.png",
    ],
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description: "A full-stack YouTube clone with Django and React — smooth video streaming, a modern UI, and clean navigation.",
    tags: ["React", "Tailwind", "Django", "Python", "PostgreSQL"],
    status: "completed",
    repoType: "public",
    category: "personal",
    github: "https://github.com/rengarajks/Videos-platform-fullstack-application",
    image: "/projects/yt-clone/1.png",
    screenshots: ["/projects/yt-clone/1.png", "/projects/yt-clone/2.png"],
  },
  {
    id: "ai-social-media",
    title: "AI Powered Social Media",
    description: "An AI-driven social platform with mood-based image classification and sentiment analysis, built on Django and OpenCV.",
    tags: ["Django", "OpenCV", "NLP", "scikit-learn"],
    status: "completed",
    repoType: "public",
    category: "personal",
    github: "https://github.com/rengarajks/Ai-powered-socialmedia",
    image: "/projects/aisocial/social.jpeg",
    screenshots: ["/projects/aisocial/social.jpeg"],
  },
  {
    id: "amazon-ui-clone",
    title: "Amazon Frontend Clone",
    description: "A responsive Amazon UI clone in React and Tailwind — sleek navigation and dynamic product listings.",
    tags: ["React", "Tailwind"],
    status: "completed",
    repoType: "public",
    category: "personal",
    github: "https://github.com/rengarajks/Amazon-clone-ReactJS",
    image: "/projects/amazon/ecom.jpeg",
    screenshots: ["/projects/amazon/ecom.jpeg"],
  },
  {
    id: "instagram-ui-clone",
    title: "Instagram Frontend Clone",
    description: "An Instagram UI clone with a feed layout, stories carousel, and interactive post components in React and Tailwind.",
    tags: ["React", "Tailwind"],
    status: "completed",
    repoType: "public",
    category: "personal",
    github: "https://github.com/rengarajks/Instagram-clone-reactJS",
    image: "/projects/insta/1.png",
    screenshots: ["/projects/insta/1.png"],
  },
  {
    id: "college-admission-app",
    title: "College Admission App",
    description: "A fully automated college-admission system built with Flutter and Firebase, with tailored flows for students and institutions.",
    tags: ["Flutter", "Dart", "Firebase"],
    status: "completed",
    repoType: "private",
    category: "personal",
    image: "/projects/enrolin/1.png",
    screenshots: ["/projects/enrolin/1.png"],
  },
  {
    id: "fitzguider",
    title: "FitZGuider",
    description: "A fitness app that calculates body-fat percentage and offers personalized guidance, with progress saved to local storage.",
    tags: ["React", "Tailwind", "MUI", "LocalStorage"],
    status: "completed",
    repoType: "public",
    category: "personal",
    github: "https://github.com/rengarajks/fitZguider",
    image: "/projects/fitz/1.png",
    screenshots: ["/projects/fitz/1.png", "/projects/fitz/2.png"],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
