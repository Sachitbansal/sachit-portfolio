"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import { profile } from "@/lib/content"
import { Reveal } from "./motion"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked; the address stays visible and selectable */
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 px-4 pb-6 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-ink px-6 py-20 text-white sm:px-14 sm:py-24">
        <motion.div
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-flame/30 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-cobalt/30 blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <Reveal className="relative">
          <div className="label mb-4 text-flame">Let&apos;s work together</div>
          <h2 className="max-w-[14ch] font-display text-[clamp(40px,7vw,88px)] font-bold leading-[0.95] tracking-[-0.04em]">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg text-white/70">
            Tell me what you want to make, even if it is only a rough idea. I&apos;ll tell you honestly how I&apos;d build
            it and how long it would take.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Project%20idea`}
              className="rounded-full bg-flame px-7 py-4 font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Email me
            </a>
            <button
              onClick={copy}
              className="select-all rounded-full border border-white/20 px-6 py-4 font-mono text-sm text-white/80 transition-colors hover:border-white/60"
            >
              {copied ? "Copied ✓" : profile.email}
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-white/60">
            <span>Based in {profile.location} · working with teams anywhere</span>
            <div className="ml-auto flex gap-4">
              {[
                [profile.links.linkedin, Linkedin, "LinkedIn"],
                [profile.links.github, Github, "GitHub"],
                [profile.links.x, Twitter, "X"],
              ].map(([href, Icon, label]) => {
                const I = Icon as typeof Github
                return (
                  <a
                    key={label as string}
                    href={href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label as string}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-flame hover:text-flame"
                  >
                    <I size={17} />
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-2 py-8 text-xs text-muted">
        <span>© {new Date().getFullYear()} Sachit Bansal</span>
        <span>Designed and built by hand with Next.js and Three.js</span>
      </footer>
    </section>
  )
}
