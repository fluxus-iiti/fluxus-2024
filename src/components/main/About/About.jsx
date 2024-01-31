"use client";
import React from "react";
import VideoSection from "./VideoSection";
import TextSection from "./TextSection";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  // const spring = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const textX = useSpring(scrollYProgress, [0, 1], ["-100vw", "0vw"]);

  return (
    <div className="flex md:space-x-10 flex-col md:flex-row md:ml-40 items-center">
      <motion.div style={{ x: textX }}>
        <TextSection />
      </motion.div>
      <VideoSection />
    </div>
  );
};

export default About;
