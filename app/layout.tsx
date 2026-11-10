import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] })
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] })

const description =
  "Developer from IIT Mandi who turns ideas into mobile apps, websites and AI tools. Shipped to the App Store and Google Play, 2× KrackHack champion, runs 50+ websites."

export const metadata: Metadata = {
  metadataBase: new URL("https://sachit-portfolio.vercel.app"),
  title: "Sachit Bansal: apps, websites & AI tools",
  description,
  openGraph: {
    title: "Sachit Bansal",
    description,
    url: "https://sachit-portfolio.vercel.app",
    siteName: "Sachit Bansal",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Sachit Bansal", description },
}

export const viewport: Viewport = { themeColor: "#eef0f3" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
