"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Hello there, on my website<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you want to get a website<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can find my contacts down'<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
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
      <div className="shimmer absolute -z-10 text-lime-500 font-bold text-2xl box-border p-5">
        <span ref={el} />
      </div>
      <div className="tv-lines absolute"></div>
    </div>
  );
}

export default AnimatedLine;
