// Shared share-card design for opengraph-image and twitter-image (WhatsApp, LinkedIn, X, Slack...).
export function OgCard() {
  const words = ["I", "build", "AI", "agents", "&", "automations", "that", "turn", "complex", "problems", "into", "working", "solutions."]
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#0a1220", color: "#fff", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", fontSize: 30, fontWeight: 700 }}>
        <span>Sachit Bansal</span>
        <div style={{ width: 12, height: 12, borderRadius: 99, background: "#377dff", marginLeft: 4, marginTop: 14 }} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", columnGap: 18, fontSize: 58, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
        {words.map((w, i) => (
          <span key={i} style={{ color: i >= 2 && i <= 5 ? "#35c6d9" : "#fff" }}>{w}</span>
        ))}
      </div>

      {/* the USP: hand-coded since before the agentic era */}
      <div style={{ display: "flex", alignItems: "center", gap: 36, padding: "26px 34px", borderRadius: 28, background: "#101b2d", border: "2px solid #1f2d44" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 84, fontWeight: 800, color: "#377dff", letterSpacing: -3, lineHeight: 1 }}>14</span>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.85)", lineHeight: 1.2, maxWidth: 150 }}>started coding</span>
        </div>
        <div style={{ width: 2, height: 70, background: "#1f2d44" }} />
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 84, fontWeight: 800, color: "#377dff", letterSpacing: -3, lineHeight: 1 }}>16</span>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.85)", lineHeight: 1.2, maxWidth: 230 }}>first Android app on the Play Store</span>
        </div>
        <div style={{ width: 2, height: 70, background: "#1f2d44" }} />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 26, lineHeight: 1.25 }}>
          <span style={{ color: "#35c6d9", fontWeight: 700 }}>Hand-coded,</span>
          <span style={{ color: "rgba(255,255,255,0.85)" }}>before the agentic era.</span>
        </div>
      </div>
    </div>
  )
}
