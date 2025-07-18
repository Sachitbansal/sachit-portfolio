"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Rocket, Activity, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-xl rounded-2xl border border-white/10 p-8 group hover:border-white/20 transition-all`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-6">
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

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

              <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>

              <p className="text-white/60 mb-6 leading-relaxed text-sm">{project.longDescription}</p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white/70 text-sm flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                    asChild
                  >
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
