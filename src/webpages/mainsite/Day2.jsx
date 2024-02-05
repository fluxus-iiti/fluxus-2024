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
  useMotionValueEvent,
} from "framer-motion";

function Heading({ vid1Scale, vid1_x }) {
  return (
    <>
      <div className="p-24">
        <div className="border-0 md:mb-6">
          <div className="lg:grid grid-cols-[500px_auto] relative">
            <div></div>
            <div className="flex items-center justify-center rounded-lg">
              <motion.div style={{ scale: vid1Scale, x:vid1_x}} className="relative z-0">
                <video
                  autoPlay
                  loop
                  muted
                  src={"/videos/2.mp4"}
                  className={`object-fill rounded-lg`}
                />
              </motion.div>
            </div>

            <div className="absolute top-0 h-full w-full z-[10] bg-opacity-50 lg:bg-opacity-20 ">
              <div className="flex flex-col text-start justify-center lg:pl-[180px] h-full items-center lg:items-start border-0 ">
                <h1 className="m-0 pl-0 font-bold sm:text-8xl my-2 text-3xl">
                  <div className="relative z-10">
                    <hr className="px-12 mx-2 lg:border-t-[16px] border-t-8" />
                    <div className="text-[9rem] font-bold font-serif border-y-4 text-center m-2 p-12 w-[40vw]">
                      Day 2
                    </div>
                    <hr className="px-12 mx-2 lg:border-t-[16px] border-t-8" />
                  </div>
                </h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* <img
          className="m-auto py-20 lg:relative lg:right-[-400px] lg:top-[-400px] z-0 "
          src="/images/card.png"
          alt=""
        /> */}
      </div>
    </>
  );
}

export default function Day2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 120,
  });
  const day_2X = useTransform(springScroll, [0, 1], ["50vw", "0vw"]);
  const vid1Scale = useTransform(springScroll, [0, 1], [4, 1]);
  const vid1_x = useTransform(springScroll, [0,1], ["-50vw", "0vw"])
  const Images = [i1, i2, i3];
  return (
    <>
      <motion.div className="my-20" ref={ref} style={{ x: day_2X }}>
        <Heading vid1Scale={vid1Scale} vid1_x={vid1_x}/>
        <div className="flex flex-col lg:flex-row justify-center mx-auto p-6 w-full h-max">
          <div className="flex-initial">
            <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
              <Detail highlights={["i-Conclave", "Pronite", "GlitchPop", "Food Fest"]} />
            </div>
          </div>
          <div className="flex-initial">
            <div className="border-t border-white my-4 mt-7 w-auto hidden lg:block"></div>
            <div className="lg:flex flex-row items-center">
              <Carousel images={Images} />
            </div>
            <div className="hidden lg:block">
              <div className="border-t border-white my-4 mt-7 w-auto"></div>
              <Carousel images={Images} />
              <div className="border-t border-white my-4 mt-7 w-auto "></div>
              <Carousel images={Images} />
              <div className="border-t border-white md: my-8 "></div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-white w-[90vw] mx-auto mt-10" />
      </motion.div>
    </>
  );
}
