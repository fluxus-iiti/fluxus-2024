import React, { useState } from 'react';
import Image from 'next/image';
import a1 from './Arrow 1.jpg'; // Corrected import paths
import a2 from './Arrow 2.jpg'; // Corrected import paths

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto my-8">
    <div className="relative overflow-hidden">
      <Image
        src={images[currentImage]}
        alt="Carousel Image"
        className=" mx-auto w-64 h-64 object-cover"
      />
    </div>
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrev}
        // className="hidden lg:block bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none mx-2"
        className='text-white mx-4 '
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        // className="hidden lg:block bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none mx-2"
        className='text-white mx-4'
      >
        &gt;
      </button>
    </div>
  </div>
  );
}

export default Carousel;