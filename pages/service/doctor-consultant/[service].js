import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import slider from '../../../public/service-img/slider.jpg'
import Image from 'next/image';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const ServiceDetails = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [expert, setExpert] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const user = {}



    const { service } = router.query
    const date = format(selectedDate, 'PP')
    // console.log(date);

    // console.log(service);

    useEffect(() => {
        setLoading(true)
        fetch(`/api/get-services?slug=${service}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                return fetch(`/api/getExpert`)
            })
            .then((res) => res.json())
            .then((data) => {
                const allExpert = data.doctors.doctor
                const selectedExpert = allExpert.filter((expt) => {
                    return expt.slug === service;
                });
                setExpert(selectedExpert)

                setLoading(false)

            })
    }, [router])




    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No   data</p>
    return (
        <div>

            <h2 className='text-5xl text-center py-10 font-bold'>{data.service}</h2>


            <h2 className='text-center text-3xl font-semibold'>Book Appointment</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4">
                    <div className='flex justify-center' >
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                    <p className='text-center font-bold text-primary'>Available Appointments on {format(selectedDate, 'PP')}</p>
                </div>
                <div class="bg-gray-300 p-4">
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="name">
                                Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe"></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                                Service
                            </label>
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service">
                                <option>Select a service</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="time">
                                Time Slot
                            </label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="time">
                                <option>Select a time slot</option>
                                <option>9:00 AM - 10:00 AM</option>
                                <option>10:00 AM - 11:00 AM</option>
                                <option>11:00 AM - 12:00 PM</option>
                                <option>1:00 PM - 2:00 PM</option>
                                <option>2:00 PM - 3:00 PM</option>
                                <option>3:00 PM - 4:00 PM</option>
                            </select>
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>




        </div>
    );
};



export default ServiceDetails;