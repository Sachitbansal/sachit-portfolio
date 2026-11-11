import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sachit Bansal: AI agents, automation & web",
    short_name: "Sachit Bansal",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#f5f7fa",
    theme_color: "#f5f7fa",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
