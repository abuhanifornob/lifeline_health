import { useRouter } from "next/router";
import Image from "next/image";
import { FaInbox, FaRegIdCard, FaUserCheck } from "react-icons/fa";

import profile from "../../public/profiiledemo.png";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const ProfileSlug = () => {
  const router = useRouter();
  const { profileSlug } = router.query;
  const { user } = useContext(AuthContext)
  console.log("user", user)

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-[#254747] mt-16">{user?.email === "lifeline@health.com" ? <span>Admin</span> : <span>User</span>} Dashboard</h1>
      <div className="mx-auto max-w-screen-xl bg-blue-200 py-10 my-24 rounded-md shadow-md">

        <div className=" flex justify-center ">
          <div className="avatar online ">
            <div className="w-64 rounded-full border-2 border-[#4791ff]">
              <Image height={500} width={1000} src={profile} alt="profile" />
            </div>
          </div>
        </div>
        <div className="mx-10 mt-12">
          <div className="flex">

            <FaUserCheck className="mt-2 w-16" />
            <h3 className="text-[#4791ff] text-2xl mb-3 font-medium">
              {user?.displayName}
            </h3>
          </div>
          <div className="flex">

            <FaInbox className="mt-2 w-16" />
            <h3 className="text-[#254747] text-2xl mb-3">
              {user?.email}
            </h3>
          </div>
          {/* <h3 className="text-[#254747] text-2xl mb-3">
            {" "}
            <span className="font-medium">Date of Birth:</span> 13.09.1999
          </h3> */}
          <div className="flex">

            <FaUserCheck className="mt-2 w-16" />
            <h3 className="text-[#254747] text-2xl mb-3 font-medium">
            Login as a {user?.email === "lifeline@health.com" ?<span className="text-[#4791ff]">Admiin</span>:<span className="text-[#4791ff]">User</span>}
          </h3>
          </div>
          
          <div className="flex">

            <FaRegIdCard className="mt-2 w-16" />
            <h1 className="text-[#254747] text-2xl mb-3 font-medium">User ID: {profileSlug}</h1>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProfileSlug;
