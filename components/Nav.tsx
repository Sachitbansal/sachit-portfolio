"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

const links = [
  ["Why me", "#why"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Journey", "#journey"],
  ["Process", "#process"],
]

export function Nav() {
  const { scrollY } = useScroll()
  const [solid, setSolid] = useState(false)
  const [dark, setDark] = useState(false)
  useMotionValueEvent(scrollY, "change", (v) => {
    setSolid(v > 40)
    const hit = document.elementsFromPoint(window.innerWidth / 2, 40).some((el) => el.closest("[data-dark]"))
    setDark(hit)
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-300 ${
          !solid
            ? "border-transparent"
            : dark
              ? "border-night-line bg-night/75 text-white backdrop-blur-xl"
              : "border-line bg-surface/80 shadow-[0_8px_30px_rgba(16,27,45,0.06)] backdrop-blur-xl"
        }`}
      >
        <a href="#top" className="font-display text-[17px] font-bold tracking-tight">
          Sachit Bansal<span className="text-flame">.</span>
        </a>
        <div className={`hidden items-center gap-7 text-sm md:flex ${dark && solid ? "text-white/60" : "text-muted"}`}>
          {links.map(([l, h]) => (
            <a key={h} href={h} className={`transition-colors ${dark && solid ? "hover:text-white" : "hover:text-ink"}`}>
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className={`rounded-full px-4 py-2 text-sm font-medium transition-transform ${dark && solid ? "bg-flame text-white" : "bg-ink text-white"} hover:scale-[1.03] active:scale-95`}
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  )
}
