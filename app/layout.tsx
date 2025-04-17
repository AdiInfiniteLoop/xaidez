import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader'


export const metadata: Metadata = {
  title: 'Xaidez - Your Online Market',
  description: 'Shop Jammu and Kashmir\'s delicacies',
}

const montserrat = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${montserrat.className} bg-amber-50`}>
      <NextTopLoader color="#d97006" />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </body>

    </html>
  )
}