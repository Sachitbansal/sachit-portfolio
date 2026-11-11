import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f7fa",
        surface: "#ffffff",
        ink: "#101b2d",
        muted: "#526174",
        line: "#dce3ec",
        flame: "#377dff",
        cobalt: "#35c6d9",
        mint: "#12b07a",
        night: "#0a1220",
        "night-2": "#101b2d",
        "night-line": "#1f2d44",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
