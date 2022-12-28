import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Media = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);



  const likeHandler = () => {
    console.log("like");
  };

  return (
    <div className="mt-10">
      <h1 className="text-5xl mb-10 text-center">Media Feeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            likeHandler={likeHandler}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Media;
