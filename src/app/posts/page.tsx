"use client";

import Post from "@/components/ui/Post";
import { useEffect, useState } from "react";

import { useSpring, animated } from "@react-spring/web";

interface Post {
  text: string;
}

function page() {
  const [mounted, setMounted] = useState(false);

  const styles = useSpring({
    from: {
      x: "5%",
      opacity: 0,
    },
    to: {
      x: mounted ? "0%" : "10%",
      opacity: mounted ? 1 : 0,
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="text-white w-full p-10 overflow-x-hidden">
      <section>
        <animated.div style={styles} className="text-3xl font-mono">
          There's my mini blog...
        </animated.div>
      </section>
      <div className="post-area mt-8 flex flex-col gap-4">
        <Post text="My first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first experienceMy first day in MohirAi was amazing. I think it was my first My first day in MohirAi was amazing. I think it was my first experience" />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default page;
