import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import DoctorCard from '@/components/service/doctor-card';
import axios from 'axios';
import { useEffect } from 'react';
import withAuth from '@/pages/withAuth/withAuth';
import { AuthContext } from '@/context/AuthProvider';

const ServiceDetails = ({ doctors }) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [sDoctors, setSDoctors] = useState(null)
    const { user } = useContext(AuthContext);

    console.log(sDoctors);

    const { service } = router.query;
    console.log(service);

    useEffect(() => {

        const selectedDoctor = doctors.filter((expt) => expt?.serviceDatails?.slug === service);
        setSDoctors(selectedDoctor)
        console.log(sDoctors);
    }, [router.query])





    if (isLoading) return <p>Loading...</p>;
    if (!sDoctors) return <p className='tex-center, text-5xl font-bold '>No doctor In this services</p>;;
    return (
        <div>
            <div className="relative">

                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
            <h2 className="text-5xl text-center py-10 font-bold">{service}</h2>

            <div>{sDoctors && sDoctors.map((docInfo, idx) => (
                <DoctorCard key={idx} info={docInfo}></DoctorCard>
            ))}

            </div>
        </div>
    );
};

export default withAuth(ServiceDetails);

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
                doctors: [null],
            },
        };
    }
}
