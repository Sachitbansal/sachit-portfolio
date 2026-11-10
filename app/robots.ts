import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// Search engines and AI assistants are all welcome: being quoted by ChatGPT, Claude,
// Perplexity and Gemini is the point of GEO.
export default function robots(): MetadataRoute.Robots {
  const ai = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
    "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "CCBot", "Bingbot",
  ]
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/_m.html"] }, ...ai.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
