import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#eef0f3",
        surface: "#ffffff",
        ink: "#0d1016",
        muted: "#5a6371",
        line: "#d9dee6",
        flame: "#ff5a1f",
        cobalt: "#2f5bff",
        mint: "#12b07a",
        night: "#0b0e13",
        "night-2": "#131820",
        "night-line": "#222a36",
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
