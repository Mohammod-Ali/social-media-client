import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const posts = useLoaderData();
  const {img, like, text, _id } = posts;
  console.log(posts)

  const [likes, setLikes] = useState(like)
  const [ likeActive, setLikeActive ] = useState(false)

  const {data: comment = [], refetch } = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetch(`http://localhost:5000/comments`)
    .then((res) => res.json())
  })
console.log(comment)

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

    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = form.comment.value;
        const comments = {
            comment: data,
        }
        fetch('http://localhost:5000/addcomment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(comments)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                console.log(data)
                toast.success('Comment Add Successfully')
                // refetch()
            }
            
        })
        
        form.reset();
    }


  return (
    <div>
      <h1 className="mt-5 m-5 text-5xl">Post details: </h1>
      <div className="card w-3/4 m-10  mx-auto bg-base-100 shadow-xl">
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
          {/* <Link to={`/postdetails/${_id}`}><button className="btn btn-outline">Details</button></Link> */}
          {/* <div className="flex gap-2">
          <input type="text" placeholder="Add Your Comment" className="input input-bordered input-primary w-full max-w-xs" />
          <button className="btn btn-outline">Send</button>
          </div> */}
          <form className="flex" onSubmit={handleComment}>
          <input
            name="comment"
            type="text"
            placeholder="Add Your Comment"
            className="input input-bordered input-primary w-full  max-w-xs"
            required
          />
       
        <input
          className="btn btn-outline mx-2"
          type="submit"
          value="Send"
        />
          </form>
         
        </div>
      </div>
    </div>
    {/* comment here */}
    <h2 className="text-4xl m-2">Comments:</h2>

    {
        comment.map(cmnt => <>
        <div className="card card-compact  bg-base-100 shadow-xl border m-10">
  
  <div className="card-body">
    
    <p>{cmnt.comment}</p>
   
  </div>
</div>
        </>)
    }
    
    </div>
  );
};

export default PostDetails;
