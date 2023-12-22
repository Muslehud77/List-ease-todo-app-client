import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import useContextInfo from "../../Hooks/useContextInfo";
import { updateProfile } from "firebase/auth";
import auth from "./../../Firebase/firebase.config";
import { toast } from "react-hot-toast";

// Regular expression to check for special characters
const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

const Register = () => {
  const { register: reg } = useContextInfo();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr(null);
    const displayName = data.name;
    const email = data.email;
    const photoURL = data.photoUrl;
    const password = data.password;

    // Password validation checks
    if (password.length < 6) {
      setErr("Password must be at least 6 characters!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErr("Password must contain at least 1 upper case letter!");
      return;
    }

    if (!specialCharacter.test(password)) {
      setErr("Password should have at least 1 special character!");
      return;
    }

    if (!/\d/.test(password)) {
      setErr("Password must contain at least 1 number!");
      return;
    }

    // Registering user and updating profile
    reg(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      }).then(() => {
        toast.success(`Hello ${displayName}, welcome!`);
      });
    });
  };

  return (
    <section className="relative  py-20">
      {/* Registration Section */}
      <div>
        <div className="max-w-md  py-10 px-12 mx-auto space-y-8  border mt-10 text-black backdrop-blur-md rounded-md">
          <h2 className="font-semibold text-3xl">Register Account</h2>
          <hr />
          {/* Registration Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <p className="font-semibold">Your Name</p>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            {errors.name && (
              <span className="text-red-500">Name is required!</span>
            )}

            {/* Other input fields */}
            {/* ... (omitted for brevity) ... */}

            {/* Password field */}
            <p className="font-semibold">Set Password</p>
            <div className="relative">
              <input
                id="password"
                type={`${show ? "text" : "password"}`}
                name="password"
                {...register("password", { required: true })}
                placeholder="Password must be at-least 6 characters"
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
            {err && (
              <div className="text-red-500 rounded-lg p-2 bg-white font-serif font-light">
                <p>{err}</p>
              </div>
            )}

            {/* Terms and conditions checkbox */}
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <input
                  {...register("terms", {
                    required: " Check Terms and Conditions!",
                  })}
                  value="yes"
                  type="checkbox"
                  className="checkbox checkbox-sm bg-white"
                />
                <label>
                  Accept{" "}
                  <a className="hover:underline" href="">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              {errors.terms && (
                <span className="text-red-500">{errors.terms.message}</span>
              )}

              {/* Submit button */}
              <input
                type="submit"
                value="Register"
                className="btn btn-neutral outline outline-white bg-black text-white w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
