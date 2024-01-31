"use client";
import React from "react";
import VideoSection from "./VideoSection";
import TextSection from "./TextSection";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect } from "react";

const About = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  //   if (!inView) {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);
  const { scrollYProgress } = useScroll({
    offset: ["end end", "start start"],
  });
  const divX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["-40vw", "0vw", "-20vw"]
  );
  const divY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["0vh", "0vh", "20vh"]
  );
  const div2X = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["20vw", "0vw", "-40vw"]
  );
  const div2Y = useTransform(scrollYProgress, [0, 0.3], ["0vh", "20vh"]);
  const div2Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const div2Scale = useTransform(scrollYProgress, [0, 0.3], [2, 1]);

  return (
    <motion.div className="flex md:space-x-10 flex-col md:flex-row md:ml-40 items-center">
      <motion.div
        style={{ x: divX, y: divY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 2.5,
          type: "spring",
          damping: 60,
          mass: 0.5,
          stiffness: 50,
        }}
      >
        <TextSection />
      </motion.div>
      <motion.div
        style={{
          x: div2X,
          opacity: div2Opacity,
          scale: div2Scale,
          y: div2Y,
        }}
      >
        <VideoSection />
      </motion.div>
    </motion.div>
  );
};

export default About;
