import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "1",
    title: "Sarah AI Friend v2",
    description:
      "Sarah AI-02 is designed to feel more real, talk more naturally, and connect on a deeper level. She now starts conversations on her own, sensing when you've been quiet or picking up on your mood. Her responses carry real emotions, from excitement and empathy to sarcasm and silliness, matching your energy like a true friend. She adapts her chat style based on who she's talking to—more bubbly and supportive with girls, more relaxed and relatable with guys. She's also aware of the time and what's trending, offering morning motivation, late-night chats, or reactions to current events. With long-term memory powered by Pinecone, she remembers your past conversations, dreams, and feelings. Sarah AI-02 isn’t just a chatbot anymore—she’s becoming someone who truly gets you.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rengarajkamatchinathan/sarah-ai-02-api", 
    url: "https://sarah-ai-01-e5d6.vercel.app/",
    tags: ["RAG", "LLM", "NLP", "FastAPI", "Firebase", "NextJS"],
    screenshots:['/projects/Sara/18.png','/projects/Sara/19.png','/projects/Sara/20.png','/projects/Sara/21.png']
  },
  {
    id: "2",
    title: "TikTok Clone",
    description:
      "This intelligent short-video platform goes beyond a typical TikTok clone by dynamically personalizing the video feed based on user interaction and inferred mood. The system tracks how long users watch each video, their likes, and the mood tags of those videos (e.g., sad, happy). By analyzing recent user behavior—such as watch time and engagement on mood-tagged videos—it calculates an average mood score that reflects the user’s current emotional state. Using this insight, the platform curates and serves personalized video recommendations tailored to uplift, calm, or energize users, creating a truly empathetic and engaging experience.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://buymeacoffee.com/rengarajk/e/327747", // Not provided
    url: "", // No live URL provided
    tags: ["ReactJS", "Redux", "Tailwind CSS", "MUI", "Formik", "Spring", "MySQL"],
    screenshots:[
      '/projects/project-Tiktok/1.png',
      '/projects/project-Tiktok/2.png',
      '/projects/project-Tiktok/3.png',
      '/projects/project-Tiktok/4.png',
      '/projects/project-Tiktok/5.png',
      '/projects/project-Tiktok/6.png',
      '/projects/project-Tiktok/7.png',
      '/projects/project-Tiktok/8.png',
      '/projects/project-Tiktok/9.png',
      '/projects/project-Tiktok/10.png',
      '/projects/project-Tiktok/11.png',
      '/projects/project-Tiktok/12.png',
    ]
  },
  {
    id: "facebook-classic-clone",
    title: "Facebook Classic Clone",
    description:
      "It is a Facebook 2017 classic version built with React and Spring, featuring real-time likes, comments, messaging, and a personalized feed with sleek animations.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://buymeacoffee.com/rengarajk/e/360037", // Not provided
    url: "https://facebook-classic.vercel.app/",
    tags: ["ReactJS", "Redux", "Tailwind CSS", "MUI", "Formik", "Spring", "MySQL"],
    screenshots:[
      '/projects/project-fb/1.png',
      '/projects/project-fb/2.png',
      '/projects/project-fb/3.png',
      '/projects/project-fb/4.png',
      '/projects/project-fb/5.png',
      '/projects/project-fb/6.png',
      '/projects/project-fb/7.png'
    ]
  },
  {
    id: "ethe-ecommerce",
    title: "ETHE (E-commerce)",
    description:
      "An advanced e-commerce platform featuring microservices architecture, JWT auth, secure payments, and dynamic product catalog with personalized recommendations.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://buymeacoffee.com/rengarajk/e/360038", // Not provided
    url: "https://etheecommerce.vercel.app/",
    tags: ["ReactJS", "Redux", "Tailwind CSS", "MUI", "Formik", "Spring", "MySQL"],
    screenshots:[
      '/projects/ethe/1.png',
      '/projects/ethe/2.png',
      '/projects/ethe/3.png',
      '/projects/ethe/4.png',
      '/projects/ethe/5.png',
      '/projects/ethe/6.png',
      '/projects/ethe/7.png',
      '/projects/ethe/8.png',
      '/projects/ethe/9.png',
      '/projects/ethe/10.png',
      '/projects/ethe/11.png',
      '/projects/ethe/12.png',
      '/projects/ethe/13.png'
    ]
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description:
      "An app similar to Spotify where users can listen to and manage their playlist. Favourites are stored locally.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://buymeacoffee.com/rengarajk/e/360039",
    url: "https://musicplayerss.vercel.app/",
    tags: ["ReactJS", "Tailwind", "MUI", "APIs"],
    screenshots:[
      '/projects/Spotify/1.png',
      '/projects/Spotify/2.png',
      '/projects/Spotify/3.png',
      '/projects/Spotify/4.png',
      '/projects/Spotify/5.png'
    ]
  },
  {
    id: "eyepoint",
    title: "Eyepoint",
    description:
      "An eye-tracking analytics platform developed during an internship at TMachine. It monitors and analyzes user gaze patterns to determine screen focus areas. Built with a modern frontend and integrated backend AI models for gaze estimation.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "",
    tags: ["ReactJS", "Tailwind CSS", "Python", "OpenCV", "MediaPipe", "TensorFlow", "Dlib"],
    screenshots: [
      '/projects/ep/1.jpg'
    ]
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description:
      "A YouTube clone built with Django and React for seamless video streaming, modern UI, and smooth navigation.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rengarajks/Videos-platform-fullstack-application",
    url: "",
    tags: ["ReactJS", "Tailwind CSS", "Django", "Python", "PostgreSQL"],
    screenshots:[
      '/projects/yt-clone/1.png',
      '/projects/yt-clone/2.png'
    ]
  },
  {
    id: "ai-socialmedia",
    title: "AI Powered Social Media",
    description:
      "An AI-driven social platform with mood-based image classification and sentiment analysis, built with Django and OpenCV.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rengarajks/Ai-powered-socialmedia",
    url: "",
    tags: ["Django", "OpenCV", "NLP", "Scikit"],
    screenshots:[
      '/projects/aisocial/social.jpeg',
    ]
  },
  {
    id: "amazon-ui-clone",
    title: "Amazon Frontend Clone",
    description:
      "Amazon UI clone using React and Tailwind CSS with responsive design, sleek navigation, and dynamic listings.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rengarajks/Amazon-clone-ReactJS",
    url: "",
    tags: ["ReactJS", "Tailwind CSS"],
    screenshots:[
      '/projects/amazon/ecom.jpeg'
    ]
  },
  {
    id: "instagram-ui-clone",
    title: "Instagram Frontend Clone",
    description:
      "Instagram UI clone featuring feed layout, stories carousel, and interactive post components using React and Tailwind CSS.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rengarajks/Instagram-clone-reactJS",
    url: "",
    tags: ["ReactJS", "Tailwind CSS"],
    screenshots:[
      '/projects/insta/1.png'
    ]
  },
  {
    id: "college-admission-app",
    title: "College Admission App",
    description:
      "A fully automated college admission system developed with Flutter, Firebase, offering tailored functionalities for students and institutions.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["Flutter", "Dart", "Firebase"],
    screenshots:[
      '/projects/enrolin/1.png'
    ]
  },
  {
    id: "fitzguider",
    title: "FitZGuider Application",
    description:
      "Fitness app built with React and Local Storage to calculate body fat percentage and provide personalized fitness guidance.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rengarajks/fitZguider",
    url: "",
    tags: ["ReactJS", "Tailwind CSS", "MUI", "LocalStorage"],
    screenshots:[
      '/projects/fitz/1.png',
      '/projects/fitz/2.png',
    ]
  },
];

export default projects;
