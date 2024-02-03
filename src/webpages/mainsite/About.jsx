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
    offset: ["end end", "start start"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const textX = useTransform(springScroll, [0, 0.7], ["-100vw", "0vw"]);
  const imgX = useTransform(springScroll, [0, 0.7], ["-40vw", "0vw"]);
  const imgScale = useTransform(springScroll, [0, 0.7], [4, 1]);
  const imgOpacity = useTransform(springScroll, [0, 0.7], [0.5, 1]);

  return (
    <div className="flex md:space-x-12 flex-col md:flex-row md:ml-40 items-center overflow-hidden">
      {/* <motion.div style={{ x: textX, opacity: springScroll }} ref={ref} className="flex flex-1"> */}
      <div className="text-6xl md:text-7xl lg:text-[30px] md:pr-10 my-16 md:my-0 p-5 m-5">
        Embark on a cosmic journey as Fluxus IIT Indore presents <br /> &apos;A
        Celestial Euphoria&apos; a theme that transcends boundaries and merges
        technology with culture. Explore the interstellar blend of innovation
        and creativity at our annual techno-cultural fest.
      </div>
      {/* </motion.div>
      <motion.div */}
      {/* style={{ x: imgX, scale: imgScale, opacity: imgOpacity }}
        ref={ref}
        className="flex justify-center flex-1"
      > */}
      <Image src={AboutImg} alt="About Video Here" />
      {/* </motion.div> */}
    </div>
  );
};

export default About;
