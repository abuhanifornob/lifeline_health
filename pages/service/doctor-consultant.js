import React from 'react';
import { TbDentalBroken, TbYoga } from "react-icons/tb";
import { GiStethoscope, GiBrain, GiMeditation, GiLiver, GiNoseSide, GiTambourine,GiCancer, GiKidneys } from "react-icons/gi";
import { MdFemale, MdBloodtype, MdFamilyRestroom } from "react-icons/md";
import { FaChild, FaRegEye, FaBone } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiAccessibility } from "react-icons/bi";
import { BsHeartPulseFill, BsLungsFill } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import ServiceCard from '@/components/service/service-card';

const Services = () => {
    const services = [
        {
            id: '01',
            name: 'Medicine / General Physician',
            slug: 'medicine',
            icon: <GiStethoscope></GiStethoscope>,
            title: "Cold, Flu, Fovor, Infections, Headaches or any other general health issues"
        },
        {
            id: '02',
            name: 'Gynecology',
            slug: 'gynecology',
            icon: <MdFemale></MdFemale>,
            title: "Any women's health related issues including pregnancy, menstruation, fertility issues, hormone disorders etc."

        },
        {
            id: '03',
            name: 'Child Care / Pediatrics',
            slug: 'child-care',
            icon: <FaChild></FaChild>,
            title: "Any children's health related issues including physical, behavior and mental health."
        },
        {
            id: '04',
            name: ' Skin / Dermatology',
            slug: 'skin',
            icon: <TbYoga></TbYoga>,
            title: "Treatment of diseases related to skin, hair and nails and some cosmetic problems."
        },
        {
            id: '05',
            name: 'dentist',
            slug: 'dentist',
            icon: <TbDentalBroken></TbDentalBroken>,
            title: "With reconstructive dentistry, we can repaire and restore the beauty of your smile."
        },
        {
            id: '06',
            name: 'Mental Helth',
            slug: 'mental-helth',
            icon: <RiMentalHealthLine></RiMentalHealthLine>,
            title: "Diagnosis, prevention, and treatment of mental disorders related to mood, behaviour, cognition, and perceptions. "
        },
        {
            id: '07',
            name: 'Nutrition & Diet Specialist',
            slug: 'nutrition-diet-specialist',
            icon: <IoFastFoodOutline></IoFastFoodOutline>,
            title: "developing customized nutrition plans, offering nutritional counseling, and more to promote optimal health through individualized nutrition and dietary recommendations."
        },
        {
            id: '08',
            name: 'Eye / Ophthalmology',
            slug: 'ophthalmology',
            icon: <FaRegEye></FaRegEye>,
            title: " Diagnosis, treatment of eye disorders"
        },
        {
            id: '09',
            name: 'Complementary and Alternative Medicine',
            slug: 'alternative-medicine',
            icon: <GiMeditation></GiMeditation>,
            title: "Various healing modalities and therapies to re-harmonizing your body on your body’s terms, instead of mainstream treatment"
        },
        {
            id: '10',
            name: 'Brain / Neurology',
            slug: 'neurology',
            icon: <GiBrain></GiBrain>,
            title: "Diagnosis, treatment for disease involving the central and peripheral nervous systems."
        },
        {
            id: '11',
            name: 'Orthopedics',
            slug: 'orthopedics',
            icon: <FaBone></FaBone>,
            title: "Bones, muscles, joints, tendons, ligaments."
        },
        {
            id: '12',
            name: 'Gastroenterology',
            slug: 'gastroenterology',
            icon: <GiLiver></GiLiver>,
            title: "Diseases affecting the gastrointestinal tract, which include the organs from mouth into anus, along the alimentary canal..."
        },
        {
            id: '13',
            name: 'Diabetes / Endocrinology',
            slug: 'endocrinology',
            icon: <MdBloodtype></MdBloodtype>,
            title: "Treatment of diseases related to problems with hormone."
        }
        ,
        {
            id: '14',
            name: 'Heart / Cardiology',
            slug: 'cardiology',
            icon: <BsHeartPulseFill></BsHeartPulseFill>,
            title: "Diagnosis, treatment of congenital heart defects, coronary artery disease, heart failure, and valvular heart disease."
        }
        ,
        {
            id: '15',
            name: 'Ear, Nose and Throat / ENT',
            slug: 'ent',
            icon: <GiNoseSide></GiNoseSide>,
            title: "Diagnosis, evaluation and treatment of diseases of the ear, nose and throat regions.."
        }
        ,
        {
            id: '16',
            name: 'Urology',
            slug: 'urology',
            icon: <GiTambourine></GiTambourine>,
            title: "Diagnosis and treatment of diseases of the male and female urinary-tract system."
        },
        {
            id: '17',
            name: 'Lungs / Pulmonology',
            slug: 'pulmonology',
            icon: <BsLungsFill></BsLungsFill>,
            title: "Diagnosis, treatment and prevention of diseases affecting the lungs and respiratory tract."
        },
        {
            id: '18',
            name: 'Cancer / Oncology',
            slug: 'oncology',
            icon:  <GiCancer></GiCancer>,
            title: "Oncology is a branch of medicine that deals with the prevention, diagnosis, and treatment of cancer"
        },
        {
            id: '19',
            name: 'Kidney / Nephrology',
            slug: 'nephrology',
            icon: <GiKidneys></GiKidneys>,
            title: "Diagnosis, treatment of kidney diseases."
        },
        {
            id: '20',
            name: 'Family Medicine',
            slug: 'family-medicine',
            icon: <MdFamilyRestroom></MdFamilyRestroom>,
            title: "Continuing and comprehensive health care for the individual and family across all ages, genders, diseases, and parts of ..."
        },
        {
            id: '21',
            name: 'Physical Medicine & Rehabilitation',
            slug: 'rehabilitation',
            icon: <BiAccessibility></BiAccessibility>,
            title: "Enhance and restore functional ability and quality of life to people with physical impairments or disabilities."
        },


    ]
    return (
        <div className=' max-w-screen-xl md:mx-auto mx-4 my-8'>
            <h1 className='text-4xl py-5 text-center font-extrabold'>Please select a speciality</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center '>
                {
                    services.map((service, id) => <ServiceCard key={id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;