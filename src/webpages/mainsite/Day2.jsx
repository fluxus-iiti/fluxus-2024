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
            <div className="flex-1 flex flex-wrap w-fit ">
              <Detail />
            </div>
          </div>
          <div className="flex-initial">
            <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto"></div>
            <div className="lg:flex flex-row items-center">
              <Carousel images={Images} />
            </div>
            <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto"></div>
            <Carousel images={Images} />
            <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto "></div>
            <Carousel images={Images} />
            <div className="border-t border-white md: my-8 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
