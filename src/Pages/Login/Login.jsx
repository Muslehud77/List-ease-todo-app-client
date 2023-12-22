import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

import { useForm } from "react-hook-form";
import useContextInfo from "../../Hooks/useContextInfo";
import { toast } from "react-hot-toast";

const Login = () => {
  // Hooks and state initialization
  const navigate = useNavigate();
  const { state } = useLocation();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(null);

  // Accessing context and methods
  const { googleSignIn, login, facebookSignIn, user } = useContextInfo();

  // React Hook Form usage for form handling and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    setErr(null);
    const email = data.email;
    const password = data.password;

    // Logging in the user using the login method
    login(email, password)
      .then(() => {
        toast.success(`Welcome back ${user.displayName}!`);
      })
      .catch((err) => {
        if (err.message) {
          setErr("Please enter valid login credentials");
        }
      });
  };

  // Function to handle social media login
  const handleSocialLogin = (social) => {
    social().then(() => {});
  };

  return (
    <div className="relative">
      {/* Login Section */}
      <section className="w-full container mx-auto px-8 py-20 items-center gap-8">
        <div className="flex justify-center items-center mt-10">
          <div className="max-w-md border py-8 md:py-10 px-5 md:px-12 mx-auto space-y-8 bg-white rounded-md">
            <h2 className="font-semibold text-3xl">Login your account</h2>
            <hr />
            {/* Form for login */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <p className="font-semibold">Your Email</p>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-100"
              />
              {errors.email && (
                <span className="text-red-500">Email is required!</span>
              )}
              <p className="font-semibold">Password</p>
              <div className="relative">
                <input
                  id="password"
                  {...register("password", { required: true })}
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  placeholder="Password "
                  className="input input-bordered w-full bg-gray-100 text-black"
                />

                <div
                  className="hover:cursor-pointer absolute right-3 bottom-3 text-black text-xl"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {!show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.password && (
                <span className="text-red-500">Password is required!</span>
              )}
              <div className="space-y-2">
                {err && (
                  <p className="capitalize text-red-500 font-serif  rounded-xl">
                    {err}
                  </p>
                )}
                <input
                  type="submit"
                  value="login"
                  className="btn btn-neutral w-full"
                />
              </div>
            </form>
            {/* Section for registration */}
            <div>
              <span>
                Don't Have An Account ?{" "}
                <Link
                  state={state}
                  className="hover:font-semibold text-blue-700"
                  to="/register"
                >
                  Register
                </Link>
              </span>
              {/* Social Media Login Section */}
              <div className="mt-3">
                <div className="flex justify-center gap-5 items-center mb-2">
                  <div className="w-16 h-[1px] bg-black"></div>
                  <h2 className="text-xl font-bold ">or</h2>
                  <div className="w-16 h-[1px] bg-black"></div>
                </div>
                <div className="space-y-2">
                  {/* Google login button */}
                  <button
                    onClick={() => handleSocialLogin(googleSignIn)}
                    className="btn w-full btn-outline"
                  >
                    <FcGoogle className="text-2xl" /> continue with Google
                  </button>
                  {/* Facebook login button */}
                  <button
                    onClick={() => handleSocialLogin(facebookSignIn)}
                    className="btn w-full btn-outline"
                  >
                    {" "}
                    <BsFacebook className="text-2xl" /> continue with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
