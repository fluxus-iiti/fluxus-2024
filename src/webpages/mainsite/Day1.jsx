"use client";

import { React, useRef } from "react";
import Carousel from "../../components/main/EventSection/Day_1/Carousel";
import i1 from "../../../public/images/Day1/pngwing15.png";
import i2 from "../../../public/images/Day1/pngwing16.png";
import i3 from "../../../public/images/Day1/human.jpg";
import Detail from "../../components/main/EventSection/Day_1/Detail";
import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  spring,
} from "framer-motion";

export default function Day1() {
  const Images = [i1, i2, i3];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 120,
  });

  const day_1X = useTransform(springScroll, [0.03, 0.3, 0.7, 1], ["50vw", "0vw", "0vw", "-100vw"]);
  const realmTextX = useTransform(springScroll, [0.15, 0.3], ["0vw", "-50vw"]);
  const realmTextY = useTransform(springScroll, [0.15, 0.3], ["0vh", "-20vh"]);
  const fluxusText = useTransform(springScroll, [0.15, 0.3], ["0vh", "-20vh"]);
  const fluxusTextX = useTransform(springScroll, [0.7, 1], ["0vw", "-100vw"]);
  // const day_1Y = useTransform(springScroll, [0,1], ["-10vh","-15vh"])
  // const day_2Y =
  return (
    <>
      <div className="hidden md:block relative z-10">
        <motion.div style={{ x: realmTextX, y: realmTextY }}>
          <p className="text-white text-9xl font-serif absolute leading-[90px] p-24 -mt-10 z-10">
            Entering the <br />
            realm of ...
            <br />
          </p>
        </motion.div>
        <div className="hidden lg:block lg:flex-initial lg:w-96">
          <motion.div style={{ y: fluxusText, x: fluxusTextX }}>
            <p className="relative text-white transform rotate-90 text-[150px] top-[40vh] z-10">
              FLUXUS&apos;24
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="my-20 lg:mt-[-20rem] relative z-10"
        ref={ref}
        style={{ x: day_1X }}
      >
        <div className="flex flex-col lg:flex-row justify-center mx-auto p-6 w-full h-max">
          <div className="flex-initial">
            <div className="md:border-t border-white my-4 mt-7 w-auto"></div>
            <div className="lg:flex flex-row items-center">
              <p className=" lg:absolute text-center text-white transform lg:rotate-90 lg:text-[5rem] lg:left-[550px] xl:text-[80px] text-[5rem] font-bold">
                Day 1
              </p>
                <Carousel images={Images} />
            </div>
            <div className="hidden lg:block">
              <div className="border-t border-white my-4 mt-7 w-auto"></div>
              <Carousel images={Images} />
              <div className="border-t border-white my-4 mt-7 w-auto "></div>
              <Carousel images={Images} />
            </div>
            <div className="border-t border-white md: my-8 "></div>
          </div>
          <div className="flex-initial flex justify-center">
            <div className="flex-1 flex flex-wrap justify-center lg:justify-end w-fit ">
              <Detail highlights={["Workshops", "Guest Lectures", "Technical Exhibition", "Cultural Night"]}/>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-white w-[90vw] mx-auto mt-10" />
      </motion.div>
    </>
  );
}
