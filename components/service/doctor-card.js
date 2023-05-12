import React, { useContext } from 'react';
import AppointmentModal from '../booking/AppiontmentModal';
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link';

const DoctorCard = ({info}) => {
    console.log(info);
    const {imgUrl,name,fees,experience,studyingInstitute,specialization,workplace,serviceDatails,_id,timeSlot}= info
    const serviceInfo ={
        serviceDatails,
        doctorID:_id,
        fees,
        doctorName:name,
        timeSlot:timeSlot
    }
    return (
        <div className="   rounded-lg  my-4 p-4 lg:p-0 grid justify-center" data-aos="zoom-in" data-aos-delay="500">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:w-[1100px] justify-center justify-items-center  bg-blue-100  border-2 border-gray-300 shadow-md">
                <div className=" p-4 lg:p-8 flex gap-3 items-center">
                    <img src= { imgUrl} alt={name} className="rounded-full h-32 w-32 mx-auto lg:mx-0 lg:float-left mr-6" />
                    <div className="text-center lg:text-left  ">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-gray-600"> MBBS</p>
                        <p className="text-gray-600"> {specialization}</p>
                        <p className="text-black font-semibold">{studyingInstitute}</p>
                    </div>
                </div>
                <div className="  p-4 lg:p-8">
                    <h2 className="text-xl font-semibold">{workplace}</h2>
                    <p className="text-gray-600"> {experience}</p>
                    <Link href={`../doctors-profile/${_id}`}  className="text-2xl font-semibold mt-4">Profile</Link>
                    <div className="flex items-center mt-2">
                         <AiFillStar className='text-amber-600'></AiFillStar>
                         <AiFillStar className='text-amber-600'></AiFillStar>
                         <AiFillStar className='text-amber-600'></AiFillStar>
                         <AiFillStar className='text-amber-600'></AiFillStar>
                         <AiFillStar className='text-amber-600'></AiFillStar>
                        <p className="text-gray-600 ml-2">  32</p>
                    </div>
                </div>
                <div className=" p-4 lg:p-8">
                    <h2 className="text-2xl font-semibold">${fees}</h2>
                    <p className="text-gray-600 mb-4"> </p>
                    <label htmlFor="booking" className="bg-blue-500 text-white rounded-lg px-4 py-2  ">Appointment</label>


                <AppointmentModal serviceInfo={serviceInfo} ></AppointmentModal>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;