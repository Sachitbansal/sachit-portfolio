"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

import { ThreadsBackground } from "./background/threads-background"
import { Navigation } from "./navigation/navigation"
import { HeroSection } from "./sections/hero-section"
import { AboutSection } from "./sections/about-section"
import { ProjectsSection } from "./sections/projects-section"
import { SkillsSection } from "./sections/skills-section"
import { AchievementsSection } from "./sections/achievements-section"
import { ContactSection } from "./sections/contact-section"

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

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}

export default SachitBansalPortfolio
