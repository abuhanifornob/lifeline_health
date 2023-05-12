import { AuthContext } from "@/context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { use, useContext, useState } from "react";
// import { toast } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registration = () => {
  const provider = new GoogleAuthProvider();
  const [role, setRole] = useState("Signup as a User");
  // const backgroundStyle = {
  //   backgroundImage: `url(${"/loginBack.jpg"})`,
  //   opacity: .6,
  //   minHeight:screen
  // };
  const { googleLongin, createUser, userProfileUpdate, user } = useContext(AuthContext);
  const router = useRouter();
  // const [state, setstate] = useState();
  const handleRegis = (event) => {
    event.preventDefault();
    const data = event.target;
    const email = data.email.value;
    const name = data.name.value;
    const password = data.password.value;
    const photour = data.photourl.files[0];
    const number = data.number.value;
    // ------------
    const formData = new FormData();
    formData.append('image', photour)
    const url = `https://api.imgbb.com/1/upload?key=f77eb96236dd667b11b2d66bc4d9cf88`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {

        if (imgData.success) {

          const picture = imgData.data.url
          console.log('image', picture)
          const userInfo = {
            displayName: name,
            photoURL: picture,
            phoneNumber: number
          };
          console.log("ff", userInfo)
          createUser(email, password)
            .then((result) => {

              userProfileUpdate(userInfo)
                .then(() => {
                  toast("Registration Successfull");
                  router.push("/");
                  // const user = result.user;
                  const userInfo={
                    userName:name,
                    userID:user?.uid,
                    userImg:picture,
                    userPhone:number,
                    userEmail:email
                  }
                  console.log("jkdshjuhsdfguih", JSON.stringify(userInfo));
                  fetch(' /api/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data) {
                            // setSuccessMessage("Registration successful!");
                            console.log(data)
                        }
                        else {
                            setErrorMessage("Registration failed. Please try again.");
                        }
                    })
                    .catch(error => console.error(error));
                  event.target.reset();
                })
                .catch((error) => console.error(error));

              // router.push("/");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
    // ------------



  };


  // const handleGoogleLogin = () => {
  //   googleLongin(provider)
  //     .then((result) => {
  //       const user = result.user;

  //       const userInformation = {
  //         name: user.displayName,
  //         email: user.email,
  //       };
  //       // googleLoginUserData(userInformation);
  //     })
  //     .catch((error) => console.error(error));
  // };
  const handleselect = (event) => {
    // event.preventDefault();
    setRole(event.target.value);
    console.log("role", role)
  }
  return (
    <div className="hero  z-50 min-h-screen" data-aos="zoom-in-up"
    data-aos-offset="500">
      <ToastContainer />
      <div className="hero-content p-10 flex-col lg:flex-row">
        <div className="p-0 lg:r-20 mr-20">
          <img src="/login.jpg" className="  rounded-lg shadow-xl h-full" />
        </div>
        <div className="w-full lg:w-3/5">
          <h1 className="text-5xl font-bold text-center mb-12 text-[#4791ff]">Sign Up Now</h1>
          <div>
            <label className="label">
              <span className="label-text text-xl text-[#4791ff] font-bold">Select your Role</span>
            </label>
            <select value={role} onChange={handleselect} className=" select select-info w-full ">
              {/* <option disabled selected>Select you Role</option> */}
              <option>Signup as a User</option>
              <option>Signup as a Doctor</option>
              {/* <option>Signup as a Fitness expert</option> */}
            </select>
          </div>
          <div className="card shadow-2xl">
            {role === "Signup as a User" && <form onSubmit={handleRegis}>
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
                  // required
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
                  // required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Number"
                    className="input input-bordered"
                    name="number"
                  // required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Choose your photo</span>
                  </label>
                  <input type="file" name="photourl" className="file-input file-input-bordered file-input-info w-full " />
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
                  // required
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <input
                  className="btn bg-[#4791ff] w-full mt-2"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>}
            <label className="label text-sm flex justify-center items-center h-28">
              <span className="label-text text-center">
                Want to Register as a Doctor?
                <Link
                  href={"/doctorRegistrationForm"}
                  className="text-[#4791ff] pl-2 hover:text-yellow-500 font-bold text-xl"
                >
                  Doctor Registration
                </Link>
              </span>
            </label>
            {/* <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default registration;
