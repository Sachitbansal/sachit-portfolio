"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["About", "#about"],
]

export function Nav() {
  const { scrollY } = useScroll()
  const [solid, setSolid] = useState(false)
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40))

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-300 ${
          solid ? "border-line bg-surface/80 shadow-[0_8px_30px_rgba(13,16,22,0.06)] backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#top" className="font-display text-[17px] font-bold tracking-tight">
          Sachit Bansal<span className="text-flame">.</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-ink">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  )
}
