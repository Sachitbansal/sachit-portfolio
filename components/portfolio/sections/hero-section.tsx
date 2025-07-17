"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Github, Sparkles } from "lucide-react"
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
            <Sparkles className="h-4 w-4 text-blue-300" />
          </motion.div>
          <span className="text-sm font-medium text-white/80">✨ IIT Mandi Student & Tech Innovator</span>
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
          B.Tech General Engineering student at IIT Mandi, specializing in Python automation, AI agents, and full-stack
          development. Building innovative solutions with cutting-edge technology.
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
  )
}
