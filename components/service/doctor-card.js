import React from 'react';
import AppointmentModal from '../booking/AppiontmentModal';

const DoctorCard = ({ image, name, title, specialty, experience, rating, numberOfRatings, fees }) => {
    return (
        <div className="   rounded-lg  p-4 lg:p-0 grid justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:w-[1100px] justify-center justify-items-center  bg-blue-100  border-2 border-gray-300 shadow-md">
                <div className=" p-4 lg:p-8 flex gap-3 items-center">
                    <img src='https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/73771/profile_photos/dlRSNss3ELcRYe4O0n7GzOXquTjw9DWtTyF1QAnY.jpg' alt={name} className="rounded-full h-32 w-32 mx-auto lg:mx-0 lg:float-left mr-6" />
                    <div className="text-center lg:text-left  ">
                        <h2 className="text-xl font-semibold">{name} Name of Doctor</h2>
                        <p className="text-gray-600">{title}MBBS</p>
                        <p className="text-gray-600"> specialist</p>
                        <p className="text-black font-semibold">{specialty}Medicine</p>
                    </div>
                </div>
                <div className="  p-4 lg:p-8">
                    <h2 className="text-xl font-semibold">Current Hospitsal</h2>
                    <p className="text-gray-600">{experience}4 years</p>
                    <h2 className="text-2xl font-semibold mt-4">Rating</h2>
                    <div className="flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10 14.016l3.782 2.242-.957-4.67 3.22-2.788-4.458-.365L10 5.677 8.414 9.435l-4.458.365 3.22 2.788-.957 4.67L10 14.016z" clipRule="evenodd" />
                        </svg>
                        <p className="text-gray-600 ml-2">{rating} ({numberOfRatings} ratings)</p>
                    </div>
                </div>
                <div className=" p-4 lg:p-8">
                    <h2 className="text-2xl font-semibold">$300</h2>
                    <p className="text-gray-600 mb-4">{fees}</p>
                    <label htmlFor="booking" className="bg-blue-500 text-white rounded-lg px-4 py-2  ">Appointment</label>

                <AppointmentModal></AppointmentModal>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;