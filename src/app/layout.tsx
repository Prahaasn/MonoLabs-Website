import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Mono Labs | Hardware & Firmware Innovation',
  description: 'Expert hardware product development, firmware engineering, and FPGA design services. Transform your ideas into production-ready electronics.',
  keywords: ['hardware design', 'firmware development', 'FPGA', 'embedded systems', 'product development', 'PCB design', 'electronics'],
  authors: [{ name: 'Mono Labs' }],
  openGraph: {
    title: 'Mono Labs | Hardware & Firmware Innovation',
    description: 'Transform your ideas into production-ready electronics. Expert hardware design, firmware development, and FPGA solutions.',
    url: 'https://monolabs.co.in',
    siteName: 'Mono Labs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mono Labs | Hardware & Firmware Innovation',
    description: 'Transform your ideas into production-ready electronics.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
