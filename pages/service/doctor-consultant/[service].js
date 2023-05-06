import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import slider from '../../../public/service-img/slider.jpg'
import Image from 'next/image';
import { useEffect } from 'react';
import 'react-day-picker/dist/style.css';
import DoctorCard from '@/components/service/doctor-card';


const ServiceDetails = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [expert, setExpert] = useState([])
    const [isLoading, setLoading] = useState(false)
    const user = {}



    const { service } = router.query
  
    // console.log(date);

    // console.log(service);



    const info = { image: 'image', name: 'name', title: 'title', specialty: 'speciality', experience: 'exp', rating: 'rating', numberOfRatings: 'num', fees: '200' }

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No   data</p>
    return (
        <div>
            <div className="relative">
                {/* <Image
                    className="object-cover w-full object-top h-56 sm:h-96"
                    src={slider}
                    alt="slider"
                ></Image> */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
            <h2 className='text-5xl text-center py-10 font-bold'>{data.service}</h2>

            <div>
                <DoctorCard info={info}></DoctorCard>
            </div>

            {/* <div className="flex flex-wrap justify-center">

                <div className="w-9/12   p-10">
                    <div className="      flex items-center justify-center">
                        <div className=" overflow-x-auto w-full  ">
                            <table className="table w-full ">
                                <thead>
                                    <tr>


                                        <th>Name</th>
                                        <th>Expert</th>
                                        <th>Appionment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        expert && (
                                            expert.map((e, idx) => {
                                                return <tr key={idx}>

                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle  rounded w-16 h-16">
                                                                    <img src={e.photo} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{e.firstName + ' ' + e.lastName}</div>
                                                                <div className="text-sm opacity-50">{e.education[0].degree_name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {e.service}
                                                        <br />
                                                        <span className="badge badge-ghost badge-sm">{e.License}</span>
                                                    </td>
                                                    <th>
                                                        <button className="btn btn-success btn-xs">Available</button>
                                                    </th>
                                                </tr>
                                            })
                                        )
                                    }



                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div> */}
           

            <div  >
                <h2 className='text-center text-3xl font-semibold'>Book Appointment</h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
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


export async function  getServerSideProps() {
    const res = await fetch(`/api/getExpert`);
    const data = await res.json();
    const allExpert = data.doctors.doctor;
    const selectedExpert = allExpert.filter((expt) => expt.slug === service);
  
    return {
      props: {
        expert: selectedExpert,
      },
    };
  }