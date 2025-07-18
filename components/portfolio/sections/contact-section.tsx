"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Download, Rocket, ArrowRight } from "lucide-react"

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sachitbansal2006@gmail.com",
      href: "mailto:sachitbansal2006@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9501006994",
      href: "tel:+919501006994",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 9501006994",
      href: "https://wa.me/919501006994",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gurgaon, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sachitbansal",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sachit-bansal/",
      label: "LinkedIn",
    },
    {
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com/sachitbansal",
      label: "Twitter",
    },
  ]

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

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.title === "WhatsApp" ? "_blank" : undefined}
                    rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-white/[0.08] backdrop-blur-xl rounded-lg border border-white/10 hover:bg-white/[0.12] transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mr-4">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Resume</h3>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white/[0.08] to-white/[0.05] backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Download My Resume</h4>
                    <p className="text-white/70">
                      Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
                    </p>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl"
                      asChild
                    >
                      <a href="/resume.pdf" download="Sachit_Bansal_Resume.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full bg-white/[0.08] backdrop-blur-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-300 border border-white/10"
                  >
                    <social.icon className="w-6 h-6 text-white/70 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-white/[0.08] to-white/[0.05] backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Let's Work Together</h4>
              <p className="text-white/70 mb-4">
                I'm currently available for freelance work and collaboration opportunities. Whether you have a project
                in mind or just want to connect, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  Available for projects
                </span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm border border-green-500/30">
                  Remote friendly
                </span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                  Open to internships
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.15] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Let's collaborate on innovative projects that push the boundaries of technology. From AI automation to
                full-stack development, I'm excited to work on challenging problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:sachitbansal2006@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-5 h-5" />
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://github.com/Sachitbansal"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium rounded-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  View My Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/60">
            © {new Date().getFullYear()} Sachit Bansal. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
