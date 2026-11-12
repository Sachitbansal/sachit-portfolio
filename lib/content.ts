// Single source of truth for site copy. Written for non-technical readers:
// lead with the problem and the outcome, keep tools as a quiet footnote.

export const profile = {
  name: "Sachit Bansal",
  email: "sachitbansaldeveloper@gmail.com",
  location: "Hannover, Germany",
  links: {
    linkedin: "https://linkedin.com/in/sachit-bansal/",
    github: "https://github.com/Sachitbansal",
    x: "https://x.com/sachitbansal20",
  },
  availability: "Open to freelance projects, internships and Werkstudent roles",
}

export const identity = "AI Engineer · Agentic AI · Intelligent Automation · Software Engineering"

export const highlights = ["Agentic AI", "LLM Applications", "RAG", "Workflow Automation", "Python", "Full-Stack Engineering"]

export const credibility = ["IIT Mandi", "Leibniz University Hannover", "15 hackathons won"]

// The USP: hand-coded foundations from before AI coding tools, applied to modern AI problems.
export const origin = {
  lead: "Coding since 14.",
  short: "First Play Store app at 16, hand-coded before AI tools.",
  body: "I spent a year building that app entirely by hand, long before AI could write code. Today I bring that foundation to modern problems: I know how to use AI to move fast, and I understand every line underneath it.",
}

export const proof = [
  { value: 50, suffix: "+", label: "websites administered", note: "IIT Mandi's student server, 3,000+ users" },
  { value: 15, suffix: "", label: "hackathons won", note: "incl. events by IIT Bombay, Guwahati, Madras" },
  { value: 9, prefix: "AIR ", suffix: "", label: "among 15,000+", note: "Shaastra Juniors, IIT Madras" },
]

export type Service = {
  key: "ai" | "automation" | "web" | "cloud"
  title: string
  tagline: string
  bullets: string[]
  example: string
}

export const services: Service[] = [
  {
    key: "ai",
    title: "Agentic AI & intelligent assistants",
    tagline: "AI systems that go beyond answering questions.",
    bullets: [
      "Autonomous AI agents and multi-agent workflows",
      "Document intelligence and knowledge assistants",
      "Retrieval-Augmented Generation (RAG)",
      "LLM tool calling and intelligent information retrieval",
      "Research and decision-support systems",
    ],
    example: "An AI research assistant that retrieves information, verifies claims and provides evidence-backed answers.",
  },
  {
    key: "automation",
    title: "Business process automation",
    tagline: "Reduce repetitive work and create intelligent workflows.",
    bullets: [
      "AI-powered workflow automation",
      "API integrations and backend automation",
      "Intelligent document and data extraction",
      "Automated reporting and information processing",
      "Real-time data processing and decision systems",
    ],
    example: "Automating a multi-step business workflow that currently needs repetitive manual work.",
  },
  {
    key: "web",
    title: "AI-powered applications & products",
    tagline: "Turn ideas into working digital products.",
    bullets: [
      "AI-powered web applications",
      "Custom dashboards and internal tools",
      "Backend and API development",
      "Mobile applications",
      "AI integrations into existing products",
    ],
    example: "A complete application with AI capabilities, backend architecture and production deployment.",
  },
  {
    key: "cloud",
    title: "AI infrastructure, deployment & engineering",
    tagline: "Build systems that can operate reliably.",
    bullets: [
      "Python backend development",
      "Docker-based deployments",
      "Cloud infrastructure and hosting",
      "Linux administration and server security",
      "API integrations and production support",
    ],
    example: "Deploying and maintaining applications with the right infrastructure and security practices.",
  },
]

export const process = [
  { title: "Understand", body: "We discuss the business problem, the intended users and what success should look like." },
  { title: "Architect", body: "I pick the right technology, design the solution and define a practical development plan." },
  { title: "Build", body: "I develop in focused iterations, validate functionality and share progress." },
  { title: "Deploy", body: "I integrate, test and deploy the solution into its intended environment." },
  { title: "Improve", body: "I help refine the product based on feedback, performance and actual usage." },
]

export type Project = {
  id: "sciagent" | "customer" | "podclip" | "myitihas" | "webspark"
  name: string
  headline: string
  kind: string
  when: string
  challenge: string
  engineered: string
  components: string[]
  validation?: string[]
  demonstrates: string
  badge?: string
  tools: string
  link?: string
  cta?: string
}

export const projects: Project[] = [
  {
    id: "sciagent",
    name: "SciAgent",
    headline: "An agentic AI research assistant that verifies what it says.",
    kind: "Agentic AI · Research",
    when: "2026",
    challenge:
      "AI assistants can produce convincing answers without checking whether the underlying information supports their claims. In research, that is a critical limitation.",
    engineered:
      "An agentic research assistant that searches academic papers, retrieves relevant evidence, evaluates claims and gives grounded responses.",
    components: [
      "Five specialised LLM tools",
      "BGE embeddings and FAISS retrieval",
      "Cross-encoder reranking",
      "Natural Language Inference (NLI) for claim verification",
      "A framework-free LLM tool-calling loop",
    ],
    validation: [
      "100% citation accuracy on a hand-annotated benchmark",
      "100% abstention accuracy",
      "0.92 held-out fact coverage",
    ],
    demonstrates: "Engineering AI that goes beyond generating text: retrieval, reasoning, verification and reliability.",
    badge: "100% citation accuracy",
    tools: "Python · Agentic AI · FAISS · BGE · Cross-encoders · NLI",
    link: "https://github.com/Sachitbansal/researchAgent",
    cta: "Explore on GitHub",
  },
  {
    id: "customer",
    name: "Customer Targeting",
    headline: "Real-time customer intelligence through streaming data and machine learning.",
    kind: "Streaming ML · Inter IIT Tech Meet 14.0",
    when: "2025",
    challenge:
      "Traditional customer segmentation goes stale as behaviour changes. Businesses need to understand customers as transactions happen.",
    engineered: "A distributed streaming pipeline that processes transaction events and maintains a live Customer 360 state.",
    components: [
      "Stateful joins and reducers",
      "Incremental feature updates",
      "Distributed streaming architecture",
      "Online machine-learning inference",
      "Concept-drift handling",
    ],
    validation: ["≈0.83 streaming accuracy"],
    demonstrates: "Distributed systems, streaming data, machine learning and real-time decision intelligence.",
    badge: "Inter IIT 14.0",
    tools: "Pathway · Python · Streaming systems · Online ML",
    link: "https://github.com/Sachitbansal/CustomerTargetting",
    cta: "Explore on GitHub",
  },
  {
    id: "podclip",
    name: "PodClip",
    headline: "Turning long-form podcasts into short-form content intelligence.",
    kind: "Applied ML · Speech",
    when: "2025",
    challenge: "Finding the engaging moments in long podcast recordings takes hours of manual listening and editing.",
    engineered:
      "A backend pipeline that ingests YouTube podcasts, extracts audio, transcribes and separates speakers, and identifies high-engagement moments.",
    components: [
      "Audio extraction and processing",
      "Whisper-based transcription",
      "Speaker diarization",
      "Sentiment analysis",
      "Vector indexing and content intelligence",
    ],
    demonstrates: "Combining applied ML, speech processing and backend engineering into a useful content workflow.",
    tools: "Python · Whisper · Hugging Face · Applied ML",
    link: "https://github.com/Sachitbansal/PodClip",
    cta: "Explore on GitHub",
  },
  {
    id: "myitihas",
    name: "MyItihas",
    headline: "Production mobile app development, from engineering to app-store release.",
    kind: "Mobile · Production",
    when: "Dec 2025 – Feb 2026",
    challenge:
      "A social mobile app needs more than screens: authentication, data models, APIs, user interactions and reliable deployment.",
    engineered: "Owned the full product development lifecycle and independently shipped production builds to Google Play and the Apple App Store.",
    components: [
      "Peer-to-peer and group chat",
      "Authentication and profile management",
      "Follower / following system",
      "Backend data modelling",
      "API integration for search and chat storage",
    ],
    demonstrates: "End-to-end product ownership, mobile engineering, backend integration and production execution.",
    badge: "Google Play & App Store",
    tools: "Flutter · Supabase",
  },
  {
    id: "webspark",
    name: "Webspark",
    headline: "An AI-powered website builder.",
    kind: "AI agents · Hackathon",
    when: "2025",
    challenge: "Getting a website made is slow and expensive for a small business.",
    engineered:
      "A system that turns a plain-language instruction into a working website through AI-assisted design, development and deployment.",
    components: ["Natural-language brief to site plan", "AI agents for design and code", "Automated deployment"],
    demonstrates: "Orchestrating multiple AI agents into one product flow, built and demoed under hackathon pressure.",
    badge: "1st place · KrackHack 2.0",
    tools: "Python · AI agents · Next.js",
  },
]

export const journey = [
  { when: "Class 4", title: "Rubik's cubes", body: "A simple cube turned into a fascination with harder and harder puzzles, and the satisfaction of solving them." },
  { when: "Age 14", title: "Curiosity turns to code", body: "Started learning Python, web development and mobile app development, not for a curriculum but to make ideas real." },
  { when: "Age 16", title: "First app on the Play Store", body: "A full year building and publishing an Android app alone, every line by hand, before AI coding tools existed." },
  { when: "Class 10", title: "Keynote at GDG, UPES Dehradun", body: "Delivered a hands-on Flutter session as a keynote speaker at a Google Developer Group event." },
  { when: "Lockdown", title: "Competitions & hackathons", body: "Started competing online, including events run by IIT Bombay, IIT Guwahati and IIT Madras." },
  { when: "Lockdown", title: "2,000+ learners on YouTube", body: "Started a channel teaching Python and Flutter that grew organically past 2,000 subscribers." },
  { when: "IIT Mandi", title: "From curiosity to engineering", body: "Cybersecurity, AI, machine learning and systems. Google Cybersecurity certificate, Cybersecurity Club, server administration, mentoring and teaching." },
  { when: "Today", title: "Agentic systems & automation", body: "Software engineering, applied AI, agentic systems and automation, with the same motivation: understand deeply, build something useful." },
]

export const achievements = [
  { title: "1st place, KrackHack 3.0", where: "GDG IIT Mandi · 2026" },
  { title: "1st place, KrackHack 2.0", where: "GDG IIT Mandi · 2025" },
  { title: "1st place, Space Code 2026", where: "IIT Mandi · 2026" },
  { title: "AIR 9 among 15,000+", where: "Shaastra Juniors, IIT Madras" },
  { title: "1st place, Case Study Competition", where: "Shaastra Juniors, IIT Madras" },
  { title: "Google Cybersecurity Professional Certificate", where: "Google" },
]

export const leadership = [
  { role: "System Administrator", org: "SAIC, IIT Mandi", body: "Administer 50+ websites on the primary student server for 3,000+ students and faculty: Docker deployments, DNS and server security." },
  { role: "Tutor", org: "PRAYAS 3.0", body: "Mentored 100+ students in hands-on Arduino and machine learning." },
  { role: "Core Team", org: "Kamand Prompt, Programming Club", body: "Delivered a web development session to 500+ students." },
]

export const education = [
  { school: "Indian Institute of Technology, Mandi", detail: "B.Tech, General Engineering, specialisation in AI & Robotics", when: "2024 – 2028" },
  { school: "Leibniz University Hannover, Germany", detail: "Exchange semester, Computer Science & AI", when: "Oct 2026 – Mar 2027" },
]

// Why work with me: the product side, shown as how Sachit thinks, not as claimed track record.
export const thinking = {
  title: "Not just writing code. Building solutions.",
  intro: "I believe good engineering starts with understanding the problem, not choosing a technology.",
  points: [
    { title: "Understand the problem", body: "I look beyond the initial requirement to the underlying challenge, the people using the solution and the outcome that matters." },
    { title: "Engineer the solution", body: "I bring together AI, software development, APIs, data pipelines and automation to design solutions that are practical and scalable." },
    { title: "Build, deploy and improve", body: "I own implementation, integration, testing and deployment, so it works beyond a demo." },
  ],
  closing: "The objective isn't to use AI everywhere. It's to use technology where it creates measurable value.",
  examples: [
    {
      tag: "AI chatbot",
      rough: "We want an AI chatbot.",
      who: "A support team answering the same 40 questions every day",
      pain: "Customers wait hours for answers that take seconds",
      first: "An assistant that answers from your help docs and hands the hard cases to a person",
      pitch: "“Answers in 10 seconds, day or night”, not “we use AI”",
    },
    {
      tag: "Gym app",
      rough: "Can you build an app for our gym?",
      who: "Members who quietly stop showing up",
      pain: "The gym only notices when they cancel",
      first: "A WhatsApp message to anyone who hasn't visited in 10 days. No app to download.",
      pitch: "Sold to the owner as fewer cancellations",
    },
    {
      tag: "Website",
      rough: "We need a website.",
      who: "Local customers searching on their phones",
      pain: "They can't find prices or book quickly, so they call someone else",
      first: "One fast page with prices, reviews and a booking button that shows up on Google",
      pitch: "Measured in bookings, not page views",
    },
  ],
}
