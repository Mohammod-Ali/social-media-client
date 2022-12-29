import React from 'react';
import { BiLike } from 'react-icons/bi';

const TopPostCard = ({post}) => {
    const {img, text, like } = post;
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
            <BiLike onClick={'likeHandler'}></BiLike>  {like}
          </div>
          <button className="btn btn-outline">Details</button>
        </div>
      </div>
    </div>
    );
};

export default TopPostCard;