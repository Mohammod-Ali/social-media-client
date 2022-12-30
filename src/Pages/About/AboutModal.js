import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AboutModal = ({refetch}) => {
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const handleModalData = (data) => {
        console.log(data)
        fetch('http://localhost:5000/aboutModal', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                console.log(data)
                toast.success('Edited Successfully')
                refetch()
            }
            
        })
    }

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">
           Please, Provide Your Data for Editing.
          </h3>
          
          {/* modal form */}
          <div className="  flex justify-center items-center">
      <div className="w-96 p-7">
        {/* <h1 className="text-3xl text-center font-bold"> Sign Up</h1> */}

        <form onSubmit={handleSubmit(handleModalData)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">University</span>
            </label>
            <input
              type="text"
              {...register("university", { required: "University is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.university && (
              <p className="text-red-600">{errors.university?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.address && (
              <p className="text-red-600">{errors.address?.message}</p>
            )}
         
          </div>
         

          {/* <p>{data}</p> */}
         
          <div className="modal-action">
          <input 
            className="btn"
            value="save"
            type="submit"
          />
            <label htmlFor="about-modal" className="btn">
          close
            </label>
          
          </div>
        </form>
        
        
      </div>
    </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
