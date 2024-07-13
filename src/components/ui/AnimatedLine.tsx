"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import consImage from "../../../public/IMG_8851.JPG";

function AnimatedLine() {
  const el = useRef(null);

  useEffect((): void => {
    const options = {
      strings: [
        `
        import Zoha from Fullstack developer; <br/>
        <br/>
        Zoha.createWebSite(() => {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return jsonify(<br/>      
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Hello there! Welcome to my website.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you're looking for a unique web experience,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you're in the right place.'<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;, [Pay me money - get your website :)]);<br/>
        });<br/>
`,
      ],
      typeSpeed: 10, // Скорость печати (мс)
    };
    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-1/2 rounded-2xl overflow-hidden h-96 shimmer-wrapper relative flex shadow-inner-custom box-border">
      <div className="shimmer absolute -z-10 text-green-400 font-bold text-2xl box-border p-8">
        <span ref={el} />
      </div>
      <div className="tv-lines absolute"></div>
      <div className="absolute w-full overflow-hidden flex justify-center items-center -z-20">
        <Image
          src={consImage}
          alt="Phone of Console"
          objectFit="contain"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default AnimatedLine;
