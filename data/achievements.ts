import { Award, Star, Trophy, Shield, Medal, Target } from "lucide-react"

export interface Achievement {
  title: string
  event: string
  year: string
  description: string
  icon: typeof Award
  category: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
  description: string
  icon: typeof Shield
  credentialUrl?: string
}

export const achievements: Achievement[] = [
  {
    title: "1st Place - KrackHack'25",
    event: "Google Developer Groups IIT Mandi",
    year: "2025",
    description: "Won first place in the flagship hackathon with Webspark project on GenAI track involving AI agents",
    icon: Trophy,
    category: "Hackathon",
  },
  {
    title: "1st Position - Takeshi's Castle",
    event: "Utkarsh 2024 (IIT Mandi Techfest)",
    year: "2024",
    description:
      "Secured first position in robotics competition where teams created sumo wrestling robots and competed",
    icon: Award,
    category: "Robotics",
  },
  {
    title: "AIR 9 - Shaastra Juniors Individual Championship",
    event: "IIT Madras Techfest",
    year: "2024",
    description: "Secured All India Rank 9 among 15,000+ participants in Individual Championship",
    icon: Star,
    category: "Competition",
  },
  {
    title: "1st Position - Case Study Competition",
    event: "Shaastra Juniors (IIT Madras)",
    year: "2024",
    description: "Won first position in the Case Study Competition conducted during Shaastra Juniors",
    icon: Medal,
    category: "Case Study",
  },
  {
    title: "8th Position - Computational Agriculture",
    event: "IIT Bombay Techfest",
    year: "2024",
    description: "Bagged 8th position in Computational Agriculture Competition held during IIT Bombay Techfest",
    icon: Target,
    category: "Competition",
  },
]

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google via Coursera",
    year: "2024",
    description:
      "Comprehensive certification covering cybersecurity fundamentals, network security, and ethical hacking practices",
    icon: Shield,
    credentialUrl: "https://coursera.org/verify/professional-cert/example",
  },
]
