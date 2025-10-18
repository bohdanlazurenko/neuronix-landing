import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuronix - Autonomous IT Solutions',
  description: 'Leading autonomous IT company providing innovative solutions for the digital age.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}