"use client";
import React, { useRef } from "react";
import VideoSection from "../../components/main/About/VideoSection";
import TextSection from "../../components/main/About/TextSection";
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
  const textX = useTransform(scrollYProgress, [0, 0.7], ["-100vw", "0vw"]);
  const imgX = useTransform(scrollYProgress, [0, 0.7], ["-40vw", "0vw"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.7], [4, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [0.5, 1]);
  

  return (
    <div className="flex md:space-x-10 flex-col md:flex-row md:ml-40 items-center overflow-hidden">
      <motion.div style={{ x: textX }} ref={ref}>
        <TextSection />
      </motion.div>
      <motion.div style={{ x: imgX, scale: imgScale, opacity: imgOpacity }} ref={ref}>
        <VideoSection />
      </motion.div>
    </div>
  );
};

export default About;
