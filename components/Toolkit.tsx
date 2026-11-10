"use client"

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import dynamic from "next/dynamic"
import { SceneBoundary } from "./motion"
import { useRef, useState } from "react"
import {
  siAmazonwebservices, siClaude, siCloudflare, siDjango, siDocker, siFastapi, siFlutter, siGit, siGithub,
  siGithubactions, siGooglegemini, siHuggingface, siLangchain, siLinux, siNatsdotio, siNextdotjs, siOpenai,
  siPostgresql, siPython, siPytorch, siReact, siRedis, siSupabase, siTailwindcss, siTypescript, siVercel,
} from "simple-icons"

const Universe = dynamic(() => import("./scene/Universe"), { ssr: false })

type Icon = { title: string; path: string }

const stages: { title: string; kicker: string; body: string; logos: Icon[] }[] = [
  {
    kicker: "AI & agents",
    title: "A brain for your business.",
    body: "Assistants that read, reason and answer from your own documents, and agents that search, decide and act on their own.",
    logos: [siOpenai, siClaude, siGooglegemini, siHuggingface, siLangchain, siPytorch],
  },
  {
    kicker: "Automation & data",
    title: "Work that runs itself.",
    body: "Workflows that watch for events, process data the moment it arrives, and trigger the next step without anyone pressing a button.",
    logos: [siPython, siRedis, siNatsdotio, siPostgresql, siFastapi],
  },
  {
    kicker: "Websites & apps",
    title: "A front door people enjoy using.",
    body: "Fast websites, dashboards and internal tools, plus the occasional mobile app when the job needs one.",
    logos: [siNextdotjs, siReact, siTypescript, siTailwindcss, siDjango, siFlutter],
  },
  {
    kicker: "Cloud & hosting",
    title: "Online, fast and safe.",
    body: "Everything deployed on the cloud, monitored and kept secure, the same way I run 50+ sites for IIT Mandi.",
    logos: [siAmazonwebservices, siDocker, siLinux, siCloudflare, siVercel, siGithubactions],
  },
  {
    kicker: "Since 2018",
    title: "100+ projects, one galaxy.",
    body: "Every shape above comes from real work: hackathon wins, live systems, and tools people use every day.",
    logos: [siGithub, siGit, siPython, siSupabase],
  },
]

export function Toolkit() {
  const ref = useRef<HTMLElement>(null)
  const stage = useRef(0)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const s = Math.min(stages.length - 1, Math.max(0, v * (stages.length - 1) * 1.08))
    stage.current = s
    const r = Math.round(s)
    if (r !== active) setActive(r)
  })
  const st = stages[active]

  return (
    <section ref={ref} id="toolkit" data-dark className="relative h-[480vh] rounded-t-[32px] bg-night text-white sm:rounded-t-[56px]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(47,91,255,0.14),transparent_60%)]" />
        <SceneBoundary>
          <Universe stage={stage} stages={stages.map((s) => s.logos)} />
        </SceneBoundary>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-night via-night/90 to-transparent lg:hidden" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-10 pt-24 sm:px-6 lg:justify-center lg:pb-0">
          <div className="mb-4 flex items-center gap-3 lg:mb-6">
            <span className="label text-flame">My toolkit</span>
            <div className="flex gap-1.5 sm:hidden">
              {stages.map((s, i) => (
                <span key={s.kicker} className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-5 bg-flame" : "w-1.5 bg-white/25"}`} />
              ))}
            </div>
          </div>
          <div className="min-h-[290px] max-w-[440px] sm:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3 font-mono text-xs text-white/50">
                  0{active + 1} / 0{stages.length} · {st.kicker}
                </div>
                <h2 className="font-display text-[clamp(30px,4.6vw,56px)] font-bold leading-[1.02] tracking-[-0.03em]">{st.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65 sm:mt-4 sm:text-lg">{st.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {st.logos.map((l) => (
                    <li key={l.title} className="flex items-center gap-2 rounded-full border border-night-line bg-night-2/80 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                        <path d={l.path} />
                      </svg>
                      {l.title}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* stage rail */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 sm:flex sm:right-8">
          {stages.map((s, i) => (
            <div key={s.kicker} className="flex items-center justify-end gap-3">
              <span className={`font-mono text-[10px] uppercase tracking-widest transition-opacity ${i === active ? "text-white opacity-100" : "opacity-0"}`}>
                {s.kicker}
              </span>
              <span className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-flame" : "w-1.5 bg-white/25"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
