import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

function DoctorProfile({ doctor }) {
  return (
    <>
      <Head>
        <title>{doctor.name} - Doctor Profile | DocTime</title>
        <meta name="description" content={doctor.bio} />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={300}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-gray-500">{doctor.designation}</p>
            </div>
            <div className="mb-8">
              <div className="flex mb-2">
                <span className="text-gray-500 mr-2">Specialization:</span>
                <span>{doctor.specialization}</span>
              </div>
              <div className="flex mb-2">
                <span className="text-gray-500 mr-2">Experience:</span>
                <span>{doctor.experience}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-2">Degrees:</span>
                <span>{doctor.degrees.join(', ')}</span>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Bio</h2>
              <p className="text-gray-700">{doctor.bio}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Clinics</h2>
              <ul className="list-disc pl-6">
                {doctor.clinics.map((clinic, index) => (
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

export async function getServerSideProps(context) {
  // fetch doctor data from API based on the slug in the URL
  const { slug } = context.params;
  const res = await fetch(`https://example.com/api/doctors/${slug}`);
  const data = await res.json();

  return {
    props: {
      doctor: data,
    },
  };
}

export default DoctorProfile;
