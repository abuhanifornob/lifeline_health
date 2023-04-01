import Footer from "@/components/Footer";

import Head from "next/head";
import { Inter } from "next/font/google"
import Service from "@/components/service/service";
import Questions from "@/components/questions/Questions";
import TakeService from "@/components/TakeService";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/navbar/Navbar";
import Blogs from "@/components/blog_section/Blogs";
import Navbar from "@/components/navbar/Navbar";
import Questions from "@/components/questions/Questions";
import TakeService from "@/components/TakeService";
import ContactForm from "@/components/ContactForm";
import Service from "@/components/service/service";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>"HealthHub" let's lead a healthy life </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Service></Service>
      <Questions></Questions>
      <TakeService></TakeService>
      <Blogs></Blogs>
      <ContactForm></ContactForm>
      <Footer></Footer>


    </>
  );
}
