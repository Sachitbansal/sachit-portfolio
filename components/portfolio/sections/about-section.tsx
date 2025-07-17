"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CodeVisualization } from "../animations/code-visualization"

export const AboutSection: React.FC = () => {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">About Me</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Engineering student passionate about technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6 text-white">My Journey</h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                I'm currently pursuing B.Tech in General Engineering at the prestigious Indian Institute of Technology,
                Mandi. With a strong CGPA of 8.33, I'm passionate about leveraging technology to solve real-world
                problems.
              </p>
              <p>
                My expertise spans across Python automation, AI agents, Flutter development, and hardware integration.
                I've successfully built multiple projects that combine software and hardware solutions, from web
                builders to IoT systems.
              </p>
              <p>
                As a hackathon winner and active contributor to the tech community, I'm always exploring new
                technologies and pushing the boundaries of what's possible with code.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <CodeVisualization />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
