import { useRouter } from "next/router";
import Image from "next/image";

import profile from "../../public/profiiledemo.png";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import withAuth from "../withAuth/withAuth";

const ProfileSlug = () => {
  const router = useRouter();
  const { profileSlug } = router.query;
  const {user}=useContext(AuthContext)
  console.log("user",user)

  return (
    <>
      <div className="mx-auto max-w-screen-xl bg-blue-200 py-10 my-24 rounded-md shadow-md">
        <div className=" flex justify-center ">
          <div className="avatar online">
            <div className="w-64 rounded-full border-2 border-[#4791ff]">
              <Image height={500} width={1000} src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/2Z3HNtT/usg.jpg"} alt="profile" />
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-[#4791ff] text-2xl mb-3 font-medium">
            {user?.displayName}
          </h3>
          <h3 className="text-[#254747] text-2xl mb-3">
            {user?.email}
          </h3>
          {/* <h3 className="text-[#254747] text-2xl mb-3">
            {" "}
            <span className="font-medium">Date of Birth:</span> 13.09.1999
          </h3> */}
          <h3 className="text-[#254747] text-2xl mb-3 font-medium">
            Login as a <span className="text-[#4791ff]">User</span>
          </h3>
          <h1>User ID: {profileSlug}</h1>
        </div>
      </div>
    </>
  );
};

export default withAuth(ProfileSlug);
