import { useRouter } from 'next/router';
import React, { useState } from 'react';
import slider from '../../public/service-img/slider.jpg'
import Image from 'next/image';
import { useEffect } from 'react';

const ServiceDetails = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    const { service } = router.query


    useEffect(() => {
        setLoading(true)
        fetch(`/api/get-services?slug=${service}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
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
                <div className="w-full md:w-1/2 p-4">
                    <div className="  h-64 md:h-auto  items-center justify-center">
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
                    <div className="  h-64 md:h-auto flex items-center justify-center">
                        <div className="overflow-x-hidden w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th>Appionment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>



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