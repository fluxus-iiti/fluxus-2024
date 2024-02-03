import React from "react";
import Image from "next/image";
import constellation from "../../../../../public/images/Day1/pngwing15.png";
import star from "../../../../../public/images/Day1/pngwing16.png";
export default function Detail() {
  return (
    <>
      <div className="styledCard h-fit w-2/3 shadow-md border border-white relative text-center">
        <div className="innerCard">
          <Image
            src={constellation}
            className="mb-4 mx-auto w-2/3 h-1/2"
            alt="constellation"
          />
          <h2 className="text-xl mb-20 text-white">TWO PRONITES</h2>
          <h2 className="text-xl mb-20 text-white">REMARABLE SPEAKERS</h2>
          <h2 className="text-xl mb-20 text-white">AMAZING MUSIC</h2>
          <h2 className="text-xl mb-20 text-white">A LIFETIME EXPERIENCE</h2>
          <Image src={star} className=" mx-auto w-2/3 h-1/2" alt="star" />
        </div>
      </div>
    </>
  );
}
