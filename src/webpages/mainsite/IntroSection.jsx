"use client";
import React, { useRef } from "react";
import IntroImage from "../../components/main/IntroSection/IntroImage";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const IntroSection = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  // useMotionValueEvent(scrollYProgress, "change", (val) => {
  //   console.log(val);
  // });

  // const springScroll = useSpring(scrollYProgress, {
  //   stiffness: 400,
  //   damping: 90,
  // });
  // const textX = useTransform(springScroll, [1, 0.5], ["-50vw", "0vw"]);
  // const imgX = useTransform(springScroll, [1, 0.5], ["-100vw", "0vw"]);
  // const imgScale = useTransform(springScroll, [1, 0.5], [4, 1]);
  // const imgOpacity = useTransform(springScroll, [1, 0.5], [0.5, 1]);

  return (
    <div className="flex flex-col md:flex-row items-center md:mt-36 mt-24 mb-6">
      <div className="md:flex hidden basis-1/2 lg:basis-3/5">
        <IntroImage />
      </div>
      <div className="flex basis-1/2 lg:basis-2/5">
        <div className="px-10 mx-10 md:mx-0">
          <div className="font-mate text-6xl decoration-2 lg:text-8xl lg:leading-[70px] underline lg:ml-10 text-center md:text-left">
            Introducing <br />
            11th version of <br />
            Fluxus
          </div>
          <br />
          <div className="font-metrophobic text-3xl lg:leading-[35px] lg:p-10 lg:pr-48 md:text-left text-center">
            Fluxus, the annual techno-cultural fest of IIT Indore, is a dynamic
            convergence of innovation, creativity, and cultural expression.
            Through a kaleidoscope of events spanning technology, arts, and
            entertainment, Fluxus offers a vibrant platform for students to
            showcase their talents, exchange ideas, and celebrate the spirit of
            ingenuity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
