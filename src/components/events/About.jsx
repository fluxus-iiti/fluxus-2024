"use client";
// pages/index.js
import React from "react";
import Image from "next/image";
import HeadingImage from "../../../public/images/meteor.png";
import about from "../../../public/images/About/about.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div
        className="about-section overflow-x-hidden"
        style={{
          backgroundImage: `url(images/back.png)`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="main">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              type: "spring",
              mass: 0.5,
              damping: 60,
              stiffness: 100,
            }}
            variants={{
              visible: { x: "0vw" },
              hidden: { x: "99vw" },
            }}
          > */}
          <div id="heading" className="relative overflow-x-hidden">
            <Image
              src={HeadingImage}
              className="
                !h-[20%] transform -scale-x-100 float-right"
              alt={""}
            />
            {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  mass: 0.5,
                  damping: 60,
                  stiffness: 100,
                }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              > */}
            <h1 className="text-white w-full sm:text-[25px] lg:!text-[50px] font-extrabold flex absolute md:left-2/3 sm:left-1/2 top-1/2 -translate-y-1/2 text-[18px] left-[50%]">
              About Fluxus
            </h1>
            {/* </motion.div> */}
          </div>
          {/* </motion.div> */}
          <div className="flex justify-center items-center flex-row mx-20">
            <div className="flex w-1/3 hidden lg:block ml-5 self-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 5,
                }}
                variants={{
                  visible: { opacity: 1, x: "0vh" },
                  hidden: { opacity: 0, x: "-30vh" },
                }}
              >
                <Image src={about} className="imag" alt=""/>
              </motion.div>
            </div>
            <div className="flex text xl:w-2/3 w-full mx-[0vw]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 5,
                }}
                variants={{
                  visible: { opacity: 1, x: "0vh" },
                  hidden: { opacity: 0, x: "30vh" },
                }}
              >
                <p className="text-4xl px-48">
                  Welcome to the pulsating hub of competition at Fluxus, IIT
                  Indore&apos;s flagship event! Our eleventh edition promises to be
                  the pinnacle of excellence, showcasing talents from across the
                  spectrum. With renowned guest appearances and a platform for
                  emerging artists, Fluxus is set to redefine excitement and
                  innovation. Get ready to embark on an unforgettable journey of
                  competition, camaraderie, and celebration!
                </p>
              </motion.div>
            </div>
          </div>
          {/* <AnimatedCarousel /> */}
        </div>
      </div>
    </>
  );
};

export default About;
