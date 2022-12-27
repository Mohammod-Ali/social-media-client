import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()
    const [loginError, setLoginError] = useState('')



    return (
        <div className="h-[800px]  flex justify-center items-center">
            
      <div className="w-96 p-7">
      <h1 className="text-3xl text-center font-bold"> Login</h1>
      
      <form onSubmit={handleSubmit('handleLogin')}>
    
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", 
            {required: 'Email is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {required: 'password is required', 
            minLength: {value: 6, message: 'Password must be 6 characters.'}
        })}
            className="input input-bordered w-full max-w-xs"
          />
           {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          <label className="label">
            <span className="label-text">Forgat Password</span>
          </label>
        </div>
      
      {/* <p>{data}</p> */}
      <input className="btn btn-outline w-full" value='Login' type="submit" />
      {/* login error */}
      {
        loginError && <p className='text-red-600'>{loginError}</p>
      }

    </form>
      <p className='mt-3'>New to Bike Resale. Please <Link className="text-primary" to='/signup'>Sign Up</Link></p>
      <div className="divider">OR</div>
        <button onClick={'googleLoginHandler'} className="btn btn-outline w-full"><FaGoogle className='m-2 text-2xl'></FaGoogle> Continue with Google</button>
      </div>
    </div>
    );
};

export default Login;