import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/main/hero/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fluxus \'24',
  description: 'Fluxus | IIT Indore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="">
        <div className='z-[-1] '>
          <Navbar />
        </div>
        <div className=''>
          {children}
        </div>
      </body>
    </html>
  )
}
