import Service from "@/components/service/service";
import Questions from "@/components/questions/Questions";
import TakeService from "@/components/TakeService";
import Review from "@/components/review/Review";
import Banner from "@/components/Banner/Banner";
import BmiCalculator from "@/components/BmiCal/BmiCalculator";
import HealthCheckCalculator from "@/components/HealthCal/HealthCalculator";
import WorkoutCalculator from "@/components/WorkoutCal/WorkoutCalculator";
import BlogsCards from "@/components/BlogsCards/BlogsCards";
import Head from "next/head";
import Contact from "./contact";
import Script from 'next/script';
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import CarouselSlider from "@/components/Banner/Carousal";
import Carousal from "@/components/Banner/Carousal";
export default function Home({ blogs }) {
  const mystyle = {
    margin: "100px",
    textAlign: "center",
    fontSize: "100px",
  };

  return (
    <>
      <Head>
        <title>"LifeLine Health" let's lead a healthy life </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar></Navbar> */}
      {/* <Banner></Banner> */}
      <Carousal></Carousal>
      
      <Service></Service>
     
      <TakeService></TakeService>

      <div>
        <h1
          className="text-center text-4xl font-bold mt-24"
          style={{ color: "#254747" }}
        >
          Featured <span className="text-blue-500">blog</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-12 mb-24 ">
          {blogs.map(
            (blog, index) =>
              index < 3 && <BlogsCards key={blog._id} blog={blog}></BlogsCards>
          )}
        </div>
      </div>

      <Review></Review>
      <Contact></Contact>
      {/* <ContactForm></ContactForm> */}
      {/* This is Foolter Section */}
      {/* <Footer></Footer> */}
      {/* chat support messenger  */}
      <Script src="/chat_support/chat_support.js" strategy="lazyOnload"/>
    </>
  );
}

export async function getServerSideProps() {

  const res = await fetch('https://lifeline-health-neon.vercel.app/api/blogs')
  const blogs = await res.json()

  return {
    props: {
      blogs
    },
  };
}
