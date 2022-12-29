import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const PostCard = ({ post }) => {
  const { text, img, like,  } = post;
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
        {/* <h2 className="card-title">Shoes!</h2> */}
        <p><span className="font-bold">Caption:</span> {text}</p>
        <div className="card-actions justify-between">
          <div className="text-3xl cursor-pointer mt-3">
            {/* <BiLike className={[likeActive ? 'bg-slate-500 rounded-sm' : null]} onClick={ () => likeHandler()}></BiLike> */}
            {
              likeActive ? <FcLike onClick={likeHandler}></FcLike> : <FcLikePlaceholder onClick={likeHandler}></FcLikePlaceholder>
            }
          </div>
          <p className="font-bold mt-3"> {likes}</p>
          <button className="btn btn-outline">Details</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
