import { AuthContext } from "@/context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { use, useContext } from "react";
// import { toast } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const provider = new GoogleAuthProvider();

const registration = () => {
  const backgroundStyle = {
    backgroundImage: `url(${"/loginBack.jpg"})`,
  };
  const { googleLongin, createUser, userProfileUpdate } =
    useContext(AuthContext);
  const router = useRouter();
  const handleRegis = (event) => {
    event.preventDefault();
    const data = event.target;
    const email = data.email.value;
    const name = data.name.value;
    const password = data.password.value;
    const userInfo = {
      displayName: name,
    };
    createUser(email, password)
      .then((result) => {
        userProfileUpdate(userInfo)
          .then(() => {
            router.push("/");
            toast("Registration Successfull");
            const user = result.user;
            console.log(user);
            event.target.reset();
          })
          .catch((error) => {});

        // router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
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
      <ToastContainer />
      <div className="hero-content p-10 flex-col lg:flex-row">
        <div className="p-0 lg:r-20">
          <img src="/login.jpg" className="  rounded-lg shadow-2xl h-full" />
        </div>
        <div className="w-full lg:w-3/5">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <div className="card shadow-2xl">
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
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <input
                  className="btn btn-secondary w-full mt-2"
                  type="submit"
                  value="Sign Up"
                />
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
