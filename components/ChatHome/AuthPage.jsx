import axios from "axios";
import { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import Head from "next/head";
import { AuthContext } from "@/context/AuthProvider";
const AuthPage = (props) => {
  const [redirectLoading, setRedirectLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setRedirectLoading(true);
    const { value } = e.target[0];
    //check account user name 
    if(user.displayName !== value){
      setRedirectLoading(false) ;
     alert("Your account name not matched please try again !!") ;
     return ;
    } 
    //end check account user name 

    axios
      .post(" https://scholar-net-subrota.vercel.app/authenticate", { username: value })
      .then((r) => {
        setRedirectLoading(false);
        return props.onAuth({ ...r.data, secret: value });
      })
      .catch((e) => {
        setRedirectLoading(false);
        return console.log("Auth Error", e)
      });
    axios
      .post(" https://scholar-net-subrota.vercel.app/chat-users", { username: value, email: user?.email })
      .then((res) => {
        if (res.data.message === "welcome") {
          return toast.success("Welcome to back");
        } else {
          toast.success("Welcome to chat board");
          return res.data;
        }
      }
      )
      .catch((e) => {
        setRedirectLoading(false);
        return console.log("Auth Error", e)
      });

  };

  return (
    <>
      <Head>
        <title>Auth page </title>
        <link rel="stylesheet" href="css/chatPage.css" />
      </Head>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <iframe width="456" height="269" className="rounded-md" src="https://www.youtube.com/embed/LIFY4JdZ2UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={onSubmit} >
              <h2 className="text-3xl text-center text-info font-semibold mt-3">Get start by your account name 👋 </h2>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Enter your account name"
                    name="username"
                    required={true}
                    className="input input-bordered auth-input w-full" />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-full" type="submit"> {

                    redirectLoading ? <BeatLoader color="white"></BeatLoader> : "Press enter"
                  }</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;