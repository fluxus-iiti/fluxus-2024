import About from '@/components/About'
import Hero from '@/components/Hero'
import Technicals from '@/components/Technicals'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
import Wow from '@/components/Wow'
import { url } from 'inspector'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Technicals/>
      <Cards/>
      <Wow/>
      <Footer/>
    </>
  )
}
