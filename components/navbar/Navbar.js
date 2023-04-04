import Image from "next/image"
import logo from "../../public/logo1.png"
import styles from "../../styles/Navbar.module.css"
import Link from "next/link"
import AnimatedText from 'react-animated-text-content';
import bannewrlogo from "../../public/bannerlogo1.png"

function Navbar() {

  return (
    <>
      <div className="navbar bg-blue-100">

        {/* menu for small device &  navbar start*/}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${styles.customMenu}`}>
              <li><Link href={'/'}>Item 1</Link></li>
              <li><Link href={'/'}>Item 2</Link></li>
              <li><Link href={'/'}>Item 3</Link></li>
            </ul>
          </div>

          <Image src={logo} alt="logo" width={200}></Image>
        </div>

        {/* menu for large device & navbar center part*/}
        <div className="navbar-center hidden lg:flex">
          <ul className={`flex gap-6 px-1 ${styles.customMenu}`}>
            <li><Link href={'/'}>Item 1</Link></li>
            <li><Link href={'/'}>Item 2</Link></li>
            <li><Link href={'/'}>Item 3</Link></li>
            <li tabIndex={0}>
            </li>
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
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" max-w-screen-xl mx-auto ">
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

                <h1 className="text-4xl font-bold   text-justify">"Health is Wealth" The Complete Health Solution.We provide <span className="text-blue-500">any</span>  kind of <span className="text-blue-500">Health</span> solution </h1> <br/>
                <Link href={'/'} className="btn btn-primary ">Get Starte</Link>
             
          

          </div>
          <div className="place-self-center">
            <Image src={bannewrlogo} alt="health logo" width={1000} className={styles.animate}></Image>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar