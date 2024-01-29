'use client';
import About from '@/components/events/About'
// import Hero from '@/components/events/Hero'
import Technicals from '@/components/events/Technicals'
import Footer from '@/components/events/Footer'
import Cards from '@/components/events/Cards'
import Wow from '@/components/events/Wow'
import AnimatedTest from '@/webpages/AnimatedTest'
import Hero from '@/webpages/Hero'
import Navbar from '@/components/main/hero/Navbar'
import { url } from 'inspector'
import Header from '@/webpages/Header'

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
  Variants
} from "framer-motion";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const sectionVariants: Variants = {
  inView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  outView: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const divsVariants: Variants = {
  inView: {
    opacity: 1,
    scale: [null, 1.1, 1],
    transition: {
      duration: 0.5
    }
  },
  outView: {
    scale: 1,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};

// import AnimatedTest from '@/webpages/AnimatedTest'
export default function Home() {
  const [containerSize, setContainerSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollY } = useScroll();
  const transform = useTransform(
    scrollY,
    [0, containerSize],
    [0, -containerSize]
  );

  // add spring animation
  const spring = useSpring(transform, { stiffness: 10, mass: 1 });

  useEffect(() => {
    const container = containerRef.current;
    const body = document.body;
    const size = container.getBoundingClientRect().height;

    // set the size of the body to be the sized of the container
    // its needed to keep a scrollbar since the container has a fixed position
    // see CSS
    body.style.height = `${size}px`;
    setContainerSize(size);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (Array.isArray(entry.contentBoxSize)) {
          setContainerSize(entry.contentRect.height);
        } else {
          setContainerSize(entry.contentRect.height);
        }
      }
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <Hero/>
      <About/>
      <Technicals/>
      <Cards/>
      <Wow/>
      <Footer/> */}
      {/* <AnimatedTest/> */}
      {/* <Navbar/>
      <Hero/> */}
      

<motion.div>
      <motion.div ref={containerRef} style={{ y: spring }} className="App">
        <Header/>
      <AnimatedTest/>
      </motion.div>
    </motion.div>

    </>
  )
}
