export interface Project {
  title: string
  description: string
  tech: string[]
  status: string
  impact: string
  gradient: string
  details: string
}

export const projects: Project[] = [
  {
    title: "Webspark - Project Web Builder",
    description:
      "A revolutionary website that can create and deploy websites based on user prompts and improve them based on corrections provided.",
    tech: ["Python", "AI Agents", "Next.js", "Generative AI", "Automation"],
    status: "Production",
    impact: "1st Place KrackHack'25 Winner",
    gradient: "from-blue-500/20 to-purple-500/20",
    details:
      "Utilizes Python automation and AI Agents for backend processing while the frontend is built using Next.js. This project won 1st place in KrackHack'25, the flagship hackathon of Google Developer Groups IIT Mandi.",
  },
  {
    title: "Lost and Found - Campus Solution",
    description:
      "Developed a comprehensive Flutter web app - LnF Pitstop, providing a complete solution for all lost and found items within the campus area.",
    tech: ["Flutter", "Firebase", "Android Studio", "Dart"],
    status: "Live",
    impact: "Campus-wide deployment",
    gradient: "from-green-500/20 to-blue-500/20",
    details:
      "Built using Flutter framework coded in Dart language with Firebase handling all cloud-based services for data storage. Provides seamless experience for students to report and find lost items.",
  },
  {
    title: "SLTS - Smart Laundry Tracking System",
    description:
      "An innovative IoT solution combining hardware and software to notify completion of washing in hostel washing machines.",
    tech: ["Raspberry Pi", "YOLO", "Flask", "Flutter", "Firebase"],
    status: "Active",
    impact: "Hostel automation success",
    gradient: "from-purple-500/20 to-pink-500/20",
    details:
      "YOLO model runs on images captured by Raspberry Pi at regular intervals to determine if the machine is done cleaning and updates this info to Firebase with timestamp using Flask server.",
  },
]
