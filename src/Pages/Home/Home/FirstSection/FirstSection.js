import React from "react";
import { useForm } from "react-hook-form";

const FirstSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handlePostData = (data) => {
    console.log(data);
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
                  {...register("text", { required: "Text field is required" })}
                  className="textarea textarea-primary" placeholder="Type Your Text"
                />
                {errors.text && (
                  <p className="text-red-600">{errors.text?.message}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Upload Your Image</span>
                </label>
                <input
                  type="file"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters.",
                    },
                  })}
                  className="input input-bordered w-full "
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
                
              </div>

              <input
                className="btn btn-outline w-full mt-8"
                value="submit"
                type="submit"
              />
              {/* Post data error */}
              {
                //   loginError && <p className='text-red-600'>{loginError}</p>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
