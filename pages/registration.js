import { AuthContext } from "@/context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
const provider = new GoogleAuthProvider();

const registration = () => {
  const backgroundStyle = {
    backgroundImage: `url(${"/loginBack.jpg"})`,
  };
  const { singInEmailPassword, googleLongin } = useContext(AuthContext);
  const handleRegis = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  const handleGoogleLogin = () => {
    googleLongin(provider)
      .then((result) => {
        const user = result.user;

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
            <h1 className="text-2xl font-bold text-center py-3">Sign Up</h1>
            <form onSubmit={handleRegis}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
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
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </div>
            </form>
            <label className="label text-sm flex justify-center items-center ">
              <span className="label-text text-center">
                Already Have a Account
                <Link
                  href={"/"}
                  className="text-orange-600 pl-2 hover:text-yellow-500 font-bold text-xl"
                >
                  Sign In !
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

export default registration;
