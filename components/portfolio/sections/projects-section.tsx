"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Rocket, Activity, ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"

export const ProjectsSection: React.FC = () => {
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
              Technical Projects
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Innovative solutions combining AI, automation, and cutting-edge technology
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
  )
}
