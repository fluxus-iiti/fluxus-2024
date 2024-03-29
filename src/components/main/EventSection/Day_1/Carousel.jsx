import React, { useState } from "react";
import Image from "next/image";
import a1 from "../../../../../public/images/Day1/left.svg"; // Corrected import paths
import a2 from "../../../../../public/images/Day1/right.svg"; // Corrected import paths

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="relative overflow-hidden styledcard  rounded-lg">
        <Image
          src={images[currentImage]}
          alt="Carousel Image"
          className=" mx-auto w-[50vh] h-[50vh] object-cover"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrev}
          // className="hidden lg:block bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none mx-2"
          className="text-white mx-4 "
        >
          <Image
            src={a1}
            alt="left arrow"
            className="w-[24px] mx-auto object-cover"
          />
        </button>
        <button
          onClick={handleNext}
          // className="hidden lg:block bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none mx-2"
          className="text-white mx-4"
        >
          <Image
            src={a2}
            alt="right arrow"
            className="w-[24px] mx-auto object-cover"
          />
        </button>
      </div>
      <style jsx>
        {`
          .styledcard {
            box-shadow: 0 0 10px 0px #fefefe;
          }
        `}
      </style>
    </div>
  );
}

export default Carousel;
