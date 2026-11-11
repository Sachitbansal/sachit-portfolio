"use client"

// One small live diagram per project, so a non-technical reader can *see* what it does.

import { useEffect, useState } from "react"
import type { Project } from "@/lib/content"

function Frame({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-night-line bg-night-2">
      <div className="flex flex-1 items-center justify-center p-6">{children}</div>
      <div className="border-t border-night-line px-5 py-3 font-mono text-[11px] text-white/50">{caption}</div>
    </div>
  )
}

function ChatPhone() {
  const msgs = [
    { me: false, w: "w-[70%]", t: "Joined the group 🙏" },
    { me: true, w: "w-[60%]", t: "Welcome! Story at 8?" },
    { me: false, w: "w-[55%]", t: "Count me in" },
    { me: true, w: "w-[66%]", t: "Sharing the link now" },
  ]
  return (
    <div className="flex items-center gap-6 sm:gap-8">
      <div className="relative h-[250px] w-[130px] shrink-0 rounded-[26px] border-[5px] border-[#24344e] bg-[#f5f7fa] p-2 shadow-2xl">
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-[#24344e]" />
        <div className="flex flex-col gap-1.5">
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`${m.w} ${m.me ? "self-end bg-flame text-white" : "self-start bg-[#e3e8f0] text-ink"} rounded-xl px-2 py-1 text-[8.5px] leading-tight`}
              style={{ animation: `bubble 6s ${i * 0.9}s infinite both` }}
            >
              {m.t}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {["Google Play", "App Store"].map((s) => (
          <div key={s} className="flex items-center gap-2 rounded-xl border border-night-line bg-night px-3 py-2 text-xs text-white">
            <span className="h-2 w-2 rounded-full bg-mint" style={{ animation: "pulse-ring 2s infinite" }} />
            Shipped to {s}
          </div>
        ))}
      </div>
    </div>
  )
}

function Flow() {
  const steps = ["Your question", "Finds papers", "Checks each claim", "Answer + sources"]
  const [a, setA] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setA((n) => (n + 1) % steps.length), 1100)
    return () => clearInterval(id)
  }, [steps.length])
  return (
    <div className="grid w-full max-w-[420px] grid-cols-2 gap-3">
      {steps.map((s, i) => (
        <div
          key={s}
          className={`relative rounded-xl border px-4 py-4 text-sm transition-all duration-500 ${
            i === a ? "border-cobalt bg-cobalt/15 text-white" : i < a ? "border-night-line bg-night text-white/80" : "border-night-line bg-night text-white/40"
          }`}
        >
          <div className="mb-1 font-mono text-[10px] text-white/40">step {i + 1}</div>
          {s}
          {i === 3 && (
            <div className="mt-2 flex gap-1">
              {["[1]", "[2]", "[3]"].map((c) => (
                <span key={c} className="rounded bg-cobalt/30 px-1 font-mono text-[10px] text-white">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Clusters() {
  const N = 36
  const centers = [
    [70, 70],
    [210, 60],
    [140, 160],
  ]
  const cols = ["var(--flame)", "var(--cobalt)", "var(--mint)"]
  const make = () =>
    Array.from({ length: N }, (_, i) => {
      const g = (i + Math.floor(Math.random() * 3) * (Math.random() < 0.15 ? 1 : 0)) % 3
      const [cx, cy] = centers[g]
      return { g, x: cx + (Math.random() - 0.5) * 70, y: cy + (Math.random() - 0.5) * 60 }
    })
  const [pts, setPts] = useState(make)
  useEffect(() => {
    const id = setInterval(() => setPts(make()), 1600)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="relative w-full max-w-[300px]">
      <svg viewBox="0 0 280 220" className="w-full">
        {centers.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="48" fill={cols[i]} opacity=".08" />
        ))}
        {pts.map((p, i) => (
          <circle
            key={i}
            r="5"
            cx="0"
            cy="0"
            fill={cols[p.g]}
            style={{ transform: `translate(${p.x}px, ${p.y}px)`, transition: "transform 1.2s cubic-bezier(.22,1,.36,1), fill .6s" }}
          />
        ))}
      </svg>
      <div className="absolute right-0 top-0 flex items-center gap-1.5 rounded-full bg-night px-2 py-1 font-mono text-[10px] text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" style={{ animation: "pulse-ring 1.5s infinite" }} />
        live
      </div>
    </div>
  )
}

function SiteBuilder() {
  return (
    <div className="w-full max-w-[380px]">
      <div className="mb-3 flex items-center gap-2 rounded-xl border border-night-line bg-night px-3 py-2.5 font-mono text-[11px] text-white/80">
        <span className="text-flame">›</span>
        <span className="inline-block overflow-hidden whitespace-nowrap" style={{ animation: "type 6s steps(40) infinite" }}>
          a bakery site with a menu and online orders
        </span>
      </div>
      <div className="rounded-xl bg-[#f5f6f8] p-3">
        {[
          "h-5 w-1/2 bg-ink",
          "h-2.5 w-3/4 bg-[#c9cfd8]",
          "h-16 w-full bg-flame/80",
          "grid",
        ].map((c, i) =>
          c === "grid" ? (
            <div key={i} className="mt-2 grid grid-cols-3 gap-2" style={{ animation: `build 6s ${1.8 + i * 0.4}s infinite both` }}>
              {[0, 1, 2].map((j) => (
                <div key={j} className="h-10 rounded bg-[#e3e7ee]" />
              ))}
            </div>
          ) : (
            <div key={i} className={`mt-2 rounded ${c}`} style={{ animation: `build 6s ${1.8 + i * 0.4}s infinite both` }} />
          ),
        )}
      </div>
    </div>
  )
}

function Wave() {
  const bars = 48
  return (
    <div className="w-full max-w-[400px]">
      <div className="flex h-28 items-center gap-[3px]">
        {Array.from({ length: bars }).map((_, i) => {
          const hot = (i > 12 && i < 20) || (i > 32 && i < 38)
          return (
            <div
              key={i}
              className={`flex-1 rounded-full ${hot ? "bg-flame" : "bg-white/20"}`}
              style={{
                height: `${30 + ((i * 37) % 70)}%`,
                animation: `wave ${1 + (i % 5) * 0.2}s ${i * 0.03}s ease-in-out infinite`,
              }}
            />
          )
        })}
      </div>
      <div className="mt-4 flex gap-2">
        {["12:40 · laughter peak", "47:05 · big reveal"].map((c) => (
          <span key={c} className="rounded-full bg-flame/15 px-2.5 py-1 font-mono text-[10px] text-flame">
            ✂ {c}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectVisual({ id }: { id: Project["id"] }) {
  switch (id) {
    case "sciagent":
      return <Frame caption="every claim is checked against a real paper before you see it"><Flow /></Frame>
    case "customer":
      return <Frame caption="customers regroup live as their spending changes"><Clusters /></Frame>
    case "webspark":
      return <Frame caption="one sentence in → a working website out"><SiteBuilder /></Frame>
    case "myitihas":
      return <Frame caption="chat, profiles and followers, released to both app stores"><ChatPhone /></Frame>
    case "podclip":
      return <Frame caption="the loudest, most emotional moments are marked for clipping"><Wave /></Frame>
  }
}
