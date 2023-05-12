import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
const login = () => {
  const backgroundStyle = {
    backgroundImage: `url(${"/loginBack.jpg"})`,
  };

  const { singInEmailPassword, googleLongin } = useContext(AuthContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const navigate = useNavigate

  const handleLoginForm = (event) => {
    event.preventDefault();
    setLoginError("");

    const data = event.target;
    const email = data.email.value;
    const password = data.password.value;
    singInEmailPassword(email, password)
      .then((result) => {
       <Navigate to="/"></Navigate>
        toast.success("Login Success!!");
        console.log(result.user);
      })
      .catch((error) => {
        setLoginError(error.message);
        toast.error(error.message) ;
        console.error(error);
        return ;
      });
  };

  const handleOnBluerEmail = (event) => {
    setLoginEmail("");
    const email = event.target.value;
    console.log(email);
    setLoginEmail(email);
  };
  const handleGoogleLogin = () => {
    googleLongin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        router.push("/");

        const userInformation = {
          name: user.displayName,
          email: user.email,
        };
        // googleLoginUserData(userInformation);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero bg-base-200 " style={backgroundStyle}>
      <div className="hero-content p-0 lg:p-10 my-11 flex-col lg:flex-row">
        <div className="p-0 lg:r-20">
          <img src="/login.jpg" className=" rounded-lg shadow-2xl h-full" />
        </div>
        <div className="w-full lg:w-3/5">
          <h1 className="text-5xl font-bold text-center">Log In</h1>
          <div className="card shadow-2xl">
            <form onSubmit={handleLoginForm}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    onBlur={handleOnBluerEmail}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <label className="label text-sm flex justify-center">
              <span className="label-text text-center">
                New to LifeLine Health ?
                <Link
                  href={"/siginsignupselect"}
                  className="text-orange-600 hover:text-yellow-500 font-bold text-xl cursor-pointer"
                >
                  Create new account
                </Link>
              </span>
            </label>

            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-ghost my-2 mx-2"
            >
              <span>
                <FaGoogle className="text-4xl mx-4 " />
              </span>{" "}
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
