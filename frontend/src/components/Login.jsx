import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Login = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data); 
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">LogIn</h3>
            <p className="pt-4">Email</p>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-80 h-10 border "
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-red-600">This field is required</span>}
            
            <p className="pt-4">Password</p>

            <input
              type="text"
              placeholder="Enter Password"
              className="w-80 h-10 border "
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-red-600">This field is required</span>}
            <div className="pt-7 flex justify-between">
              <button className="btn bg-pink-500 text-white">Login</button>
              <div className="flex pt-3">
                <p>Don't have an account?</p>
                <Link to="/signup" className="px-3 text-blue-600">
                  SignUp
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
