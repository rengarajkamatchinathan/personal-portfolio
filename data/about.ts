import { profile } from "./profile"

// About section (homepage) + the longer story used on the /about page.
export const about = {
  heading: "A bit about me",
  bio: [
    `I've been obsessed with technology since I was a kid, so computer science was never really a choice — it was the natural path. What started as a passion became my profession, and today I build AI products from idea to production.`,
    "I enjoy breaking down great products to understand what makes them work, then applying those lessons to create better solutions. My biggest strength is learning and adapting quickly, no matter the technology or domain. Given the choice, I'll always take on the harder problem — the challenge of turning something that seems impossible into something that works is what keeps me motivated.",
    "No matter what the challenge is, I believe any problem in this world can be solved through humanity's greatest superpower: technology.",
  ],
  facts: [
    { label: "role", value: profile.role },
    { label: "focus", value: "AI Agents · Cloud · Product" },
    { label: "experience", value: "2+ years" },
    { label: "location", value: profile.location },
    { label: "status", value: "Open to work" },
  ],
  cta: { label: "read the full story", href: "/about" },
  // /about page: hero lead + titled sub-sections, rendered in order.
  storyLead: `I'm ${profile.name} — grew up across Chennai and Thrissur, obsessed with computers since I was eight. Some kids collected cards; I collected questions about how stuff works. Phones, games, websites, whatever. So when it was time to pick a degree, Computer Science at Panimalar Engineering College wasn't a decision — it was a formality.`,
  storySections: [
    {
      path: "origin",
      title: "Where I'm from",
      paragraphs: [
        "When I was eight, my dad was a video editor working on a Pentium 4 machine. I'd stare at his editing software wondering how something like that could even exist — so one day I went digging through its files in the local disk, just to see what it was made of. That's it. That's where it all started.",
        "It didn't help that every hero I grew up on was a tech guy. Iron Man built suits in a cave, Batman had a gadget for everything, Ben 10 carried a supercomputer on his wrist. The heroes were cool, but I kept watching for the tech — and somewhere in there, technology stopped being a thing on a screen and became the thing I wanted to do.",
        "Then came the gaming centers. I played a lot of games, but one of them I couldn't leave alone — playing it wasn't enough, I wanted my own version. So I edited its skin files, map files, whatever I could open, until the game was mine. That was my first coding experience. Looks funny, right? But the pattern was set: if I like something, I take it apart.",
        "At ten, I tried to dual-boot my dad's computer off some forum instructions — and accidentally ran a clean command. Everything, gone. Dad was upset but never got angry; might've been easier if he had. So I scoured the internet, found data recovery software, plugged his hard drive into my uncle's computer, and got everything back — then dual-booted Vista anyway. And my dad? He bought me a computer of my own.",
        "CS at Panimalar Engineering College gave me two things no syllabus could: Rahul and Ranjith — one to solve problems with, one to discover new things with. When the intra-college project contest came around, we built an AI-powered social media platform that recommended posts based on your mood. No prompts, no chatbots — it read how you felt from your watch time, likes, comments, and chats in the moment, and matched the feed to it: feeling disturbed, you got useful, good, funny content; feeling joy, it rode that wave too. All of it with NLP and scikit-learn, the old-school way — before LLMs were a trend, before ChatGPT even existed.",
        "Along the way I started posting what I knew on Instagram and LinkedIn — and picked up a lot of followers doing it.",
      ],
    },
    {
      path: "now",
      title: "The current chapter",
      paragraphs: [
        "Then I went pro — joined Synergech and walked straight into InfraGenie, an AI platform that turns a plain prompt into production-ready Terraform and deploys it. I built the AI layer single-handedly: agent flows, context chat, an error-fix AI that reads Terraform errors and corrects the configuration itself, and a DeepResearch engine I redesigned from the ground up into a modular, agentic system that reasons over both Azure and AWS infrastructure. I designed the overall application architecture too — WebSockets, Redis caching, RabbitMQ pub/sub, microservices — and delivered most of the initial frontend while I was at it.",
        "The fun problems kept coming. The in-app code editor wasn't cutting it, so I replaced it with a full VS Code environment running inside the application — container setup, environment bridging, file handling, execution flows. It was called the toughest technical task on the project; it shipped anyway. I wired in the enterprise plumbing as well — ServiceNow ticketing inside the app, Azure Git, Terraform execution APIs. And when token costs got heavy, I cut consumption by almost 60% using agent memory, KV caching, batching, and structured contexts.",
        "Then came ATG — Automation Testing Genie. In a very short window I built its core AI: MCP-based agents that take a prompt, generate test cases for your application, turn them into Playwright scripts, and execute them — with a failure-analysis agent studying every run. The entire MCP flow went from zero to delivered in two days.",
        "And then there's the client work — CRC Group, out of the USA. The brief sounded almost unreasonable: take their entire application and rebuild it as a chat-based, multi-agent system. Not a chatbot bolted onto the side — the whole product, reimagined. Instead of clicking through screens and forms, you just say what you need, and a team of agents takes it from there: one understands the request, another pulls the data, another executes the workflow, all of them talking to each other behind the scenes. Rebuilding a full product around conversations between agents is exactly the kind of \"no way this works\" problem I chase — and it's the most fun I'm having right now.",
      ],
    },
    {
      path: "habit",
      title: "The habit I never dropped",
      paragraphs: [
        "Reverse-engineering famous products. Pick something everyone uses, pull it apart, figure out the clever bits, rebuild it myself. Half of what I know didn't come from courses — it came from staring at someone else's product going \"okay, but HOW.\"",
      ],
    },
    {
      path: "edge",
      title: "My edge",
      paragraphs: [
        "I adapt to any technology, fast. New stack, new domain, new framework — give me a minute, I'll be shipping in it. Frameworks change, fundamentals don't. And I don't wait for hard problems to find me — I go looking for them. Given the choice, I'll take the complex task every time, the one with that \"no way this works\" phase in the middle. I trigger myself into the deep end on purpose, because the satisfaction when it finally clicks? Nothing else comes close.",
      ],
    },
    {
      path: "philosophy",
      title: "How I think",
      paragraphs: [
        "My philosophy is simple: with technology, I can solve anything — whatever it takes. If someone out there has done it, why can't we? Nothing is magic; it's all just systems someone figured out, and anything figured out once can be figured out again. Beyond that: reliable beats clever, small iterations beat big rewrites, and anything boring enough to repeat gets automated.",
      ],
    },
  ],
  // /about page footer block. Each item: name + optional mono sub-label + optional note.
  influences: {
    eyebrow: "influences",
    heading: "Standing on shoulders",
    columns: [
      {
        title: "people i follow closely",
        items: [
          {
            name: "Sundar Pichai",
            sub: "",
            note: "Because of Chrome. He bet on a browser when the world already had browsers — and changed how everyone touches the web.",
          },
          {
            name: "Elon Musk",
            sub: "",
            note: "For the perseverance. Rockets blow up, factories stall — he ships again anyway.",
          },
        ],
      },
      {
        title: "fictional characters",
        items: [
          {
            name: "Tony Stark",
            sub: "",
            note: "Built a suit in a cave with a box of scraps. The original proof that engineering is a superpower.",
          },
          {
            name: "Bruce Wayne",
            sub: "",
            note: "No powers. Just preparation, discipline, and a gadget for everything.",
          },
        ],
      },
    ],
  },
} as const
