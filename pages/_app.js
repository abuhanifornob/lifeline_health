import AuthProvider from "@/context/AuthProvider";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (
    <>

      <div className="scrollBar">
        <Head>
          <link rel="stylesheet" href="/css/theme.css" />
          <script src="https://kit.fontawesome.com/48706b2f58.js" crossorigin="anonymous"></script>
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
