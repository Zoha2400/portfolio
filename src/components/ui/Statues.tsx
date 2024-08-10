"use client";

import Image from "next/image";
import { useScroll, animated } from "@react-spring/web";

function Statues() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex justify-between relative mt-40 p-2 pb-0 ">
        <div className="imgs flex justify-center">
          <Image
            src="/simone.png"
            alt="Phone of Console"
            className={`transition w-auto h-96 scale-x-[-1] absolute z-20`}
            objectFit="contain"
            width={500}
            height={300}
          />
          <Image
            src="/simone.png"
            alt="Phone of Console"
            className={`transition w-auto h-96 scale-x-[-1] absolute z-10 ml-48 opacity-75`}
            objectFit="contain"
            width={500}
            height={300}
          />
          <Image
            src="/simone.png"
            alt="Phone of Console"
            className={`transition w-auto h-96 scale-x-[-1] absolute z-0 ml-96 opacity-50`}
            objectFit="contain"
            width={500}
            height={300}
          />
        </div>
        <div className="text h-96 relative flex flex-col justify-between">
          <p className="text-6xl text-gray-900 absolute z-0 m-40">
            Driven by the absurd, crafting digital wonders.
          </p>
          <p className="text-6xl text-gray-700 absolute z-10 scale-x-[-1] m-20">
            Driven by the absurd, crafting digital wonders.
          </p>
          <p className="text-6xl z-20 text-white font-bold">
            Driven by the absurd, crafting digital wonders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statues;

// #f6f7fb
