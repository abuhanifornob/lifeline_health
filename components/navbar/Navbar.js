import { AuthContext } from "@/context/AuthProvider";

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

import logo from "../../public/logo1.png";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="navbar shadow-md  sticky top-0 z-10 bg-base-100">
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
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${styles.customMenu}`}
            >
              <li>
                <Link className="text-lg font-medium" href={"/contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium" href={"/"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium" href={"/blog"}>
                  Blog
                </Link>
              </li>
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
                  <Link className="text-lg font-medium" href={"/"}>
                    <li>Doctor Consultation</li>
                  </Link>
                  <Link className="text-lg font-medium" href={"/"}>
                    <li>Nutrition & Diet Specialist</li>
                  </Link>
                  <Link className="text-lg font-medium" href={"/"}>
                    <li>Gym & Fitness Expert</li>
                  </Link>
                  <Link className="text-lg font-medium" href={"/"}>
                    <li>Yoga Trainer</li>
                  </Link>
                  <Link className="text-lg font-medium" href={"/"}>
                    <li>Dentist</li>
                  </Link>
                  <Link className="text-lg font-medium" href={"/"}>
                    <li>Mental Helth</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>

          <Image src={logo} alt="logo" width={200}></Image>
        </div>

        {/* menu for large device & navbar center part*/}
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal flex gap-6 px-1 ${styles.customMenu}`}
          >
            <li>
              <Link className="text-lg font-medium" href={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium" href={"/"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium" href={"/blog"}>
                Blog
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href={"/"} className="text-lg font-medium">
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
                <Link className="text-lg font-medium" href={"/"}>
                  <li>Doctor Consultation</li>
                </Link>
                <Link className="text-lg font-medium" href={"/"}>
                  <li>Nutrition & Diet Specialist</li>
                </Link>
                <Link className="text-lg font-medium" href={"/"}>
                  <li>Gym & Fitness Expert</li>
                </Link>
                <Link className="text-lg font-medium" href={"/"}>
                  <li>Yoga Trainer</li>
                </Link>
                <Link className="text-lg font-medium" href={"/"}>
                  <li>Dentist</li>
                </Link>
                <Link className="text-lg font-medium" href={"/"}>
                  <li>Mental Helth</li>
                </Link>
              </ul>
            </li>
            <li tabIndex={0}></li>
          </ul>
        </div>

        {/* <div className="navbar-center hidden lg:flex">
    <ul className={`menu menu-horizontal px-1 ${styles.customMenu}`}>
            <li><Link href={'/'}>Item 1</Link></li>
            <li><Link href={'/'}>Item 2</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </div> */}

        {/* navbar end   part  */}
        <>
          {user?.uid ? (
            <div className="navbar-end gap-2">
              <div className="form-control">
                <h2 className="text-[#254747] font-medium">
                  {user?.displayName}
                </h2>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border-2 border-blue-400">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className={`mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#254747] text-white rounded-box w-52 ${styles.customMenu}`}
                >
                  <li>
                    <Link href={"/"} className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>My Appoinment</li>
                  <li>Settings</li>

                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href={"/siginsignupselect"}>Login or Create Account</Link>
          )}
        </>
      </div>

      {/* <div className=" max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 content-center min-h-screen">
          <div className=" self-center">

            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="p"
              className={`animated-paragraph text-center lg:text-start text-5xl font-bold flex text-blue-500 mb-4`}
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Lifeline Health
            </AnimatedText>

            <h1 className="text-3xl font-bold   "> The Complete Health Solution.We provide <span className="text-blue-500">any</span>  kind of <span className="text-blue-500">Health</span> solution </h1> <br />
            <Link href={'/'} className="btn btn-primary ">Get Started</Link>



          </div>
          <div className="place-self-center">
            <Image src={bannewrlogo} alt="health logo" width={1000} className={styles.animate}></Image>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
