import { ImageResponse } from "next/og"
import { OgCard } from "@/lib/og-card"

// The preview card shown when the link is shared on LinkedIn, WhatsApp, X, Slack, etc.
export const alt = "Sachit Bansal: AI Engineer, agentic AI & intelligent automation"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    <OgCard />,
    size,
  )
}
