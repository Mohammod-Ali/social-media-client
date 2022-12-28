import React from "react";
import { BiLike } from "react-icons/bi";

const PostCard = ({ post, likeHandler }) => {
  const { text, img, like,  } = post;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="card" />
      </figure>
      <div className="card-body">
        {/* <h2 className="card-title">Shoes!</h2> */}
        <p>{text}</p>
        <div className="card-actions justify-between">
          <div className="text-3xl cursor-pointer mt-3">
            <BiLike onClick={likeHandler}></BiLike> 
          </div>
          <button className="btn btn-outline">Details</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
