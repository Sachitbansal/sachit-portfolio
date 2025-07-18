export interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  status: string
  impact: string
  gradient: string
  details: string
  sourceUrl?: string
  liveUrl?: string
  features: string[]
}

export const projects: Project[] = [
  {
    title: "Webspark - Project Web Builder",
    description:
      "A revolutionary website that can create and deploy websites based on user prompts and improve them based on corrections provided.",
    longDescription:
      "Webspark is an innovative AI-powered web development platform that revolutionizes how websites are created. Using advanced natural language processing and generative AI, it interprets user requirements and automatically generates complete, functional websites.",
    tech: ["Python", "AI Agents", "Next.js", "Generative AI", "Automation", "OpenAI API"],
    status: "Production",
    impact: "1st Place KrackHack'25 Winner",
    gradient: "from-blue-500/20 to-purple-500/20",
    details:
      "Utilizes Python automation and AI Agents for backend processing while the frontend is built using Next.js.",
    sourceUrl: "https://github.com/Sachitbansal/webspark",
    liveUrl: "https://webspark-demo.vercel.app",
    features: [
      "AI-powered website generation from natural language prompts",
      "Real-time code correction and improvement suggestions",
      "Automated deployment pipeline with cloud integration",
   //   "Interactive UI for seamless user experience",
    //  "Support for multiple web frameworks and technologies",
    ],
  },
  {
    title: "Lost and Found - Campus Solution",
    description:
      "Developed a comprehensive Flutter web app - LnF Pitstop, providing a complete solution for all lost and found items within the campus area.",
    longDescription:
      "LnF Pitstop is a comprehensive digital solution designed to streamline the lost and found process within educational campuses. Built with Flutter for cross-platform compatibility, it provides an intuitive interface for students and staff.",
    tech: ["Flutter", "Firebase", "Android Studio", "Dart", "Cloud Firestore", "Authentication"],
    status: "Live",
    impact: "Campus-wide deployment",
    gradient: "from-green-500/20 to-blue-500/20",
    details:
      "Built using Flutter framework coded in Dart language with Firebase handling all cloud-based services for data storage.",
    sourceUrl: "https://github.com/Sachitbansal/lost-and-found",
    liveUrl: "https://lnf-pitstop.web.app",
    features: [
      "Real-time item reporting and search functionality",
      "Image upload and recognition for better item identification",
      "Push notifications for item matches and updates",
   //   "User authentication and profile management",
  //    "Admin dashboard for monitoring and management",
    ],
  },
  {
    title: "SLTS - Smart Laundry Tracking System",
    description:
      "An innovative IoT solution combining hardware and software to notify completion of washing in hostel washing machines.",
    longDescription:
      "SLTS represents the perfect fusion of IoT hardware and intelligent software, designed to solve the common problem of laundry management in hostel environments.",
    tech: ["Raspberry Pi", "YOLO", "Flask", "Flutter", "Firebase", "Computer Vision", "IoT"],
    status: "Active",
    impact: "Hostel automation success",
    gradient: "from-purple-500/20 to-pink-500/20",
    details:
      "YOLO model runs on images captured by Raspberry Pi at regular intervals to determine if the machine is done cleaning and updates this info to Firebase with timestamp using Flask server.",
    sourceUrl: "https://github.com/Sachitbansal/smart-laundry-system",
    features: [
      "Computer vision-based washing machine status detection",
      "Real-time notifications via mobile app and web dashboard",
      "Historical usage analytics and reporting",
    //  "Multi-machine monitoring from single Raspberry Pi",
    //  "Integration with hostel management systems",
    ],
  },
]
