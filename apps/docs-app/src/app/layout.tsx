import type { Metadata } from 'next'
import { Outfit, Tajawal } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap'
})

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Tagaddod Design System - Developer Guide',
  description: 'Comprehensive integration guide for the Tagaddod Design System with AI-powered development tools',
  keywords: 'design system, react, components, ai, cursor, claude, development',
  authors: [{ name: 'Tagaddod Design Team' }],
  openGraph: {
    title: 'Tagaddod Design System - Developer Guide',
    description: 'AI-powered development with the Tagaddod Design System',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${tajawal.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
