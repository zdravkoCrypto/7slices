"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/topImageOne.jpg", alt: "Image One" },
  { src: "/topImageTwo.jpg", alt: "Image Two" },
  { src: "/topImageThree.jpg", alt: "Image Three" },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Bild wechselt alle 5 Sekunden

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full h-3/6 overflow-hidden">
      <div
        className="show-between-sizes flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="show-between-sizes flex-shrink-0 w-full h-full flex flex-col items-center justify-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={250}
              className="show-between-sizes object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Imagestop() {
  return (
    <div className="show-between-sizes flex flex-col w-full">
      <ImageSlider />
      <ImageSlider />
      <ImageSlider />
    </div>
  );
}
