import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button for the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-lg">SignUp</h3>

          {/* Name input */}
          <p className="pt-4">Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-80 h-10 border"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* Email input */}
          <p className="pt-4">Email</p>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-80 h-10 border"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* Password input */}
          <p className="pt-4">Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-80 h-10 border"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* Buttons */}
          <div className="pt-7 flex justify-between">
            <button type="submit" className="btn bg-pink-500 text-white">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
