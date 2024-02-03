import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BurgerToCross from '@/components/main/hero/BurgerToCross'
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
      <body className={inter.className}>
      
        {children}
        </body>
    </html>
  )
}
