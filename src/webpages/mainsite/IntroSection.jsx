"use client";
import React, { useRef } from "react";
import IntroImage from "../../components/main/IntroSection/IntroImage";
import IntroText from "../../components/main/IntroSection/IntroText";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const IntroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    console.log(val);
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const textX = useTransform(springScroll, [1, 0.5], ["-50vw", "0vw"]);
  const imgX = useTransform(springScroll, [1, 0.5], ["-100vw", "0vw"]);
  const imgScale = useTransform(springScroll, [1, 0.5], [4, 1]);
  const imgOpacity = useTransform(springScroll, [1, 0.5], [0.5, 1]);

  return (
    <div className="flex md:space-x-10 flex-col md:flex-row items-center mb-[10vh] overflow-hidden mt-[-20vh]">
      <motion.div
        ref={ref}
        style={{ scale: imgScale, opacity: imgOpacity, x: imgX }}
        className="flex flex-1"
      >
        <IntroImage />
      </motion.div>
      <motion.div
        ref={ref}
        style={{opacity: imgOpacity, x: textX }}
        className="flex flex-1"
      >
        <IntroText />
      </motion.div>
    </div>
  );
};

export default IntroSection;
