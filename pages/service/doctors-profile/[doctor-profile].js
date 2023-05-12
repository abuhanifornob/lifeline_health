import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function DoctorProfile({ doctors }) {
  const [doctor, setDoctor] = useState(null)
  const router = useRouter();
  const { slug } = router.query;
  console.log(doctors);
  useEffect(() => {

    const findDoctor = doctors.find((doc) => doc?._id === slug);
    setDoctor (findDoctor)
    console.log(doctor);
}, [router.query])

  return (
    <>
      <Head>
        <title>{'doctor.name'} - Doctor Profile | DocTime</title>
        <meta name="description" content={"doctor.bio"} />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src= ''
                alt={"doctor.name"}
                width={300}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2">{'doctor.name'}</h1>
              <p className="text-gray-500">{'doctor.designation'}</p>
            </div>
            <div className="mb-8">
              <div className="flex mb-2">
                <span className="text-gray-500 mr-2">Specialization:</span>
                <span>{'doctor.specialization'}</span>
              </div>
              <div className="flex mb-2">
                <span className="text-gray-500 mr-2">Experience:</span>
                <span>{'doctor.experience'}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-2">Degrees:</span>
                <span>{"doctor.degrees.join(', ')"}</span>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Bio</h2>
              <p className="text-gray-700">{"doctor.bio"}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Clinics</h2>
              <ul className="list-disc pl-6">
                {doctor?.clinics.map((clinic, index) => (
                  <li key={index} className="text-gray-700">
                    {clinic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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


export default DoctorProfile;
