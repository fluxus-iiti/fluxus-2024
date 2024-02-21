"use client";
import react, { use, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";

const AnimatedLetter = ({ letter, index, springScroll, flag }) => {
  const delay = useTransform(
    springScroll,
    flag
      ? [0, 0.3 - 0.001 * (11 - index), 0.6 + 0.001 * (11 - index), 1]
      : [0, 0.3 - 0.001 * (11 - index)],
    flag
      ? [`${20 + 10 * index}vh`, "0vh", "0vh", `${100 - 5 * index}vh`]
      : [`${20 + 10 * index}vh`, "0vh"]
    // [0, 0.3 - 0.001 * (11 - index)],
    // [`${20 + 10 * index}vh`, "0vh"]
  );

  if (letter === " ") {
    return (
      <motion.div key={index} style={{ y: delay, display: "inline-block" }}>
        &nbsp;
      </motion.div>
    );
  }

  return (
    <motion.div
      key={index}
      style={{ y: delay, display: "inline-block", fontFamily: "Azonix" }}
    >
      {letter}
    </motion.div>
  );
};

const MainText = () => {
  const ref = useRef(null);
  const [ width ] = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  const renderAnimatedLetters = (text) => {
    return text
      .split("")
      .map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter}
          index={index}
          springScroll={springScroll}
          flag={width > 1440}
        />
      ));
  };

  return (
    <motion.div className="w-full pt-48 intro overflow-hidden">
      <motion.div
        className="text-white text-center lg:text-[12rem] xl:text-[17rem] 2xl:text-[20rem] border-0 w-full xl:!my-[-120px] lg:!my-[-70px] !py-0 text-[36px] sm:text-[70px] sm:my-[-0px] font-azonix"
        ref={ref}
      >
        {renderAnimatedLetters("A CELESTIAL")}
      </motion.div>
      <div
        className="text-white text-center lg:text-[17rem] xl:text-[23rem] 2xl:text-[27rem] border-0 w-full xl:!my-[-100px] lg:!my-[-60px] my-[-20px] text-[50px] !py-0 sm:text-[100px] sm:my-[-40px] overflow-hidden font-azonix"
        ref={ref}
      >
        <div>{renderAnimatedLetters("EUPHORIA")}</div>
      </div>
    </motion.div>
  );
};

export default MainText;
