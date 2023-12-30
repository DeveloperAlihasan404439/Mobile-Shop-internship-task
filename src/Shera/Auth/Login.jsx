import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./useAuth";
import { useForm } from "react-hook-form";
import useAxios from "../Hooks/useAxios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const [open, setOpen] = useState(true);
  const { loginUser, googleUser } = useAuth();
  const axiosSecure = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((result) => {
      reset();
      if (result.user) {
        navigate(location?.state ? location?.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Login User",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  const googleLogin = () => {
    googleUser().then((result) => {
      if (result?.user) {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
        };
        axiosSecure.post("/usersdata", userInfo).then((res) => {
          if (res.data.insertedId) {
            navigate(location?.state ? location?.state : "/"); 
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Google Login",
              showConfirmButton: false,
              background: "#07163d",
              color: "white",
              timer: 2000,
            });
          }
        });
        navigate(location?.state ? location?.state : "/"); 
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Google Login",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl" style={{background: 'radial-gradient(circle, rgb(27, 27, 27) 0%, rgb(243, 23, 23) 100%)'}}>
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="username"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md    focus:"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type={open ? "password" : "text"}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md    focus:"
            />

            <span
              onClick={() => setOpen(!open)}
              className="absolute right-3 top-[45%] text-2xl "
            >
              {open ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <input
            type="submit"
            className="block w-full p-2 my-4 text-center bg-[#415ef9] hover:bg-[#2239bb] text-white rounded "
          />
        </form>
        <div className="flex items-center space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
          <p className="px-3 text-lg text-white">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleLogin}
            aria-label="Log in with Google"
            className="p-3 text-4xl"
          >
            <FcGoogle />
          </button>
        </div>
        <p className="text-lg text-center sm:px-6 text-white">
          Do not have an account?{" "}
          <Link to="/singup" className="underline ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};


export default Login;