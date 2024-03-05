import React from "react";
import Image from "next/image";
import constellation from "../../../../../public/images/Day1/pngwing15.png";
import star from "../../../../../public/images/Day1/pngwing16.png";
export default function Detail() {
  return (
    <>
      <div className=" h-fit w-2/3 shadow-md relative text-center">
        <div className="styledCard innerCard">
          <Image
            src={constellation}
            className="mb-4 mx-auto w-full h-full"
            alt="constellation"
            style={{}}
          />
          <div className="mt-10">
            <h2 className="text-4xl mb-20 text-white">SACHIN-JIGAR LIVE</h2>
            <h2 className="text-4xl mb-20 text-white">
              PINEAPPLE EXPRESS LIVE
            </h2>
            <h2 className="text-4xl mb-20 text-white">REMARKABLE SPEAKERS</h2>
            <h2 className="text-4xl mb-20 text-white">AMAZING MUSIC</h2>
            <h2 className="text-4xl mb-20 text-white">A LIFETIME EXPERIENCE</h2>
          </div>
          <Image src={star} className="mx-auto w-full h-full" alt="star" />
        </div>
        <div className="py-48">
          <h1 className="text-8xl text-white font-azonix">
            7<sup>th</sup> - 9<sup>th</sup> March
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .styledCard {
            box-shadow: 0 0 10px 0px #fefefe;
          }
        `}
      </style>
    </>
  );
}
