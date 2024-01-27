// "use client";
// pages/index.js
import React from "react";
import Image from "next/image";
import HeadingImage from "../../../public/images/Technicals Heading.png";
import about from "../../../public/images/About/about.png";
const About = () => {
  return (
    <>
      <div
        className="about-section"
        style={{
          backgroundImage: `url(images/back.png)`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="main">
          <div id="heading" className="relative overflow-x-hidden">
            <Image
              src={HeadingImage}
              className="
                !h-[20%] transform -scale-x-100 float-right"
              alt={""}
            />
            <h1 className="text-white w-full text-[25px] lg:!text-[50px] font-extrabold flex absolute top-1/3 left-2/3">
              About Fluxus
            </h1>
          </div>
          <div className="flex justify-center items-center flex-row mx-20">
            <div className="flex w-1/3 hidden lg:block ml-5 self-center">
              <Image src={about} className="imag" />
            </div>
            <div className="flex text xl:w-2/3 w-full mx-[0vw]">
              <p className="text-[1.8rem]">
                It took years of hard work, sheer will, and dedication but
                today, the Indian Institute of Technology, Indore, stands tall
                among the new generation of IITs. We have accolades and awards
                in academics, sports, and technical and cultural events. Our
                students have proved their mettle in various arenas across the
                country. Given this long list of achievements, it is evident
                that we are hungry to prove ourselves even further and achieve
                even greater heights. Fluxus, IIT Indore's annual
                techno-cultural fest, proudly wears the crown of“Central India's
                Biggest and Most Anticipated Event”.Fluxus flaunts guest
                appearances from Bollywood artists and stand-up comedians like
                Farhan Akhtar, Sunidhi Chauhan, Shirley Setia, Amit Trivedi,
                Salim - Sulaiman and Zakir Khan while providing an excellent
                stage for new and upcoming artists like The Local Train. We are
                now back with the Tenth Edition of Fluxus, which will be Bigger,
                Brighter and Better than ever! With preparations in full swing,
                there is little doubt that this year's Fluxus will be its most
                unforgettable edition yet.
              </p>
            </div>
          </div>
          {/* <AnimatedCarousel /> */}
        </div>
      </div>
    </>
  );
};

export default About;
