"use client";
import React from "react";
import Header from "@/webpages/mainsite/Header";
import About from "@/webpages/mainsite/About";
import IntroSection from "@/webpages/mainsite/IntroSection";
import Footer from "@/components/events/Footer";
import Day1 from "@/webpages/mainsite/Day1";
import Day2 from "@/webpages/mainsite/Day2";
import Day3 from "@/webpages/mainsite/Day3";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import BurgerToCross from "@/components/main/hero/BurgerToCross";
import Modal from "react-modal";
import Image from "next/image";
import artist from "../../public/images/Hero/artist.jpg";
import NeonButton from "@/components/main/hero/NeonButton";
import Link from "next/link";
const customStyles = {
  overlay: {
    position: "fixed",
    zIndex: 1020,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    background: "transparent",
    overflow: "hidden",

    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
  },
};

// const sectionVariants: Variants = {
//   inView: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   outView: {
//     transition: {
//       staggerChildren: 0.1,
//       staggerDirection: -1,
//     },
//   },
// };

// const divsVariants: Variants = {
//   inView: {
//     opacity: 1,
//     scale: [null, 1.1, 1],
//     transition: {
//       duration: 0.5,
//     },
//   },
//   outView: {
//     scale: 1,
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// function AnimationInView({children}: {children?: ReactNode;}) {
//   const { ref, inView } = useInView({
//     root: null,
//     threshold: 0.2,
//     rootMargin: "250px 0px -250px 0px",
//     delay: 100
//   });

//   return (
//     <motion.section
//       variants={sectionVariants}
//       animate={inView ? "inView" : "outView"}
//       initial="outView"
//       style={{ "--grad": 20 } as any}
//       ref={ref}
//     >
//       {Array.from({ length: 20 }, (_, k) => (
//         <motion.div
//           style={{ "--l": `${50 + k}%` } as any}
//           variants={divsVariants}
//           key={k}
//         >
//           {children}
//         </motion.div>
//       ))}
//     </motion.section>
//   );
// }

// import AnimatedTest from '@/webpages/AnimatedTest'
export default function Main() {
  // const [containerSize, setContainerSize] = useState(0);
  // const containerRef = useRef<HTMLDivElement>(null!);
  // const { scrollY } = useScroll();
  // const transform = useTransform(
  //   scrollY,
  //   [0, containerSize],
  //   [0, -containerSize]
  // );

  // // add spring animation
  // const spring = useSpring(transform, { stiffness: 10, mass: 1 });

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const body = document.body;
  //   const size = container.getBoundingClientRect().height;

  //   // set the size of the body to be the sized of the container
  //   // its needed to keep a scrollbar since the container has a fixed position
  //   // see CSS
  //   body.style.height = `${size}px`;
  //   setContainerSize(size);
  // }, []);

  // useLayoutEffect(() => {
  //   const container = containerRef.current;
  //   const observer = new ResizeObserver((entries) => {
  //     for (const entry of entries) {
  //       if (Array.isArray(entry.contentBoxSize)) {
  //         setContainerSize(entry.contentRect.height);
  //       } else {
  //         setContainerSize(entry.contentRect.height);
  //       }
  //     }
  //   });

  //   observer.observe(container);

  //   return () => observer.disconnect();
  // }, []);
  const [modalIsOpen, setIsOpen] = React.useState(true);
  return (
    <>
      {/* <motion.div>
        <motion.div ref={containerRef} style={{ y: spring }} className="App"> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Image
          src={artist}
          placeholder="blur"
          className="w-[400px]"
          alt="artist photo"
        />
        <Link
          className="text-2xl"
          target={"_blank"}
          href="https://forms.gle/oETzssE9asLVme8Y8"
        >
          <div className="flex justify-center">
            <NeonButton />
          </div>
        </Link>
      </Modal>
      <Header />
      <About />
      <IntroSection />
      {/* <Day1 />
      <Day2 />
      <Day3 /> */}
      <Footer />

      {/* <About />
          <IntroSection /> */}
      {/* </motion.div>
      </motion.div> */}
    </>
  );
}
