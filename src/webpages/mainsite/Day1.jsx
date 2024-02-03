import React from "react";
import Carousel from "../../components/main/EventSection/Day_1/Carousel";
import i1 from "../../../public/images/Day1/pngwing15.png";
import i2 from "../../../public/images/Day1/pngwing16.png";
import i3 from "../../../public/images/Day1/human.jpg";
import Detail from "../../components/main/EventSection/Day_1/Detail";

export default function Day1() {
  const Images = [i1, i2, i3];
  return (
    <>
      <div className="my-20">
        <div className="flex flex-col lg:flex-row justify-center mx-auto p-6 w-full h-max">
          <div className="flex-initial">
            <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto"></div>
            <div className="lg:flex flex-row items-center">
            <p className=" lg:absolute text-center text-white transform lg:rotate-90 lg:text-[5rem] lg:left-[450px] xl:text-[80px] text-[5rem]">
                Day 1
              </p>
              <Carousel images={Images} />
            </div>
            <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto"></div>
            <Carousel images={Images} />
            <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto "></div>
            <Carousel images={Images} />
            <div className="border-t border-white md: my-8 "></div>
          </div>
          <div className="flex-initial flex justify-center">
            <Detail />
          </div>
          <div className="hidden lg:block lg:flex-initial lg:w-96 ">
            <p className="text-white transform rotate-90 text-[150px]">
              FLUXUS&apos;24
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
