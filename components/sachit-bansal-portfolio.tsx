"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Brain,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Rocket,
  Database,
  Cpu,
  Bot,
  Activity,
  Cloud,
} from "lucide-react"

interface SkillCategory {
  name: string
  icon: typeof Code
  skills: string[]
  color: string
  gradient: string
}

interface Project {
  title: string
  description: string
  tech: string[]
  status: string
  impact: string
  gradient: string
}

interface Achievement {
  title: string
  event: string
  year: string
  description: string
  icon: typeof Award
}

interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
  results: string[]
}

const ThreadsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const threads: Array<{ x: number; y: number; dx: number; dy: number; length: number; opacity: number }> = []
    const threadCount = 12

    for (let i = 0; i < threadCount; i++) {
      threads.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        length: Math.random() * 200 + 100,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      threads.forEach((thread) => {
        thread.x += thread.dx
        thread.y += thread.dy

        if (thread.x < 0 || thread.x > canvas.width) thread.dx *= -1
        if (thread.y < 0 || thread.y > canvas.height) thread.dy *= -1

        // Draw curved thread lines
        const gradient = ctx.createLinearGradient(
          thread.x,
          thread.y,
          thread.x + thread.length * Math.cos(Date.now() * 0.001 + thread.x * 0.01),
          thread.y + thread.length * Math.sin(Date.now() * 0.001 + thread.y * 0.01),
        )
        gradient.addColorStop(0, `rgba(59, 130, 246, ${thread.opacity})`)
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${thread.opacity * 0.7})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.moveTo(thread.x, thread.y)

        const endX = thread.x + thread.length * Math.cos(Date.now() * 0.001 + thread.x * 0.01)
        const endY = thread.y + thread.length * Math.sin(Date.now() * 0.001 + thread.y * 0.01)

        const controlX = thread.x + (endX - thread.x) * 0.5 + Math.sin(Date.now() * 0.002) * 20
        const controlY = thread.y + (endY - thread.y) * 0.5 + Math.cos(Date.now() * 0.002) * 20

        ctx.quadraticCurveTo(controlX, controlY, endX, endY)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}

const TerminalAnimation: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  const lines = [
    "$ python ai_agent.py --initialize",
    "Loading neural networks...",
    "Connecting to LLM endpoints...",
    "RAG system online ✓",
    "Automation workflows ready ✓",
    "Welcome to Sachit's AI Lab",
  ]

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        if (currentChar < lines[currentLine].length) {
          setCurrentChar(currentChar + 1)
        } else {
          setCurrentLine(currentLine + 1)
          setCurrentChar(0)
        }
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, lines])

  return (
    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 font-mono text-sm border border-blue-500/30">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-white/60 ml-2">AI Terminal</span>
      </div>
      <div className="space-y-2">
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="text-green-400">
            {index === currentLine ? line.slice(0, currentChar) : line}
            {index === currentLine && <span className="animate-pulse">|</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

const CodeVisualization: React.FC = () => {
  return (
    <div className="relative">
      <motion.div
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30"
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(147, 51, 234, 0.3)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-white/80 text-sm">Python Automation</span>
        </div>
        <div className="space-y-1 font-mono text-xs">
          <div className="text-purple-300">def ai_agent():</div>
          <div className="text-blue-300 ml-4">process_data()</div>
          <div className="text-green-300 ml-4">execute_workflow()</div>
          <div className="text-yellow-300 ml-4">return success</div>
        </div>
      </motion.div>
    </div>
  )
}

const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face"],
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Automation & Scripting",
    icon: Bot,
    skills: ["Python", "Selenium", "Beautiful Soup", "Pandas", "NumPy", "Requests"],
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "RAG & LLM Systems",
    icon: Database,
    skills: ["LangChain", "Vector Databases", "Embeddings", "Prompt Engineering", "Fine-tuning"],
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "API Development"],
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

const projects: Project[] = [
  {
    title: "AI Voice Agent Platform",
    description:
      "Built an intelligent voice agent system using advanced NLP and speech recognition for automated customer service.",
    tech: ["Python", "OpenAI", "Speech-to-Text", "FastAPI"],
    status: "Production",
    impact: "40% reduction in response time",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "RAG-Powered Knowledge System",
    description:
      "Developed a retrieval-augmented generation system for enterprise knowledge management with vector search.",
    tech: ["LangChain", "Pinecone", "OpenAI", "Streamlit"],
    status: "Live",
    impact: "300% faster information retrieval",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "Social Media Automation Suite",
    description:
      "Created comprehensive automation tools for social media management with AI-powered content generation.",
    tech: ["Python", "APIs", "Selenium", "GPT-4"],
    status: "Active",
    impact: "80% time savings",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
]

const achievements: Achievement[] = [
  {
    title: "1st Place - AI Innovation Hackathon",
    event: "TechCrunch Disrupt",
    year: "2024",
    description: "Won first place for developing an AI-powered automation platform",
    icon: Award,
  },
  {
    title: "Best AI Solution Award",
    event: "Delhi Tech Summit",
    year: "2023",
    description: "Recognized for outstanding contribution to AI automation",
    icon: Star,
  },
  {
    title: "Innovation Excellence",
    event: "Gurgaon Startup Fest",
    year: "2023",
    description: "Awarded for breakthrough in LLM integration",
    icon: Rocket,
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "CTO, TechFlow Solutions",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sachit's AI automation solutions transformed our entire operation. The Python scripts he developed saved us countless hours and improved our efficiency dramatically.",
    results: ["300% efficiency increase", "50% cost reduction", "24/7 automation"],
  },
  {
    name: "Rahul Gupta",
    role: "Founder, DataDrive Inc",
    company: "DataDrive",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The RAG system Sachit built for us is revolutionary. Our knowledge management became seamless and our team productivity increased significantly.",
    results: ["Instant knowledge access", "90% faster queries", "Seamless integration"],
  },
]

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto bg-black/20 backdrop-blur-md rounded-full border border-white/10 px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div className="text-white font-bold text-lg" whileHover={{ scale: 1.05 }}>
            Sachit Bansal
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Skills", id: "skills" },
              { label: "Achievements", id: "achievements" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const SachitBansalPortfolio: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div ref={containerRef} className="relative bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <div className="w-full h-full rounded-full bg-blue-400 flex items-center justify-center">
          <Brain className="w-3 h-3" />
        </div>
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Threads Background */}
      <ThreadsBackground />

      {/* Digital Identity Hub (Hero) */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20" />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-blue-500/30 backdrop-blur-sm mb-8"
            variants={fadeInUp}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-blue-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">✨ AI Automation Specialist</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight" variants={fadeInUp}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Sachit</span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Bansal
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-12"
            variants={fadeInUp}
          >
            Python Automation & AI Agent Specialist crafting intelligent solutions with RAG systems, LLM integration,
            and cutting-edge automation workflows.
          </motion.p>

          <motion.div className="max-w-md mx-auto mb-12" variants={fadeInUp}>
            <TerminalAnimation />
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-6" variants={fadeInUp}>
            <motion.a
              href="mailto:sachitbansal2006@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="https://github.com/Sachitbansal"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Learning Journey (About + Education) */}
      <section id="about" className="relative py-32 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Learning Journey
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Continuous evolution in AI, automation, and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6 text-white">About Me</h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  I'm a passionate Python automation and AI agent specialist based in Gurgaon, India. My expertise lies
                  in developing intelligent automation solutions that bridge the gap between complex AI technologies and
                  practical business applications.
                </p>
                <p>
                  With deep knowledge in RAG systems, LLM integration, and workflow automation, I create solutions that
                  not only solve problems but anticipate future needs. My approach combines technical excellence with
                  innovative thinking.
                </p>
                <p>
                  From hackathon victories to production-ready AI systems, I'm committed to pushing the boundaries of
                  what's possible with artificial intelligence and automation.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-white/60 text-sm">Location</span>
                  </div>
                  <span className="text-white font-medium">Gurgaon, India</span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-white/60 text-sm">Phone</span>
                  </div>
                  <span className="text-white font-medium">+91 9501006994</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CodeVisualization />

              <div className="mt-8 space-y-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30">
                  <h4 className="text-xl font-bold mb-4 text-white">Core Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">AI Agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-green-400" />
                      <span className="text-white/80">RAG Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-purple-400" />
                      <span className="text-white/80">Automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-orange-400" />
                      <span className="text-white/80">LLM Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AI Innovation Lab (Projects) */}
      <section id="projects" className="relative py-32 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
                AI Innovation Lab
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Cutting-edge projects showcasing the power of AI automation and intelligent systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-xl rounded-2xl border border-white/10 p-6 group hover:border-white/20 transition-all`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Activity className="w-4 h-4 text-white/40" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400 font-medium">{project.impact}</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Stack (Skills) */}
      <section id="skills" className="relative py-32 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                Technical Stack
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Advanced technologies powering intelligent automation solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${category.gradient} backdrop-blur-xl rounded-2xl border border-white/10 p-8 group`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 bg-white/10 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievement Network */}
      <section id="achievements" className="relative py-32 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Achievement Network
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Recognition and victories in the AI and automation space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6 text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-blue-300 text-sm mb-1">{achievement.event}</p>
                <p className="text-white/60 text-sm mb-4">{achievement.year}</p>
                <p className="text-white/80 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Collaboration Matrix (Contact) */}
      <section id="contact" className="relative py-32 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                Collaboration Matrix
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Let's connect and build the future of AI automation together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              href="mailto:sachitbansal2006@gmail.com"
              className="group bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-red-500/30 p-6 text-center hover:border-red-400/50 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Mail className="w-8 h-8 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-white/60 text-sm">sachitbansal2006@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/sachit-bansal/"
              className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6 text-center hover:border-blue-400/50 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-white/60 text-sm">Professional Network</p>
            </motion.a>

            <motion.a
              href="https://github.com/Sachitbansal"
              className="group bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-xl rounded-2xl border border-gray-500/30 p-6 text-center hover:border-gray-400/50 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Github className="w-8 h-8 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-white/60 text-sm">Code Repository</p>
            </motion.a>

            <motion.div
              className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl border border-green-500/30 p-6 text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <p className="text-white/60 text-sm">+91 9501006994</p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.15] p-8"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Future?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI automation and intelligent agents can transform your business. From concept to
              deployment, I'll help you build solutions that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:sachitbansal2006@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Sachit_Bansal_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default SachitBansalPortfolio
