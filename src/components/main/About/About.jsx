"use client";
import React from "react";
import VideoSection from "./VideoSection";
import TextSection from "./TextSection";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.33", "1 0"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
  });
  const textX = useTransform(scrollYProgress, [0, 0.2], ["-100vw", "0vw"]);

  return (
    <div className="flex md:space-x-10 flex-col md:flex-row md:ml-40 items-center" ref={ref}>
      <motion.div style={{ x: textX }}>
        <TextSection />
      </motion.div>
      <VideoSection />
    </div>
  );
};

export default About;
