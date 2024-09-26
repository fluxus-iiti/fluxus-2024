"use client";
// components/ImageCarousel.js
import React, { useState, useEffect } from 'react';


const images = [
    "./images/image1.webp",
    "./images/image2.webp",
    "./images/image3.webp",
    "./images/image4.webp",
    "./images/image1.webp",
    "./images/image2.webp",
    "./images/image3.webp",
    "./images/image4.webp",
    "./images/image1.webp",
    "./images/image2.webp",
    "./images/image3.webp",
    "./images/image4.webp",
    "./images/image1.webp",
    "./images/image2.webp",
    "./images/image3.webp",
    "./images/image4.webp",
    "./images/image1.webp",
    "./images/image2.webp",
    "./images/image3.webp",
    "./images/image4.webp",
    "./images/image1.webp",
    "./images/image2.webp",
    "./images/image3.webp",
    "./images/image4.webp",
  ];
  
  const AnimatedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to display the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {
        images.map((image, index) => (
          <div key={index}  className="carousel-slide">
            <img src={image} alt={`Image ${index + 1}` } className='imag' id={index%2?"imgup":"imgdn"}/>
          </div>
        ))}
      </div>

      <style>{`
      `}</style>
    </div>
  );

  };
  
  export default AnimatedCarousel;





