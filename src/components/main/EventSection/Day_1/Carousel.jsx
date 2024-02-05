import React, { useState } from "react";
import Image from "next/image";
import a1 from "../../../../../public/images/Day1/Arrow1.jpg"; // Corrected import paths
import a2 from "../../../../../public/images/Day1/Arrow2.jpg"; // Corrected import paths
import { motion } from "framer-motion";

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 2, type: "spring" }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <div className="container mx-auto my-8">
        <div className="relative overflow-hidden">
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
            &lt;
          </button>
          <button
            onClick={handleNext}
            // className="hidden lg:block bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none mx-2"
            className="text-white mx-4"
          >
            &gt;
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Carousel;
