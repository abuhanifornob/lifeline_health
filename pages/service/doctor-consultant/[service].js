import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';
import 'react-day-picker/dist/style.css';
import DoctorCard from '@/components/service/doctor-card';
import axios from 'axios';
import { useEffect } from 'react';
import withAuth from '@/pages/withAuth/withAuth';

const ServiceDetails = ({ experts }) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [expert, setExpert] = useState(null)
    const user = {};
    console.log(expert);

    const { service } = router.query;
    console.log(service);

    useEffect(() => {

        const expertData = experts.filter((expt) => expt.doctors.doctor[0].slug === service);
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

export default withAuth(ServiceDetails);

export async function getServerSideProps() {
    try {
        const response = await axios.get(
            'https://lifeline-health-rakibul181.vercel.app/api/expert'
        );
        const experts = response.data;
        console.log(experts);

        return {
            props: {
                experts,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                experts: [],
            },
        };
    }
}
