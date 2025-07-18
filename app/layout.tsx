import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sachit Bansal',
  description: 'IITian | Building with Agentic AI, LLMs & Pipelines | Product Solutions & Innovations | Blend of Tech, Marketing & Leadership | Solving Real-World Problems with Scalable Impact',
  openGraph: {
    title: 'Sachit Bansal',
    description: 'IITian | Building with Agentic AI, LLMs & Pipelines | Product Solutions & Innovations | Blend of Tech, Marketing & Leadership | Solving Real-World Problems with Scalable Impact',
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
    description: 'IITian | Building with Agentic AI, LLMs & Pipelines | Product Solutions & Innovations | Blend of Tech, Marketing & Leadership | Solving Real-World Problems with Scalable Impact',
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
