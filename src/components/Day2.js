import React from "react";
import constellation from "@/public/images/constellation.png";
import Image from "next/image";
import Day2Heading from "@/components/Day2Heading";
import LeftPortion from "@/components/LeftPortionDay2";
import BoxDay3 from "./Box";
import ImagesDay3 from "./ImageSectionday3";

const ResponsivePage = () => {
  return (
    <div className="bg-black pb-10">
      <Day2Heading />
      <div className="flex bg-black">
        {/* Left Section */}
        <LeftPortion />

        {/* Middle Section */}
        <BoxDay3 />

        {/* Right Section */}
        <ImagesDay3 />
      </div>
    </div>
  );
};

export default ResponsivePage;
