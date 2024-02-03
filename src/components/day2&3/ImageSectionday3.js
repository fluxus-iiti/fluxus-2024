// pages/index.js

import React from "react";
import constellation from "@/public/images/constellation.png";
import Image from "next/image";
import FluxusHeading from "@/components/FluxusHeading";

const ImagesDay3 = () => {
  return (
    <div className="flex-1 flex items-center justify-center w-1/2">
      <div className="flex flex-col w-full items-center">
        <hr className="my-4 w-2/3 border-t border-gray-500" />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180"
          alt="Image 3"
          className="mb-4 w-1/2 h-2/3"
        />
        <hr className="my-4 w-2/3 border-t border-gray-500" />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180"
          alt="Image 4"
          className="w-1/2 h-2/3"
        />
        <hr className="my-4 w-2/3 border-t border-gray-500" />
        <div className=" flex items-center justify-center w-2/3 h-44 md:h-64">
          <div className="bg-[url('https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180')] flex justify-center bg-no-repeat bg-contain md:bg-center lg:bg-center w-full h-5/6">
            <button className=" border border-white border-4 text-white text-xs h-1/6 mt-8 sm:mt-16 sm:text-xl sm:h-1/5 md:mt-20 lg">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesDay3;
