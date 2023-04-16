import { AuthContext } from "@/context/AuthProvider";

import { GoogleAuthProvider } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/router";

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
const provider = new GoogleAuthProvider();

const login = () => {
  const backgroundStyle = {
    backgroundImage: `url(${"/loginBack.jpg"})`,
  };
  const { singInEmailPassword, googleLongin } = useContext(AuthContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const handleForm = (event) => {
    event.preventDefault();
    const data = event.target;
    const email = data.email.value;
    const password = data.password.value;
    singInEmailPassword(email, password)
      .then((result) => {
        setLoginEmail(data.email);
        toast.success("Login Success!!");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLongin(provider)
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
      <div className="hero-content p-10 flex-col lg:flex-row">
        <div className="w-1/2 p-5">
          <img src="/login.jpg" className=" rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <h1 className="text-2xl font-bold text-center py-3">Log In</h1>
            <form onSubmit={handleForm}>
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <label className="label text-sm flex justify-center items-center ">
              <span className="label-text text-center">
                New to LifeLine Health ?
                <Link
                  href={"/siginsignupselect"}
                  className="text-orange-600 hover:text-yellow-500 font-bold text-xl"
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
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
