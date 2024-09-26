// pages/index.js

import React from "react";
import constellation from "@/public/images/constellation.png";
import Image from "next/image";
import FluxusHeading from "@/components/FluxusHeading";
import ImagesDay3 from "@/components/ImageSectionday3";
import BoxDay3 from "@/components/Box";

const NewPage = () => {
  return (
    <div className="bg-black h-full pb-10">
      <FluxusHeading />
      <div className="flex bg-black">
        {/* Left Section */}

        {/* Right Section */}
        <ImagesDay3 />
        {/* Middle Section */}
        <BoxDay3 />
      </div>
    </div>
  );
};

export default NewPage;
