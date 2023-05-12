import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo1.png";
import styles from "../../styles/Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import DarkModeToggle from "@/pages/DarkMode/DarkModeToggle";

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  function handleLogOut() {
    logoutUser()
      .then(() => {
        toast.success("Your profile log out successfully !!");;
        <Navigate to="/login"></Navigate>
      })
  }
  console.log(user);
  return (
    <>
      <div className="navbar shadow-md  sticky top-0 z-10 bg-primary text-white">
        {/* menu for small device &  navbar start*/}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${styles.customMenu}`}>
              <li><Link className="text-lg font-medium" href={'/contact'}>Contact</Link></li>
              <li><Link className="text-lg font-medium" href={'/about'}>About Us</Link></li>
              <li><Link className="text-lg font-medium" href={'/blog'}>Blog</Link></li>
              <li tabIndex={0}>
                <a className="text-lg font-medium">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-[#254747] absolute z-10 text-white">
                  <Link className="text-lg font-medium" href={"/service/doctor-consultant"}>
                    <li>Doctor Consultation</li>
                  </Link>
                  <Link className="text-lg font-medium" href={"/service/health-plane"}>
                    <li>Fitness Expert</li>
                  </Link>

                </ul>
              </li>
            </ul>
          </div>

          <Link href={'/'}><Image src={logo} alt="logo" width={200}></Image></Link>
        </div>

        {/* menu for large device & navbar center part*/}
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal flex gap-3 px-1 ${styles.customMenu}`}>
            <li><Link className="text-lg  " href={'/'}>Home</Link></li>
            <li><Link className="text-lg  " href={'/contact'}>Contact</Link></li>
            <li><Link className="text-lg  " href={'/about'}>About Us</Link></li>
            <li><Link className="text-lg  " href={'/blog'}>Blog</Link></li>
            <li><Link className="text-lg  " href={'/healthplans'}>Health Plan</Link></li>
            <li><Link className="text-lg  " href={'/doctorRegistrationForm'}>For Doctor</Link></li>

            <li tabIndex={0}>
              <Link href={""} className="text-lg font-medium">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-[#254747] absolute z-10 text-white">
                <Link className="text-lg font-medium" href={"/service/doctor-consultant"}>
                  <li>Doctor Consultation</li>
                </Link>
                <Link className="text-lg font-medium" href={"/service/health-plane"}>
                  <li>Fitness expert</li>
                </Link>
              </ul>
            </li>


            {
              user && <>
                <li tabIndex={1}>
                  <Link href={""} className="text-lg font-medium">
                    Go live
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 bg-[#254747] absolute z-10 text-white">
                    {
                      user.uid !== "" && <>
                        <li>  <a href="https://life-line-health-conference.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white float-right">Live video call</a> </li>
                        <li><Link className="text-lg font-medium" href={'/chatpage'}>Live Chat </Link></li>

                      </>
                    }
                  </ul>
                </li>

              </>
            }
            <li tabIndex={5}> <DarkModeToggle></DarkModeToggle> </li>
          </ul>
        </div>



        {/* navbar end   part  */}
        <div className="navbar-end gap-2">
          {user && <>
            <div className="form-control">
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-blue-400">
                  <img src={user?.photoUrl ? user?.photoURL : "https://i.ibb.co/2Z3HNtT/usg.jpg"} width={100} height={100} alt="dfdfd" />
                </div>
              </label>

              <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#254747] text-white rounded-box w-52 ${styles.customMenu}`}>
                <li><a>{user?.displayName ? user?.displayName : "username"}</a></li>
                <li><a>My Appoinment</a></li>
                <li><a>Settings</a></li>
                <li onClick={() => handleLogOut()}><a>Logout</a></li>
              </ul>
            </div>
            {/* navbar change  */}
          </>}
          {
            !user && <>
              <ul tabIndex={0} className={`menu menu-horizontal flex gap-6 px-1 ${styles.customMenu}`}>

                <li> <Link href={"login"} className="text-lg font-medium">Login</Link></li> <li> <Link href={"login"} className="text-lg font-medium">Register</Link></li></ul>

            </>
          }
        </div>
      </div>
    </>
  );
}

export default Navbar;
