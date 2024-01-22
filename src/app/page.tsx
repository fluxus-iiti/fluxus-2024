// import About from '@/components/About'
// import Hero from '@/components/Hero'
import Technicals from '@/components/Technicals'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
import Wow from '@/components/Wow'
import { url } from 'inspector'
import { motion } from 'framer-motion'

// Importing main website components
import About from '@/components/Main/About/About'
import IntroSection from '@/components/Main/IntroSection/IntroSection'

export default function Home() {
  return (
    <>
      {/* <Hero/>
      <About/>
      <Technicals/>
      <Cards/>
      <Wow/>
      <Footer/> */}

      {/* Main Website Components */}
      <About/>
      <IntroSection/>
    </>
  )
}
