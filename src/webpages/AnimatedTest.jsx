"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./styles.css";

const ThemeText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  return (
    <div className="scrollDiv w-full flex flex-col" ref={ref}>
      <div
        className="w-full text-center flex word-wrap align-items-center justify-center ofh"
        style={{ border: "1px solid red" }}
      >
        {["T", "H", "E", "M", "E", " ", "T", "E", "S", "T"].map(
          (letter, index) => {
            const delay = useTransform(
              scrollYProgress,
              [0, 0.6, 1],
              [`${100 + 10 * index}vh`, "-10vh", `${20 + 2 * (10 - index)}vh`]
            );
            if (index === 5) {
              return (
                <motion.div key={index} style={{ y: delay }}>
                  <div className="scrollText text-white">&nbsp;</div>
                </motion.div>
              );
            }
            return (
              <motion.div key={index} style={{ y: delay }}>
                <div className="scrollText text-white">{letter}</div>
              </motion.div>
            );
          }
        )}
      </div>
      <div
        className="m-2 w-full text-center align-middle"
        style={{ border: "1px solid red", height: "10%" }}
      >
        Dive into the world of Technology
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  const divX = useTransform(scrollYProgress, [0, 0.3], ["-40vw", "0vw"]);

  const div2X = useTransform(scrollYProgress, [0, 0.3], ["60vw", "0vw"]);
  const div2Y = useTransform(scrollYProgress, [0, 0.3], ["10vh", "0vh"]);
  const div2Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const div2Scale = useTransform(scrollYProgress, [0, 0.3], [2, 1]);

  return (
    <div className="scrollDiv w-full flex ofh" style={{marginTop: '10rem'}} ref={ref}>
      <motion.div style={{ width: "40%", x: divX }} viewport={{ root: ref }}>
        <div style={{ border: "1px solid red", height: "10vh" }}>Hello</div>
      </motion.div>
      <motion.div style={{ width: "60%", x: div2X, opacity: div2Opacity, scale: div2Scale, y: div2Y }} viewport={{ root: ref }}>
        <div style={{ border: "1px solid red", height: "10vh" }}>Hello</div>
      </motion.div>
    </div>
  );
};

const AnimatedTest = () => {
  return (
    <div>
      <div className="contentDiv h-screen"></div>
      <ThemeText />
      <AboutSection />
      <div className="contentDiv h-screen"></div>
    </div>
  );
};

export default AnimatedTest;
