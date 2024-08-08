"use client";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

interface PostProps {
  text?: string;
}

const Post: React.FC<PostProps> = ({
  text = "My first day in MohirAi was amazing. I think it was my first experience",
}) => {
  const [mounted, setMounted] = useState(false);

  const styles = useSpring({
    from: {
      y: "10%",
      opacity: 0,
    },
    to: {
      y: mounted ? "0%" : "10%",
      opacity: mounted ? 1 : 0,
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <animated.div
      style={styles}
      className="w-full min-h-20 font-mono
       flex flex-col bg-gradient-to-r from-indigo-800 to-purple-950 
       rounded-md"
    >
      <p className=" p-4 text-lg">{text}</p>

      <div className="inf flex gap-2 mr-6 mb-2 items-end justify-end font-bold">
        <p className="">13:54</p>
        <p>17-11-2024</p>
        <p>15seen</p>
      </div>
    </animated.div>
  );
};

export default Post;
