"use client"

import type React from "react"
import { useState, useEffect } from "react"

export const TerminalAnimation: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  const lines = [
    "$ python webspark.py --initialize",
    "Loading AI agents...",
    "Connecting to Flutter framework...",
    "Firebase integration online ✓",
    "Raspberry Pi systems ready ✓",
    "Welcome to Sachit's Tech Lab",
  ]

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        if (currentChar < lines[currentLine].length) {
          setCurrentChar(currentChar + 1)
        } else {
          setCurrentLine(currentLine + 1)
          setCurrentChar(0)
        }
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, lines])

  return (
    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 font-mono text-sm border border-blue-500/30">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-white/60 ml-2">Tech Terminal</span>
      </div>
      <div className="space-y-2">
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="text-green-400">
            {index === currentLine ? line.slice(0, currentChar) : line}
            {index === currentLine && <span className="animate-pulse">|</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
