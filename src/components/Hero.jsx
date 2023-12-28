"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import HeroBackground from "../../public/images/hero-section/starSpace.png";
import Planet from "../../public/images/hero-section/planet.png";
import Moon from "../../public/images/hero-section/moon.png";
import Constellation from "../../public/images/hero-section/constellation.png";
const Hero = () => {
  return (
    <>
        <div id = "hero-background" className="w-full h-screen">
            <Image src = {HeroBackground} alt = "Hero Section Background" className = "w-full h-screen object-cover absolute m-0 min-w-full min-h-full -z-30"></Image>
            <div id = "planet" className="">
                <Image src={Planet} alt= "Planet" className="absolute top-0 right-0 w-auto -z-20 h-2/6 sm:h-3/6"></Image>
            </div>
            <div id = "center-block" className="h-screen flex items-center justify-center">
                <div id = "constellation" className="">
                    <Image src={Constellation} alt= "Constellation" className="scale-[0.8] -z-10"></Image>
                </div>
                <div id = "center-text" className="absolute text-center scale-[0.23] sm:scale-[0.35] md:scale-50 lg:scale-75">
                    <span id="fest-name" className={styles.festName}>FLUXUS</span>
                    <br/>
                    <span id="fest-theme" className={styles.festTheme}>Cosmic Euphoria</span>
                </div>
            </div>
            <div id = "moon" className="">
                <Image src={Moon} alt= "Moon" className="absolute bottom-0 left-0 w-auto -z-20 h-1/6 sm:h-2/6"></Image>
            </div>

        </div>
    </>
  );
};

export default Hero;