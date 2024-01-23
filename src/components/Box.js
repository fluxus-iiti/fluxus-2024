// pages/index.js

import React from "react";
import constellation from "@/public/images/constellation.png";
import Image from "next/image";
import FluxusHeading from "@/components/FluxusHeading";
import ImagesDay3 from "@/components/ImageSectionday3";

const BoxDay3 = () => {
  return (
    <div className="flex-1 flex flex-wrap justify-center w-1/2">
      <div className=" h-fit w-2/3 shadow-md border border-white relative text-center">
        <div className="bg-black h-10 w-10 border rounded-full border-t-black border-l-black border-r-white absolute -top-[6px] -left-[6px]"></div>
        <div className="bg-black h-10 w-10 border rounded-full border-t-black border-l-white border-b-white border-r-black  absolute -top-[6px] -right-[6px]"></div>
        {/* <img
              src="https://media.istockphoto.com/id/525430193/vector/sagittarius-constellation.jpg?s=612x612&w=0&k=20&c=xiPp51Hka5Vhzyt0yftgstOy1fu_b6ZWNC8MKRvoo_c="
              alt="Image 1"
              className="mb-4 mx-auto w-2/3 h-1/2"
            /> */}
        <Image src={constellation} className="mt-20 md:mt-0" />
        <h2 className="text-base md:text-xl mb-20 text-white">TWO PRONITES</h2>
        <h2 className="text-base md:text-xl mb-20 text-white">
          REMARABLE SPEAKERS
        </h2>
        <h2 className="text-base md:text-xl mb-20 text-white">AMAZING MUSIC</h2>
        <h2 className="text-base md:text-xl mb-20 text-white">
          LIFETIME EXPERIENCE
        </h2>
        <div className="bg-black h-10 w-10 border rounded-full border-t-white border-l-white border-b-black border-r-black absolute -bottom-[6px] -right-[6px]"></div>
        <div className="bg-black h-10 w-10 border rounded-full border-t-white border-l-black border-b-black border-r-white absolute -bottom-[6px] -left-[6px]"></div>
      </div>
    </div>
  );
};

export default BoxDay3;
