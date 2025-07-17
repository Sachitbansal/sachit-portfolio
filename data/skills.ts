import { Code, Brain, Database, Cloud } from "lucide-react"

export interface SkillCategory {
  name: string
  icon: typeof Code
  skills: string[]
  color: string
  gradient: string
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Code,
    skills: ["Python", "HTML/CSS", "Dart", "JavaScript", "C++", "Solidity"],
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Frameworks & Tools",
    icon: Brain,
    skills: ["Flutter", "Firebase", "Next.js", "Flask", "LaTeX", "Android Studio"],
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "AI & Automation",
    icon: Database,
    skills: ["AI Agents", "Generative AI", "YOLO", "Python Automation", "Chatbots", "Machine Learning"],
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Platforms & Systems",
    icon: Cloud,
    skills: ["Windows", "Linux", "Visual Studio Code", "Raspberry Pi", "IoT Systems", "Cloud Services"],
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20",
  },
]
