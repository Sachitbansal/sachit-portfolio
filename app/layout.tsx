import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google"
import { education, profile, services } from "@/lib/content"
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site"
import "./globals.css"

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] })
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] })

const description =
  "Developer from IIT Mandi building AI agents, workflow automations and websites. 2× KrackHack champion, runs 50+ websites on the cloud."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Sachit Bansal: AI agents, automation & web", template: "%s · Sachit Bansal" },
  description,
  applicationName: "Sachit Bansal",
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Sachit Bansal", "AI agent developer", "AI assistant developer", "workflow automation", "RAG chatbot",
    "LLM developer", "freelance developer", "Next.js developer", "AWS", "IIT Mandi", "Hannover", "Werkstudent",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Sachit Bansal: AI agents, automation & web",
    description,
    url: SITE_URL,
    siteName: "Sachit Bansal",
    locale: "en_US",
    type: "profile",
    firstName: "Sachit",
    lastName: "Bansal",
  },
  twitter: { card: "summary_large_image", title: "Sachit Bansal: AI agents, automation & web", description, creator: "@sachitbansal20" },
  other: { "llms-txt": `${SITE_URL}/llms.txt` },
}

// Structured data: tells Google and AI assistants who this is, what they offer and where else they are.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: `mailto:${profile.email}`,
      jobTitle: "AI agents & automation developer",
      description: SITE_DESCRIPTION,
      address: { "@type": "PostalAddress", addressLocality: "Hannover", addressCountry: "DE" },
      alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
      knowsAbout: ["AI agents", "Large language models", "Retrieval-augmented generation", "Workflow automation", "Web development", "Next.js", "Python", "AWS", "Cloud hosting"],
      award: ["1st place, KrackHack 3.0 (2026)", "1st place, KrackHack 2.0 (2025)", "1st place, Space Code 2026", "All India Rank 9, Shaastra Juniors, IIT Madras"],
      sameAs: [profile.links.linkedin, profile.links.github, profile.links.x],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Sachit Bansal: AI agents, automation & web",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.body } })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sachit Bansal",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
}

export const viewport: Viewport = { themeColor: "#eef0f3" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  )
}
