import Link from "next/link";

import React from "react";

// import backgroundImageI from "/loginBack.jpg";
const siginsignupselect = () => {
  const backgroundStyle = {
    backgroundImage: `url(${"/loginBack.jpg"})`,
  };
  return (
    <div className="hero bg-slate-500 bg-cover" style={backgroundStyle}>
      <div className="hero-content my-10 flex-col lg:flex-row-reverse">
        <div className="card flex w-4/5 shadow-2xl bg-base-100">
          <div className="card-body p-5">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure className="w-1/3 relative">
                <img
                  src="/expert.png"
                  alt="Movie"
                  className="rounded-full absolute top-7 left-0"
                />
              </figure>
              <div className="card-body w-2/3">
                <h2 className="card-title text-xl text-orange-600 font-semibold">
                  LifeLine Health speciality
                </h2>
                <p>
                  Sign in or Create your LifeLine Health Acount to Mange Your
                  Health!
                </p>
                <div className="card-actions justify-center">
                  <Link href={"/"} className="text-2xl hover:text-orange-700">
                    SignIn
                  </Link>
                  <Link
                    href={"/registration"}
                    className="text-2xl font-2xl hover:text-orange-700"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex w-4/5 shadow-2xl bg-base-100">
          <div className="card-body p-5">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure className="w-1/3 relative">
                <img
                  src="/patient.jpg"
                  alt="Movie"
                  className="rounded-full absolute top-7 left-0"
                />
              </figure>
              <div className="card-body w-2/3">
                <h2 className="card-title text-xl text-orange-600 font-semibold">
                  LifeLine Health Patient
                </h2>
                <p>
                  Sign in or Create your LifeLine Health Acount to Mange Your
                  Health!
                </p>
                <div className="card-actions justify-center">
                  <Link
                    href={"/login"}
                    className="text-2xl hover:text-orange-700"
                  >
                    SignIn
                  </Link>
                  <Link
                    href={"/registration"}
                    className="text-2xl font-2xl hover:text-orange-700"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default siginsignupselect;
