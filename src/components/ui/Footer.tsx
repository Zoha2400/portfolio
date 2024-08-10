"use client";
import Typed from "typed.js";

import { useEffect, useRef } from "react";

function Footer() {
  const el = useRef(null);

  useEffect((): void => {
    const options = {
      strings: ["I won't pay for your visit to the psychologist..."],
      typeSpeed: 50, // Скорость печати (мс)
      showCursor: false,
    };
    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full h-24 bg-zinc-900 font-mono pl-8 pr-8 flex justify-between items-center gap-5 text-white">
      <span className="" ref={el} />

      <span>2024</span>
    </div>
  );
}

export default Footer;
