import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xaidez - Your Online Market',
  description: 'Shop Jammu and Kashmir\'s delicacies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50`} >
      <NextTopLoader color="#d97006" />
        <Navbar />
        <main className='min-h-screen'>  {/* Should I put h-screen here or not */}
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  )
}