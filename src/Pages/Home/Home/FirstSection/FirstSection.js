import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate =  useNavigate()

  const imgHostKey = process.env.REACT_APP_imgbb_key

  // post data handle function
  const handlePostData = (data) => {
    const image = data.img[0]
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        console.log(imgData.data.url)

        const post = {
          text: data.text,
          img: imgData.data.url,
          like: 0
        }

        // save the post data to db
        fetch('http://localhost:5000/post', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            console.log(data)
            toast.success('Posted Successfully')
            navigate('/media')
        }
        })
      }
    })
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{ backgroundImage: `url("https://images.unsplash.com/photo-1625225230517-7426c1be750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Provide Your Data.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            {/* Form for post data */}
            <form onSubmit={handleSubmit(handlePostData)}>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Type Your Text</span>
                </label>
                <input
                  type="text"
                  {...register("text", { required: "Text is required" })}
                  className="textarea textarea-primary" placeholder="Type Your Text"
                />
                {errors.text && (
                  <p className="text-red-600">{errors.text?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Select Your Photo</span>
                </label>
                <input
                  type="file"
                  {...register("img", { required: "Photo is required" })}
                  className="file-input file-input-bordered file-input-primary " 
                />
                {errors.img && (
                  <p className="text-red-600">{errors.img?.message}</p>
                )}
              </div>
              
              
              <input
                className="btn btn-outline w-full mt-8"
                value="submit"
                type="submit"
              />
          
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
