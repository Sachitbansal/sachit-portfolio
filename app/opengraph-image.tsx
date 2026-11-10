import { ImageResponse } from "next/og"

// The preview card shown when the link is shared on LinkedIn, WhatsApp, X, Slack, etc.
export const alt = "Sachit Bansal: AI agents, automation & websites"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0b0e13", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 700 }}>
          <span>Sachit Bansal</span>
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#ff5a1f", marginLeft: -8, marginTop: 14 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 20, fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
            {["I", "turn", "ideas", "into", "AI", "agents,", "automations", "and", "websites."].map((w, i) => (
              <span key={i} style={{ color: w === "AI" || w === "agents," ? "#5b7cff" : "#fff" }}>{w}</span>
            ))}
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)" }}>IIT Mandi · 2× KrackHack champion · 50+ websites kept running</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["AI agents", "Automation", "Websites", "Cloud"].map((t) => (
            <div key={t} style={{ display: "flex", padding: "10px 22px", borderRadius: 999, border: "2px solid #222a36", fontSize: 24, color: "rgba(255,255,255,0.8)" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
