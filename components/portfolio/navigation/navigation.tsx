"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const Navigation: React.FC = () => {
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
