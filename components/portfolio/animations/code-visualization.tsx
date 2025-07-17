"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Brain, Database, Bot, Cpu } from "lucide-react"

export const CodeVisualization: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30"
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(147, 51, 234, 0.3)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-white/80 text-sm">Python Automation</span>
        </div>
        <div className="space-y-1 font-mono text-xs">
          <div className="text-purple-300">def webspark_builder():</div>
          <div className="text-blue-300 ml-4">generate_website()</div>
          <div className="text-green-300 ml-4">deploy_to_cloud()</div>
          <div className="text-yellow-300 ml-4">return success</div>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30">
        <h4 className="text-xl font-bold mb-4 text-white">Core Expertise</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-white/80">AI Agents</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-green-400" />
            <span className="text-white/80">Flutter Apps</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-white/80">Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-orange-400" />
            <span className="text-white/80">IoT Systems</span>
          </div>
        </div>
      </div>
    </div>
  )
}
