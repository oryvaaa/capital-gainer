import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Capital Gainer | Expert Market Research & Trading Insights',
  description: 'Capital Gainer delivers professional market research and data-driven trading insights for investors. NISM-Registered research analyst providing equity, options, futures, and commodities trading guidance.',
  keywords: ['market research', 'trading insights', 'stock market', 'investment analysis', 'NISM registered'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
