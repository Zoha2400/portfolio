"use client";

import Image from "next/image";
import brand from "../../../public/brand.png";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Drag() {
  // const el = useRef(null);

  // useEffect((): void => {
  //   const options = {
  //     strings: ["Пример анимации текста, как в консоли."],
  //     typeSpeed: 100, // Скорость печати (мс)
  //   };
  //   const typed = new Typed(el.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div className="w-full h-52 bg-red-200 container-wrap flex justify-center items-center">
      <div className="mt-10 w-11/12">
        <header className="">
          <nav className="flex justify-between">
            <div className="brend text-blue-700 flex justify-center items-center w-52 relative">
              <p className="flex flex-col leading-5">
                {" "}
                Portfolio <span className="text-red-500 ml-2">Portfolio</span>
                <span className="text-purple-950 -ml-2">Portfolio</span>
              </p>
              <Image
                src={brand}
                alt="Brand"
                className="absolute w-40 h-auto animate-bounceSlow"
              />
            </div>

            <div className="flex gap-10 text-3xl text-gray-900">
              <Link href={"/posts"}>posts</Link>
              <Link href={"/takedzo"}>'bout me</Link>

              <Link href={"/stack"}>website</Link>
              {/* <div className="console">
                <span ref={el} />
              </div> */}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Drag;
