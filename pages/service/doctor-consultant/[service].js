import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import 'react-day-picker/dist/style.css';
import DoctorCard from '@/components/service/doctor-card';
import axios from 'axios';
import { useEffect } from 'react';
import { AuthContext } from '@/context/AuthProvider';

const ServiceDetails = ({ doctors }) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [expert, setExpert] = useState(null)
    const { user } = useContext(AuthContext);

    console.log(expert);

    const { service } = router.query;
    console.log(service);

    useEffect(() => {

        const expertData = doctors.filter((expt) => expt.serviceDatails.slug === service);
        setExpert(expertData)
        console.log(expert);
    }, [router])



   

    if (isLoading) return <p>Loading...</p>;
    if (!expert) return <p>No data</p>;
    return (
        <div>
            <div className="relative">

                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
            <h2 className="text-5xl text-center py-10 font-bold">{service}</h2>

            <div>{expert && expert.map((DocInfo, idx) => (
                <DoctorCard service={service} key={idx} info={DocInfo}></DoctorCard>
            ))}

            </div>
        </div>
    );
};

export default ServiceDetails;

export async function getServerSideProps() {
    try {
        const response = await axios.get(
            'https://lifeline-health-rakibul181.vercel.app/api/doctors'
        );
        const doctors = response.data;
        console.log(doctors);

        return {
            props: {
                doctors,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                doctors: [],
            },
        };
    }
}
