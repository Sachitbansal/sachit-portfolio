"use client"

import { track } from "@vercel/analytics"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { siX } from "simple-icons"
import { useState } from "react"
import { profile } from "@/lib/content"
import { Reveal } from "./motion"

function XLogo({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size - 2} height={size - 2} fill="currentColor" aria-hidden="true">
      <path d={siX.path} />
    </svg>
  )
}

const topics = ["AI assistant / agent", "Workflow automation", "AI-powered product", "Deployment & infrastructure", "Something else"]

/** No backend yet: the form composes an email in the visitor's mail app, so nothing is lost or stored elsewhere. */
function ProjectForm() {
  const [topic, setTopic] = useState(topics[0])
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")
  const [sent, setSent] = useState(false)
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Project: ${topic}${name ? ` (${name})` : ""}`
    const body = `${msg}\n\n${name ? `From: ${name}` : ""}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    track("enquiry_submitted", { topic })
  }
  const field = "w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-flame"
  return (
    <form onSubmit={submit} className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-6">
      <div className="label text-[11px] text-white/50">What do you want to build?</div>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => setTopic(t)}
            aria-pressed={t === topic}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${t === topic ? "border-flame bg-flame text-white" : "border-white/15 text-white/70 hover:border-white/40"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <label className="sr-only" htmlFor="cf-name">Your name</label>
      <input id="cf-name" className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      <label className="sr-only" htmlFor="cf-msg">The problem</label>
      <textarea
        id="cf-msg"
        required
        rows={4}
        className={`${field} resize-none`}
        placeholder="The problem you want to solve, in plain words. A rough idea is fine."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button type="submit" className="mt-1 rounded-full bg-flame px-6 py-3.5 font-medium text-white transition-transform hover:scale-[1.02] active:scale-95">
        {sent ? "Opening your email app…" : "Start a conversation →"}
      </button>
      <p className="text-center text-[11px] text-white/40">Opens your email app with the message ready to send.</p>
    </form>
  )
}

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
    <section id="contact" className="scroll-mt-16 px-4 pb-6 pt-16 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-white sm:rounded-[40px] sm:px-14 sm:py-24">
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
        <Reveal className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="label mb-4 text-flame">Let&apos;s work together</div>
            <h2 className="max-w-[14ch] font-display text-[clamp(40px,6vw,76px)] font-bold leading-[0.98] tracking-[-0.04em]">
              Have a problem worth solving?
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg text-white/70">
              Maybe you want to automate a repetitive workflow, build an AI assistant, create a new AI-powered product or
              bring intelligence into an existing application. Let&apos;s explore the problem and figure out what we can
              build.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}?subject=Project%20idea`}
                onClick={() => track("cta_click", { where: "contact_email" })}
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:border-white/60"
              >
                Email me
              </a>
              <button
                onClick={copy}
                className="max-w-full select-all break-all rounded-full border border-white/20 px-5 py-3 text-left font-mono text-[13px] text-white/80 transition-colors hover:border-white/60"
              >
                {copied ? "Copied ✓" : profile.email}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-white/60">
              <span>{profile.location} · available for remote collaboration internationally</span>
              <div className="flex gap-3">
                {[
                  [profile.links.linkedin, Linkedin, "LinkedIn"],
                  [profile.links.github, Github, "GitHub"],
                  [profile.links.x, XLogo, "X"],
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
          </div>
          <ProjectForm />
        </Reveal>
      </div>
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-2 py-8 text-xs text-muted">
        <span>© {new Date().getFullYear()} Sachit Bansal</span>
        <span>Designed and built by hand with Next.js and Three.js</span>
      </footer>
    </section>
  )
}
