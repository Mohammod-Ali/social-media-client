import { useQuery } from "@tanstack/react-query";
import React from "react";
import PostCard from "./PostCard";

const Media = () => {
  // react/tanStack query
  const { data: posts = [] } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch("https://social-media-server-pi-opal.vercel.app/posts").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="mt-10">
      <h1 className="text-5xl mb-10 text-center font-bold">Media Feeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Media;
