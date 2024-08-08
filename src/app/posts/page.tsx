import Post from "@/components/ui/Post";
import React from "react";

function page() {
  return (
    <div className="text-white w-full p-10">
      <section>
        <p className="text-3xl font-mono">There's my mini blog...</p>
      </section>
      <div className="post-area mt-8 flex flex-col gap-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default page;
