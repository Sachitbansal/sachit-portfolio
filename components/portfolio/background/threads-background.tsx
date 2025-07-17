"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export const ThreadsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const threads: Array<{ x: number; y: number; dx: number; dy: number; length: number; opacity: number }> = []
    const threadCount = 12

    for (let i = 0; i < threadCount; i++) {
      threads.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        length: Math.random() * 200 + 100,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      threads.forEach((thread) => {
        thread.x += thread.dx
        thread.y += thread.dy

        if (thread.x < 0 || thread.x > canvas.width) thread.dx *= -1
        if (thread.y < 0 || thread.y > canvas.height) thread.dy *= -1

        const gradient = ctx.createLinearGradient(
          thread.x,
          thread.y,
          thread.x + thread.length * Math.cos(Date.now() * 0.001 + thread.x * 0.01),
          thread.y + thread.length * Math.sin(Date.now() * 0.001 + thread.y * 0.01),
        )
        gradient.addColorStop(0, `rgba(59, 130, 246, ${thread.opacity})`)
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${thread.opacity * 0.7})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.moveTo(thread.x, thread.y)

        const endX = thread.x + thread.length * Math.cos(Date.now() * 0.001 + thread.x * 0.01)
        const endY = thread.y + thread.length * Math.sin(Date.now() * 0.001 + thread.y * 0.01)

        const controlX = thread.x + (endX - thread.x) * 0.5 + Math.sin(Date.now() * 0.002) * 20
        const controlY = thread.y + (endY - thread.y) * 0.5 + Math.cos(Date.now() * 0.002) * 20

        ctx.quadraticCurveTo(controlX, controlY, endX, endY)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
