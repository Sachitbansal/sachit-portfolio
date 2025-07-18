"use client"

import type React from "react"
import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"

export const SkillsSection: React.FC = () => {
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive expertise across multiple technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative backdrop-blur-xl rounded-2xl border-2 p-8 group"
              style={{
                borderImage: `linear-gradient(135deg, ${category.color.replace("text-", "")}, transparent) 1`,
                borderColor: category.color.includes("blue")
                  ? "#60a5fa"
                  : category.color.includes("green")
                    ? "#4ade80"
                    : category.color.includes("purple")
                      ? "#a855f7"
                      : "#fb7185",
              }}
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
                    <span className="text-white/80 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
