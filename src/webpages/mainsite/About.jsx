"use client";
import React, { useRef } from "react";
import Image from "next/image";
import AboutImg from "../../../public/images/Main/About/AboutImg.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const textX = useTransform(springScroll, [0, 0.7], ["-100vw", "0vw"]);
  const imgX = useTransform(springScroll, [0, 0.7], ["-40vw", "0vw"]);
  const imgScale = useTransform(springScroll, [0, 0.7], [4, 1]);
  const imgOpacity = useTransform(springScroll, [0, 0.7], [0.2, 1]);

  return (
    <div
      className="flex lg:space-x-12 flex-col md:flex-row items-center overflow-hidden md:my-10"
      ref={ref}
    >
      <div className="text-4xl md:text-3xl lg:text-5xl lg:ml-40 md:pr-10 md:my-16 my-8 md:my-0 mx-10 p-5 m-5 lg:leading-loose md:leading-[3.5rem] underline text-center md:text-left basis-1/3">
        <motion.div style={{ x: textX, opacity: springScroll }}>
          Embark on a cosmic journey as Fluxus IIT Indore presents &apos;A
          Celestial Euphoria&apos; a theme that transcends boundaries and merges
          technology with culture. Explore the interstellar blend of innovation
          and creativity at our annual techno-cultural fest.
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: imgOpacity, x: imgX, scale: imgScale }}
        className="flex basis-2/3"
      >
        {/* <div className="flex lg:basis-6/8"> */}
        <Image src={AboutImg} alt="About Video Here" />
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default About;
