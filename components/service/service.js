import React from "react";
import ServiceCard from "./service-card";
import { TbDentalBroken, TbYoga } from "react-icons/tb";
import { GiStethoscope } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";

const Service = () => {
    const services = [
        {
            id:'01',
            name: 'Doctor Consultation',
            slug: 'doctor-consultation',
            icon: <GiStethoscope></GiStethoscope>,
            title: "Take Consultation by Video call and Doctor will prescribe the medicine "
        },
        {
            id:'02',
            name: 'Nutrition & Diet Specialist',
            slug: 'nutrition-diet-specialist',
            icon: <IoFastFoodOutline></IoFastFoodOutline>,
            title: "developing customized nutrition plans, offering nutritional counseling, and more to promote optimal health through individualized nutrition and dietary recommendations."
        },
        {
            id:'03',
            name: 'Gym & Fitness Expert',
            slug: 'gym-fitness-expert',
            icon: <IoIosFitness></IoIosFitness>,
            title: "Personalized workout plans, group fitness classes, fitness coaching, nutritional support, injury prevention education, and specialized training to help individuals achieve their fitness goals"
        },
        {
            id:'04',
            name: 'Yoga Trainer',
            slug: 'yoga-trainer',
            icon: <TbYoga></TbYoga>,
            title: " Yoga sessions , meditation instruction, breathwork techniques, and guidance on yoga philosophy to promote physical, mental, and emotional well-being through the practice of yoga."
        },
        {
            id:'05',
            name: 'dentist',
            slug: 'dentist',
            icon: <TbDentalBroken></TbDentalBroken>,
            title: "With reconstructive dentistry, we can repaire and restore the beauty of your smile."
        },
        {
            id:'06',
            name: 'Mental Helth',
            slug: 'mental-helth',
            icon: <RiMentalHealthLine></RiMentalHealthLine>,
            title: "Counseling, psychotherapy, and mental health assessments to help individuals overcome emotional and psychological difficulties, improve their mental health and well-being, and enhance their quality of life."
        },


    ]
    return (
        <div className=' max-w-screen-xl md:mx-auto mx-4'>
            <h1 className='text-4xl py-5 text-center font-extrabold'>OUR SERVICES</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center '>
                {
                    services.map((service, id) => <ServiceCard key={id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
