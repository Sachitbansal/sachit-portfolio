"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { achievements, certifications } from "@/data/achievements"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export const AchievementsSection: React.FC = () => {
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
              Achievements & Certifications
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Recognition, victories, and professional certifications across competitions and learning platforms
          </p>
        </motion.div>

        {/* Achievements Subsection */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
                Awards & Achievements
              </span>
            </h3>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Competition victories and recognition across hackathons and technical challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div key={index} className="min-h-[14rem] list-none" variants={fadeInUp}>
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/20 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black/40 backdrop-blur-xl p-6 shadow-sm">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-white/10 p-2">
                          <achievement.icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div className="text-right">
                          <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">
                            {achievement.category}
                          </span>
                          <p className="text-xs text-white/60 mt-1">{achievement.year}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white leading-tight">{achievement.title}</h4>
                        <p className="text-yellow-300 text-sm font-medium">{achievement.event}</p>
                        <p className="text-white/80 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Subsection */}
        <motion.div variants={fadeInUp}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
                Professional Certifications
              </span>
            </h3>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise and commitment to continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certification, index) => (
              <motion.div key={index} className="min-h-[12rem] list-none" variants={fadeInUp}>
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/20 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-black/40 backdrop-blur-xl p-6 shadow-sm">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-white/10 p-2">
                          <certification.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-white/60">{certification.year}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white leading-tight">{certification.title}</h4>
                        <p className="text-green-300 text-sm font-medium">{certification.issuer}</p>
                        <p className="text-white/80 text-sm leading-relaxed">{certification.description}</p>
                      </div>

                      {certification.credentialUrl && (
                        <div className="mt-4">
                          <a
                            href={certification.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Credential
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
