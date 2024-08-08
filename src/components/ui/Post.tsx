"use client";
import { useSpring, animated } from "@react-spring/web";

function Post() {
  const styles = useSpring({
    from: {
      y: "10%",
      opacity: 0,
    },
    to: {
      y: "0%",
      opacity: 1,
    },
  });
  return (
    <animated.div
      style={styles}
      className="w-full h-24 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-md"
    >
      <p className="font-mono p-4 text-base">
        My first day in MohirAi was amazing. I think it was my first experience
        in such a cool team and company. Have a nice day
      </p>
    </animated.div>
  );
}

export default Post;
