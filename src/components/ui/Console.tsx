"use client";
import { useEffect, useState } from "react";
import AnimatedLine from "./AnimatedLine";
import Image from "next/image";
import consImage from "../../../public/IMG_0020.JPG";

function Console() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDarkMode((prevMode) => !prevMode);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-5 p-5 box-border">
      <AnimatedLine />
      <section className="flex justify-between relative w-1/2">
        <Image
          src={consImage}
          alt="Phone of Console"
          objectFit="contain"
          className={`transition duration-75 h-auto w-96 ease-in-out ${
            isDarkMode ? "filter brightness-50" : "filter brightness-100"
          }`}
        />
        <Image
          src={consImage}
          alt="Phone of Console"
          objectFit="contain"
          className={`transition duration-100 h-auto w-96 ease-in-out scale-x-[-1] ${
            isDarkMode ? "filter brightness-50" : "filter brightness-100"
          }`}
        />

        <div className="absolute flex justify-center items-center w-full h-full">
          <div className="flex flex-col">
            <p className="text-4xl font-extralight text-blue-100 italic">
              Design?
            </p>
            <p className="text-xl font-mono italic text-white">
              Surreal, functional, playful - <br /> experience out absurd
              design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Console;
