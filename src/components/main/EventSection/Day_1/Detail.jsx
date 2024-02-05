import React from "react";
import Image from "next/image";
import constellation from "../../../../../public/images/Day1/pngwing15.png";
import star from "../../../../../public/images/Day1/pngwing16.png";
export default function Detail(props) {
  console.log(props);
  return (
    <>
      <div className="styledCard h-fit w-2/3 shadow-md relative text-center">
        <div className="innerCard">
          <Image
            src={constellation}
            className="mb-4 mx-auto w-full h-full"
            alt="constellation"
          />
          <div className="mt-10">
            {props.highlights &&
              props.highlights.map((highlight, idx) => (
                <h2 className="text-5xl mb-20 text-white font-bold" key={idx}>
                  {highlight}
                </h2>
              ))}
          </div>
          <Image src={star} className="mx-auto w-full h-full" alt="star" />
        </div>
      </div>
    </>
  );
}
