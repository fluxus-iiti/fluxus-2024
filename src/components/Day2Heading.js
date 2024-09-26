import React from "react";
import constellation from "@/public/images/constellation.png";
import Image from "next/image";

const Day2Heading = () => {
  return (
    <div className="w-full h-full mb-10">
      <div
        className=" bg-no-repeat bg-right-bottom bg-contain w-full h-1/2 p-8"
        style={{ backgroundImage: "url('./images/day2.png')" }}
      >
        <hr className="mb-1 w-2/3 border-t-8 border-white" />
        <hr className="mb-1 w-2/3 border-t-4 border-white" />
        <h1 className="text-white ml-0 text-4xl p-4 h-full md:text-8xl md:ml-24">
          DAY 2
        </h1>
        <hr className="mt-2 mb-1 w-2/3 border-t-4 border-white" />
        <hr className="mb-4 w-2/3 border-t-8 border-white" />
      </div>
    </div>
  );
};

export default Day2Heading;
