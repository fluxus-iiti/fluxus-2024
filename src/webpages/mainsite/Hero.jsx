"use client";
// before you edit this page plz look onto a point that the responsiveness of this page is dynamically changing based on the window size so if u try doing any parallax effects , do make sure that it doesnt get effected due to window size changes

import LeftSmokeDust from "@/components/main/hero/LeftSmokeDust";
import MainLogo from "@/components/main/hero/MainLogo";
import MainText from "@/components/main/hero/MainText";
import RightSmokeDust from "@/components/main/hero/RightSmokeDust";
import SaturnPlanet from "@/components/main/hero/SaturnPlanet";
import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useTime,
  useAnimation,
} from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [width] = useWindowSize();

  useEffect(() => {
    const contentElement = document.getElementById("content");
    const mainTextElement = document.getElementById("main_text");
    if (contentElement) {
      contentElement.style.gridTemplateRows = `${width / 5}px auto`;
    }
    if (mainTextElement) {
      mainTextElement.style.marginTop = `${width / 10}px`;
    }
  }, [width]);

  return (
    <motion.div>
      <main className="overflow-hidden">
        <div className="max-w-full max-h-full relative ">
          <div className="absolute w-full h-full z-[-2]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 2.5,
                type: "spring",
                damping: 50,
                mass: 0.5,
                stiffness: 50,
              }}
              variants={{
                visible: { y: "0vh", opacity: 1 },
                hidden: { y: "50vh", opacity: 0 },
              }}
            >
              <SaturnPlanet />
            </motion.div>
          </div>
          <div id="content" className={`relative  w-full h-full top-0 grid `}>
            <div className="grid  grid-cols-3 absolute">
              <div className="z-[-3] translate-y-[55px]">
                <motion.div
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
                  variants={{
                    visible: { y: "0vh", opacity: 1, x: "0vw" },
                    hidden: { y: "-10vh", opacity: 0, x: "-10vw" },
                  }}
                >
                  <LeftSmokeDust />
                </motion.div>
              </div>
              <div className=""></div>
              <div className="z-[-3] -translate-y-[10px]">
                <motion.div
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
                  variants={{
                    visible: { y: "0vh", opacity: 1, x: "0vw" },
                    hidden: { y: "-10vh", opacity: 0, x: "10vw" },
                  }}
                >
                  <RightSmokeDust />
                </motion.div>
              </div>
            </div>
            <div></div>
            <div className="grid justify-center items-center grid-cols-[0.3fr_1fr_0.3fr]">
              <div></div>
              <div className=" ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.5,
                    type: "spring",
                    damping: 50,
                    mass: 0.5,
                    stiffness: 50,
                  }}
                  variants={{
                    visible: { y: "0vh", opacity: 1 },
                    hidden: { y: "-20vh", opacity: 0 },
                  }}
                >
                  <MainLogo />
                </motion.div>
              </div>
              <div></div>
            </div>

            <div id="main_text" className="flex justify-center">
              <MainText />
            </div>
            {/* <ThemeText /> */}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <hr id="hr" style={{borderTop: '3px solid white'}} />
            </div>
            <div className="text-white text-center my-2 text-[2rem] font-serif">
              Dive into the realm of technology
            </div>
            <div className="flex justify-center items-center">
              <hr id="hr" style={{borderTop: '3px solid white'}} />
            </div>
          </div>
        </div>
        <style jsx>
          {`
            #hr {
              height: 2px;
              background-color: white;
              width: 95%;
              border-style: none;
            }
          `}
        </style>
      </main>
    </motion.div>
  );
}
