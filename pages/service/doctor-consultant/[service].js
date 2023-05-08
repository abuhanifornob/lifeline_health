import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import slider from '../../../public/service-img/slider.jpg'
import Image from 'next/image';
import 'react-day-picker/dist/style.css';
import DoctorCard from '@/components/service/doctor-card';


const ServiceDetails = ( ) => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const user = {}
    // console.log(electedExpert);



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
  
            <div  >
                <h2 className='text-center text-3xl font-semibold'>Book Appointment</h2>

            </div>
            




        </div>
    );
};



export default ServiceDetails;


// export async function  getServerSideProps() {
//     const res = await fetch(`https://lifeline-health-rakibul181.vercel.app/api/expert`);
//     const data = await res.json();
//     const allExpert =  data.doctors.doctor;
//     console.log(data);
//     console.log(allExpert)
//     const selectedExpert = allExpert.filter((expt) => expt.slug === service);
  
//     return {
//       props: {
//         selectedExpert
//       },
//     };
    
//   }