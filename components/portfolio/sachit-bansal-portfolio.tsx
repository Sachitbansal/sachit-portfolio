"use client"

import type React from "react"
import { useRef } from "react"

import { ThreadsBackground } from "./background/threads-background"
import { Navigation } from "./navigation/navigation"
import { HeroSection } from "./sections/hero-section"
import { AboutSection } from "./sections/about-section"
import { ProjectsSection } from "./sections/projects-section"
import { SkillsSection } from "./sections/skills-section"
import { AchievementsSection } from "./sections/achievements-section"
import { ContactSection } from "./sections/contact-section"

const SachitBansalPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative bg-black text-white overflow-hidden">
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
