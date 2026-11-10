// Single source of truth for site copy. Written for non-technical readers:
// lead with the problem and the outcome, keep tools as a quiet footnote.

export const profile = {
  name: "Sachit Bansal",
  email: "sachitbansal2006@gmail.com",
  location: "Hannover, Germany",
  links: {
    linkedin: "https://linkedin.com/in/sachit-bansal/",
    github: "https://github.com/Sachitbansal",
    x: "https://x.com/sachitbansal20",
  },
  availability: "Open to freelance projects, internships and Werkstudent roles",
}

export const cooking = [
  "an AI that reads scientific papers and cites every claim",
  "a live system that spots changing customer behaviour",
  "chat features for a community app",
  "tools that turn long podcasts into short clips",
]

export const proof = [
  { value: 2, suffix: "×", label: "KrackHack champion", note: "Google Developer Groups hackathon, IIT Mandi" },
  { value: 2, suffix: "", label: "app stores launched on", note: "Google Play and Apple App Store" },
  { value: 50, suffix: "+", label: "websites kept running", note: "for 3,000+ students and staff" },
  { value: 9, prefix: "AIR ", suffix: "", label: "out of 15,000+", note: "Shaastra Juniors, IIT Madras" },
]

export type Service = {
  key: "mobile" | "web" | "ai" | "infra"
  title: string
  body: string
  proof: string
  tools: string
}

export const services: Service[] = [
  {
    key: "mobile",
    title: "Mobile apps",
    body: "iPhone and Android apps, from the first screen to the store listing. Chat, sign-in, profiles, notifications.",
    proof: "MyItihas: live on Google Play and the App Store",
    tools: "Flutter · Supabase · Firebase",
  },
  {
    key: "web",
    title: "Websites & web apps",
    body: "Fast, good-looking websites and dashboards that work on every screen and are easy to keep up to date.",
    proof: "Webspark: builds a whole website from one sentence",
    tools: "Next.js · React · Django · FastAPI",
  },
  {
    key: "ai",
    title: "AI assistants & automation",
    body: "Assistants that answer from your own documents, and tools that read, sort and summarise so your team doesn't have to.",
    proof: "SciAgent: backs every answer with a source",
    tools: "LLMs · RAG · LangChain · Hugging Face",
  },
  {
    key: "infra",
    title: "Hosting, servers & security",
    body: "I set up, deploy and look after the servers, so your product stays online, fast and safe.",
    proof: "System admin for IIT Mandi's student server",
    tools: "Docker · AWS · Linux · Cloudflare",
  },
]

export const process = [
  { title: "Talk", body: "A short call. You explain the problem in plain words, and I ask the questions." },
  { title: "Plan", body: "A one-page plan: what we build first, how long it takes, and what success looks like." },
  { title: "Build", body: "I build in short rounds and show you a working version every week." },
  { title: "Launch", body: "I put it live: app stores, domain, hosting, analytics." },
  { title: "Look after", body: "Fixes, updates and new features once real users arrive." },
]

export type Project = {
  id: "myitihas" | "sciagent" | "customer" | "webspark" | "podclip"
  name: string
  kind: string
  when: string
  problem: string
  built: string
  result: string
  badge?: string
  tools: string
  link?: string
}

export const projects: Project[] = [
  {
    id: "myitihas",
    name: "MyItihas",
    kind: "Mobile app",
    when: "Dec 2025 – Feb 2026",
    problem: "A growing community app needed chat and social features, and someone to get it into the app stores.",
    built: "Private and group chat, sign-in, profiles and followers, plus the backend that stores and searches all of it.",
    result: "Built end to end and released to Google Play and the App Store by me.",
    badge: "Live on both stores",
    tools: "Flutter · Supabase",
  },
  {
    id: "sciagent",
    name: "SciAgent",
    kind: "AI research assistant",
    when: "2026",
    problem: "AI chatbots sound confident even when they are wrong. Researchers can't afford that.",
    built: "An assistant that searches scientific papers, checks each claim against the source, and says when the papers don't cover a question.",
    result: "Every answer cites its source, and it holds back correctly when unsure, scoring 100% on both in testing.",
    badge: "100% cited answers",
    tools: "Python · FAISS · LLM tool-calling",
    link: "https://github.com/Sachitbansal/researchAgent",
  },
  {
    id: "customer",
    name: "Customer Targeting",
    kind: "Live data system · Inter IIT Tech Meet 14.0",
    when: "2025",
    problem: "A bank wants to know which customers to reach out to while transactions are still coming in, not a week later.",
    built: "A live system that updates each customer's profile with every transaction and regroups customers as their behaviour shifts.",
    result: "Around 83% accuracy on live, constantly changing data.",
    badge: "Inter IIT 14.0",
    tools: "Pathway · NATS · Redis · online ML",
    link: "https://github.com/Sachitbansal/CustomerTargetting",
  },
  {
    id: "webspark",
    name: "Webspark",
    kind: "AI website builder",
    when: "2025",
    problem: "Getting a website made is slow and expensive for a small business.",
    built: "You describe the site in a sentence. AI agents design, build and publish it, then revise it from your feedback.",
    result: "Won 1st place at KrackHack 2025.",
    badge: "1st place",
    tools: "Python · AI agents · Next.js",
  },
  {
    id: "podclip",
    name: "PodClip",
    kind: "Content tool",
    when: "2025",
    problem: "Finding the best 30 seconds of a two-hour podcast takes hours of listening.",
    built: "A pipeline that transcribes each episode, tells the speakers apart, and scores every moment for emotion and energy.",
    result: "Clip suggestions ready to cut into Shorts and Reels.",
    tools: "Whisper · Hugging Face · Python",
    link: "https://github.com/Sachitbansal/PodClip",
  },
]

export const record = [
  {
    year: "2026",
    items: [
      { title: "1st place, KrackHack 3.0", where: "Google Developer Groups, IIT Mandi", win: true },
      { title: "1st place, Space Code 2026", where: "STAC astronomy club, IIT Mandi", win: true },
      { title: "Exchange semester, CS & AI", where: "Leibniz Universität Hannover, Germany" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "1st place, KrackHack 2.0", where: "Google Developer Groups, IIT Mandi", win: true },
      { title: "Google Cybersecurity Professional Certificate", where: "Google" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "All India Rank 9 of 15,000+", where: "Shaastra Juniors, IIT Madras" },
      { title: "1st place, Case Study Competition", where: "Shaastra Juniors, IIT Madras", win: true },
      { title: "1st place, robot sumo (Takeshi's Castle)", where: "Utkarsh, IIT Mandi", win: true },
    ],
  },
]

export const roles = [
  { title: "Flutter App Developer", org: "MyItihas", when: "Dec 2025 – Feb 2026", body: "Owned the app from features to store release." },
  { title: "System Administrator", org: "SAIC, IIT Mandi", when: "Current", body: "Run 50+ websites on the main student server for 3,000+ students and staff: deployments, domains, security." },
  { title: "Tutor", org: "PRAYAS 3.0", when: "", body: "Taught 100+ students hands-on Arduino and machine learning." },
  { title: "Core Team", org: "Kamand Prompt, programming club", when: "", body: "Ran a web development session for 500+ students." },
]

export const education = [
  { school: "Leibniz Universität Hannover", detail: "Exchange semester, Computer Science & AI", when: "Oct 2026 – Mar 2027" },
  { school: "IIT Mandi", detail: "B.Tech, General Engineering (AI & Robotics)", when: "2024 – present" },
]
