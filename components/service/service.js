import React from "react";
import { GiStethoscope } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import ServicesHome from "./service-home";

const Service = () => {
    const services = [
        {
            id:'01',
            name: 'Doctor Consultation',
            slug: 'doctor-consultant',
            icon: <GiStethoscope></GiStethoscope>,
            title: "Take Consultation by Video call and Doctor will prescribe the medicine "
        },
        {
            id:'02',
            name: 'Health Plane',
            slug: 'health-plane',
            icon: <MdHealthAndSafety></MdHealthAndSafety>,
            title: "24/7 qualified doctor's consultation facility for your family. Also big save on diagnostic tests,medicine and healthcare product purchases with life & health insurance coverage"
        },
         
        
         
         


    ]
    return (
        <div className=' max-w-screen-xl md:mx-auto mx-4' data-aos="zoom-in" data-aos-delay="500" >
            <h1 className='text-4xl py-5 text-center font-extrabold'>OUR SERVICES</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center ' data-aos="zoom-in"
            data-aos-offset="500">
                {
                    services.map((service, id) => <ServicesHome  key={id} service={service}></ServicesHome>)
                }
            </div>
        </div>
    );
};

export default Service;
