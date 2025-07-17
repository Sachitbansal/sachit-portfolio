import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sachit Bansal',
  description: 'Crafting AI-powered, secure, and scalable solutions — blending deep tech with sharp product and marketing acumen.',
  openGraph: {
    title: 'Sachit Bansal',
    description: 'Crafting AI-powered, secure, and scalable solutions — blending deep tech with sharp product and marketing acumen.',
    url: 'https://sachitbansal.sbssdigital.com/', // replace with your actual domain
    siteName: 'Sachit Bansal',
    images: [
      {
        url: '/placeholder-user.jpg', // path to your image in the public folder
        width: 630,
        height: 630,
        alt: 'Sachit Bansal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sachit Bansal',
    description: 'Crafting AI-powered, secure, and scalable solutions — blending deep tech with sharp product and marketing acumen.',
    images: ['/placeholder-user.jpg'], // path to your image in the public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
