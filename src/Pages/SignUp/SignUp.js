import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit, } = useForm();
const { createUser, updateUser, googleLoginProvider } = useContext(AuthContext)
  const [signupError, setSignUpError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';

  // sign up
  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user)
        toast.success('Successfully toasted!')

        const userInfo = {
            displayName: data.name
        }
        updateUser(userInfo)
        .then(() => {
            navigate(from, { replace: true });
        })
        .catch(err => console.log(err))
    })
    .catch(error => {
        console.error(error.message)
        setSignUpError(error.message)
    })
  };

  // google sign up and login
  const provider = new GoogleAuthProvider()
  const googleLoginHandler = (data) => {
    setSignUpError("");
    googleLoginProvider(provider)
    .then( result => {
      const user = result.user;
      console.log(user)
      navigate(from, { replace: true });
    })
    .catch(error => {
      console.error(error.message)
      setSignUpError(error.message)
  })
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-3xl text-center font-bold"> Sign Up</h1>

        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters.",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          {/* <p>{data}</p> */}
          <input
            className="btn btn-outline w-full mt-8"
            value="Sign Up"
            type="submit"
          />
          {/* login error */}
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p className="mt-3">
          Already have an account. Please{" "}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={googleLoginHandler} className="btn btn-outline w-full">
          <FaGoogle className="m-2 text-2xl"></FaGoogle> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
