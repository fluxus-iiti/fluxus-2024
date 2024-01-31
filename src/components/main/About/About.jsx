"use client";
import React, { useEffect } from "react";
import VideoSection from "./VideoSection";
import TextSection from "./TextSection";
import { motion, spring, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
  });
  const textX = useTransform(springScroll, [0, 1], ["-100vw", "0vw"]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="flex md:space-x-10 flex-col md:flex-row md:ml-40 items-center">
      <motion.div style={{ x: textX }} ref={ref}>
        <TextSection />
      </motion.div>
      <VideoSection />
    </div>
  );
};

export default About;
