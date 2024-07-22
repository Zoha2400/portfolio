"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

const textArray = [
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
  "Explore my creations, where logic embraces the absurd.",
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex justify-between pl-16 pr-16">
      <div className="text flex flex-col *:duration-75">
        {textArray.map((text, index) => (
          <p
            key={index}
            className={`text-3xl font-light italic ${
              index === currentIndex ? "text-white" : "text-gray-700"
            }`}
          >
            {text}
          </p>
        ))}
      </div>
      <Image
        src="/projects.png"
        alt="Phone of Console"
        className={`transition w-auto h-96 scale-x-[-1]`}
        objectFit="contain"
        width={500}
        height={300}
      />
    </div>
  );
}

export default Projects;