import React from "react";
import Carousel from "../../components/main/EventSection/Day_1/Carousel";
import i1 from "../../../public/images/Day1/pngwing15.png";
import i2 from "../../../public/images/Day1/pngwing16.png";
import i3 from "../../../public/images/Day1/human.jpg";
import Detail from "../../components/main/EventSection/Day_1/Detail";

function heading() {
  return (
    <>
      <div className="p-24">
        <div className="border-0 md:mb-6">
          <div className="relative">
            <div></div>
            <div className="flex items-center justify-center rounded-lg">
              <video
                autoPlay
                loop
                muted
                src={"/videos/1.mp4"}
                className="h-[100vh] w-[100vw] object-fill rounded-lg"
              />
            </div>

            <div className="absolute top-0 h-full w-full z-[10] bg-opacity-50 lg:bg-opacity-20 ">
              <div className="flex flex-col text-start justify-center lg:pl-[180px] h-full items-center lg:items-start border-0 ">
                <h1 className="m-0 pl-0 font-bold sm:text-8xl my-2 text-3xl">
                  <div className="relative z-10">
                    <div className="text-[12rem] font-bold text-center m-2 p-12 w-[40vw]">
                      Day 3
                    </div>
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

export default function Day3() {
  const Images = [i1, i2, i3];
  return (
    <>
      <div className="my-20">
        {heading()}

        <div className="relative z-10">
          <hr className="px-12 mx-2 lg:border-t-[16px] border-t-8 w-[80vw]" />
          <div className="text-[9rem] font-bold border-y-4 text-center m-2 p-12 w-[80vw]">
            FLUXUS
          </div>
          <hr className="px-12 mx-2 lg:border-t-[16px] border-t-8 w-[80vw]" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center mx-auto p-6 w-full h-max">
          <div className="flex-initial">
            <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
              <Detail />
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
      </div>
    </>
  );
}
