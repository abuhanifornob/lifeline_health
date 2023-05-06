import React from 'react';

const Banner = () => {
    return (
        <div>
           

    {/* <!-- Testimonial Start --> */}
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="text-center">
                <h6 class="text-primary text-uppercase">// Testimonial //</h6>
                <h1 class="mb-5">Our Clients Say!</h1>
            </div>
            <div class="owl-carousel testimonial-carousel position-relative">
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg"
                        style="width: 80px; height: 80px;"/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg"
                        style="width: 80px; height: 80px;"/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg"
                        style="width: 80px; height: 80px;"/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg"
                        style="width: 80px; height: 80px;"/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End -->  */}
        </div>
    );
};

export default Banner;

// import React from "react";

// import AnimatedText from "react-animated-text-content";

// import { useState } from "react";

// import bannewrlogo from "../../public/bannerlogo1.png";

// const Banner = () => {
//   return (
//     <div className=" max-w-screen-xl mx-auto ">
//       <div className="grid grid-cols-1 md:grid-cols-2 content-center min-h-screen">
//         <div className=" self-center">
//           <AnimatedText
//             type="words" // animate words or chars
//             animation={{
//               x: "200px",
//               y: "-20px",
//               scale: 1.1,
//               ease: "ease-in-out",
//             }}
//             animationType="lights"
//             interval={0.06}
//             duration={0.8}
//             tag="p"
//             className={`animated-paragraph text-center lg:text-start text-5xl font-bold flex text-blue-500 mb-4`}
//             includeWhiteSpaces
//             threshold={0.1}
//             rootMargin="20%"
//           >
//             Lifeline Health
//           </AnimatedText>
//           <h1 className="text-4xl font-bold   text-justify">
//             "Health is Wealth" The Complete Health Solution.We provide{" "}
//             <span className="text-blue-500">any</span> kind of{" "}
//             <span className="text-blue-500">Health</span> solution{" "}
//           </h1>{" "}
//           <br />
//           <Link href={"/"} className="btn btn-primary ">
//             Get Starte
//           </Link>
//         </div>
//         <div className="place-self-center">
//           <Image
//             src={bannewrlogo}
//             alt="health logo"
//             width={1000}
//             className={styles.animate}
//           ></Image>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
