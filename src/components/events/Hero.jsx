"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/hero.module.css";
import HeroBackground from "../../../public/images/hero-section/starSpace.png";
import Planet from "../../../public/images/hero-section/planet.png";
import Moon from "../../../public/images/hero-section/moon.png";
import Constellation from "../../../public/images/hero-section/constellation.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div id="hero-background" className="w-full h-screen">
        <Image
          src={HeroBackground}
          alt="Hero Section Background"
          className="w-full h-screen object-cover absolute m-0 min-w-full min-h-full -z-30"
        ></Image>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 5,
            type: "spring",
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div id="planet" className="">
            <Image
              src={Planet}
              alt="Planet"
              className="absolute top-0 right-0 w-auto -z-20 h-2/6 sm:h-3/6"
            ></Image>
          </div>
        </motion.div>
        <div
          id="center-block"
          className="h-screen flex items-center justify-center"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
          >
            <div id="constellation" className="z-[-10]">
              <Image
                src={Constellation}
                alt="Constellation"
                className="scale-[0.8] -z-10"
              ></Image>
            </div>
          </motion.div>
          <div
            id="center-text"
            className="absolute text-center scale-[0.23] sm:scale-[0.35] md:scale-50 lg:scale-75"
          >
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 3,
                type: "spring",
                delay: 0.5,
              }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <span id="fest-name" className={styles.festName}>
                FLUXUS
              </span>
            </motion.span>
            <br />
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 3,
                type: "spring",
                delay: 1,
              }}
              variants={{
                visible: { y: "0vh", opacity: 1 },
                hidden: { y: "-100vh", opacity: 0 },
              }}
            >
              <span id="fest-theme" className={styles.festTheme}>
                A Celestial Euphoria
              </span>
            </motion.span>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 5,
            type: "spring",
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div id="moon" className="">
            <Image
              src={Moon}
              alt="Moon"
              className="absolute bottom-0 left-0 w-auto -z-20 h-1/6 sm:h-2/6"
            ></Image>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
