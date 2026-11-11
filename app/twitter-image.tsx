import { ImageResponse } from "next/og"

// The preview card shown when the link is shared on LinkedIn, WhatsApp, X, Slack, etc.
export const alt = "Sachit Bansal: AI Engineer, agentic AI & intelligent automation"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0a1220", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 700 }}>
          <span>Sachit Bansal</span>
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#377dff", marginLeft: -8, marginTop: 14 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 20, fontSize: 66, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
            {["I", "build", "AI", "agents", "&", "automations", "that", "turn", "complex", "problems", "into", "working", "solutions."].map((w, i) => (
              <span key={i} style={{ color: i >= 1 && i <= 5 && i !== 1 ? "#35c6d9" : "#fff" }}>{w}</span>
            ))}
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)" }}>AI Engineer · IIT Mandi · Leibniz University Hannover · 2× KrackHack champion</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Agentic AI", "LLM apps", "RAG", "Automation", "Python"].map((t) => (
            <div key={t} style={{ display: "flex", padding: "10px 22px", borderRadius: 999, border: "2px solid #1f2d44", fontSize: 24, color: "rgba(255,255,255,0.8)" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
