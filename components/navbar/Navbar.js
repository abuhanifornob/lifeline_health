import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo1.png";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className="navbar bg-blue-100">
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
                <Link href={"/"}>Item 1</Link>
              </li>
              <li>
                <Link href={"/"}>Item 2</Link>
              </li>
              <li>
                <Link href={"/"}>
                  Item 3
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <Image src={logo} alt="logo" width={200}></Image>
        </div>

        {/* menu for large device & navbar center part*/}
        <div className="navbar-center hidden lg:flex">
          <ul className={`flex gap-6 px-1 ${styles.customMenu}`}>
            <li>
              <Link href={"/"}>Item 1</Link>
            </li>
            <li>
              <Link href={"/"}>Item 2</Link>
            </li>
            <li>
              <Link href={"/siginsignupselect"}>Item 3</Link>
            </li>
            <li tabIndex={0}></li>
          </ul>
        </div>

        {/* navbar end   part  */}
        <div className="navbar-end gap-2">
          <div className="form-control">
            <h2>user name</h2>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-blue-400">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
