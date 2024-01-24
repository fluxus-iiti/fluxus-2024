import React from "react";
import constellation from "@/public/images/constellation.png";
import Image from "next/image";
import Day2Heading from "@/components/Day2Heading";

const LeftPortion = () => {
  return (
    <div className="flex flex-1 items-center w-1/6 bg-cover h-screen hidden md:flex">
      {/* Your background image and additional content can go here */}
      <img
        src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/yRF5c-O/multiple-asteoroids-or-meteoroids-moving-towards-planet-earth-full-hd_njdxi0tc_thumbnail-1080_01.png"
        className="w-2/3"
      />
    </div>
  );
};

export default LeftPortion;
