"use client";
import React, { useRef } from "react";
import IntroImage from "./IntroImage";
import IntroText from "./IntroText";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const IntroSection = () => {
  // for intro section 1
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const divX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["-40vw", "0vw", "-20vw"]
  );
  const divY = useTransform(scrollYProgress, [0.3, 0.9], ["0vh", "-20vh"]);

  return (
    <div className="flex md:space-x-10 flex-col md:flex-row items-center">
      <motion.div style={{ y: divY, x: divX }}>
        <IntroImage />
      </motion.div>
      <IntroText />
    </div>
  );
};

export default IntroSection;
