import AuthProvider from "@/context/AuthProvider";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { useEffect } from "react";
import Aos from "aos";

export default function App({ Component, pageProps }) {
useEffect(() => {
  Aos.init({
    duration:2000,
  })
})
  return (
    <>

      <div className="scrollBar">
        <Head>
          <link rel="stylesheet" href="/css/theme.css" />
                 {/*font awsome cdn link*/}
          <script src="https://kit.fontawesome.com/48706b2f58.js" crossorigin="anonymous"></script>
        {/*AOS cdn link*/}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
        <AuthProvider>
          <Navbar></Navbar>
          <Component {...pageProps} />
          <Toaster></Toaster>
          <Footer></Footer>
        </AuthProvider>
      </div>

    </>
  );
}
