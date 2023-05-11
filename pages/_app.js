import AuthProvider from "@/context/AuthProvider";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {

  return (
    <>
      <AuthProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Toaster></Toaster>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}
