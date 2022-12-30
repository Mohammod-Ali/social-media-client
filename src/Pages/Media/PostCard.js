import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { text, img, like, _id } = post;
  const [likes, setLikes] = useState(like)
  const [ likeActive, setLikeActive ] = useState(false)


    // like btn handler
    const likeHandler = () => {
      if(likeActive){
        setLikeActive(false)
        setLikes(likes-1)
      }else{
        setLikeActive(true)
        setLikes(likes+1)
      }

    };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="card" />
      </figure>
      <div className="card-body">
        
        <p><span className="font-bold">Caption:</span> {text}</p>
        <div className="card-actions justify-between">
          <div className="text-3xl cursor-pointer mt-3">
            {
              likeActive ? <FcLike onClick={likeHandler}></FcLike> : <FcLikePlaceholder onClick={likeHandler}></FcLikePlaceholder>
            }
          </div>
          <p className="font-bold mt-3"> {likes}</p>
          <Link to={`/postdetails/${_id}`}><button className="btn btn-outline">Details</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default PostCard;
