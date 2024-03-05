import React from "react";
import Carousel from "../../components/main/EventSection/Day_1/Carousel";
import i11 from "../../../public/images/Competitions/NITROTHRUST.webp";
import i12 from "../../../public/images/Competitions/Eurisitca.webp";
import i13 from "../../../public/images/Competitions/Pick_N_Place.webp";
import gp1 from "../../../public/images/Day1/gp1.webp";
import gp2 from "../../../public/images/Day1/gp2.webp";
import gp3 from "../../../public/images/Day1/gp3.webp";

import i21 from "../../../public/images/Day2/1.webp";
import i22 from "../../../public/images/Day2/2.webp";
import i23 from "../../../public/images/Day2/3.webp";
import i24 from "../../../public/images/Day2/4.webp";
import PE from "../../../public/images/Day2/PELive.webp";

import i31 from "../../../public/images/Day3/1.webp";
import i32 from "../../../public/images/Day3/2.webp";
import i33 from "../../../public/images/Day3/3.webp";
import SJ from "../../../public/images/Day3/SJLive.webp";
import Detail from "../../components/main/EventSection/Day_1/Detail";

export default function Day1() {
  const Day1 = [i11, i12, i13, gp1, gp2, gp3];
  const Day2 = [PE, i21, i22, i23, i24];
  const Day3 = [SJ, i31, i32, i33];
  return (
    <>
      <div className="mt-48">
        <div className="flex flex-col lg:flex-row justify-center mx-auto w-full h-max">
          <div className="flex-initial content-center">
            <div className="md:border-t border-white mt-3 w-auto"></div>
            <div className="lg:flex flex-row items-center">
              <p className=" lg:absolute text-center text-white transform lg:rotate-90 lg:left-[480px] xl:text-[60px] text-[2rem] font-neuropol">
                Day-1
              </p>
              <Carousel images={Day1} />
            </div>
            <div className="lg:block">
              <div className="border-t border-white mt-3 w-auto"></div>
              <p className=" lg:absolute text-center text-white transform lg:rotate-90 lg:left-[450px] lg:mt-[150px] xl:text-[60px] text-[2rem] font-neuropol">
                Day-2
              </p>
              <Carousel images={Day2} />
              <div className="border-t border-white mt-3 w-auto "></div>
              <p className=" lg:absolute text-center text-white transform lg:rotate-90 lg:left-[450px] lg:mt-[150px] xl:text-[60px] text-[2rem] font-neuropol">
                Day-3
              </p>
              <Carousel images={Day3} />
            </div>
            <div className="border-t border-white md: mt-3 "></div>
          </div>
          <div className="hidden lg:flex flex-initial justify-center">
            <div className="flex-1 flex flex-wrap justify-center lg:justify-end w-fit font-madimi">
              <Detail />
            </div>
          </div>
          <div className="hidden lg:block lg:flex-initial lg:w-96 ">
            <p className="text-white transform rotate-90 text-[150px] font-azonix">
              FLUXUS&apos;24
            </p>
          </div>
        </div>
        {/* <hr className="border-t-2 border-white w-[90vw] mx-auto mt-10" /> */}
      </div>
    </>
  );
}
