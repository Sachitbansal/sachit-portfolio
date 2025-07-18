"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalAnimation } from "../animations/terminal-animation"

export const HeroSection: React.FC = () => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
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
            <div className="h-4 w-4 text-blue-300">✨</div>
          </motion.div>
          <span className="text-sm font-medium text-white/80">IIT Mandi Student & Tech Innovator</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Single Line Name */}
        <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight" variants={fadeInUp}>
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
            Sachit Bansal
          </motion.span>
        </motion.h1>

        {/* Professional Info Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto max-w-2xl mb-12"
          style={{ margin: "10px auto 48px auto" }}
        >
          <div
            className="backdrop-blur-sm border rounded-lg"
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              padding: "20px",
              border: "2px solid rgba(100, 100, 100, 0.5)",
              lineHeight: "1.6",
            }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Software Engineer & AI/ML Enthusiast</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Building intelligent solutions and automating the future, one line of code at a time
            </p>
          </div>
        </motion.div>

        <motion.div className="max-w-md mx-auto mb-12" variants={fadeInUp}>
          <TerminalAnimation />
        </motion.div>

        {/* Social Links with View Work Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Sachitbansal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors duration-300 border border-white/10"
            >
              <Github className="w-6 h-6 text-white/80" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sachit-bansal/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors duration-300 border border-white/10"
            >
              <Linkedin className="w-6 h-6 text-white/80" />
            </motion.a>
            <motion.a
              href="mailto:sachitbansal2006@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors duration-300 border border-white/10"
            >
              <Mail className="w-6 h-6 text-white/80" />
            </motion.a>
            <motion.a
              href="https://wa.me/919501006994"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors duration-300 border border-white/10"
            >
              <MessageCircle className="w-6 h-6 text-white/80" />
            </motion.a>
          </div>
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
  )
}
