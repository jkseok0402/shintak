import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '스마트탁구클럽',
  description: '스마트탁구클럽 게임관리',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  )
}
