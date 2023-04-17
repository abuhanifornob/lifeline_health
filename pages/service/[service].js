import { useRouter } from 'next/router';
import React, { useState } from 'react';
import slider from '../../public/service-img/slider.jpg'
import Image from 'next/image';
import { useEffect } from 'react';

const ServiceDetails = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [expert, setExpert] = useState([])
    const [isLoading, setLoading] = useState(false)

    const { service } = router.query
console.log(service);

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
    }, [])


    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No   data</p>
    return (
        <div>
            <div className="relative">
                <Image
                    className="object-cover w-full object-top h-56 sm:h-96"
                    src={slider}
                    alt=""
                ></Image>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
            <h2 className='text-5xl text-center py-10 font-bold'>{data.service}</h2>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-8 md:px-10">
                    <div className="  md:h-auto  items-center justify-center">
                        <p>{data.description}</p>
                        {data.subDescription && (
                            data.subDescription.map((e, idx) => {
                                return (
                                    <div className='py-3' key={idx}>
                                        <h2 className='text-2xl font-bold'>{e[0]}</h2>
                                        <p>{e[1]}</p>
                                    </div>
                                )
                            })
                        )}

                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="    md:h-auto flex items-center justify-center">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>

                                
                                        <th>Name</th>
                                        <th>Expert</th>
                                        <th>Appionment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        expert && (
                                            expert.map((e, idx) => {
                                                return <tr>

                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle  rounded w-16 h-16">
                                                                    <img src={e.photo} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{e.firstName+' '+e.lastName}</div>
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
            </div>

        </div>
    );
};

export default ServiceDetails;