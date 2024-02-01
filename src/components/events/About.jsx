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
                <Image src={about} className="imag" alt="" />
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
                <p className="text-[1.8rem]">
                  It took years of hard work, sheer will, and dedication but
                  today, the Indian Institute of Technology, Indore, stands tall
                  among the new generation of IITs. We have accolades and awards
                  in academics, sports, and technical and cultural events. Our
                  students have proved their mettle in various arenas across the
                  country. Given this long list of achievements, it is evident
                  that we are hungry to prove ourselves even further and achieve
                  even greater heights. Fluxus, IIT Indore&apos;s annual
                  techno-cultural fest, proudly wears the crown of“Central
                  India&apos;s Biggest and Most Anticipated Event”.Fluxus flaunts
                  guest appearances from Bollywood artists and stand-up
                  comedians like Farhan Akhtar, Sunidhi Chauhan, Shirley Setia,
                  Amit Trivedi, Salim - Sulaiman and Zakir Khan while providing
                  an excellent stage for new and upcoming artists like The Local
                  Train. We are now back with the Tenth Edition of Fluxus, which
                  will be Bigger, Brighter and Better than ever! With
                  preparations in full swing, there is little doubt that this
                  year&apos;s Fluxus will be its most unforgettable edition yet.
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
