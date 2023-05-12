import Image from 'next/image';
import React from 'react';

const AllDoctors = ({users}) => {
    return (
        <div>
            {users.map((user)=><div
            key={user._id}
            className='w-3/4 mx-auto my-24 '
            >
                <div className='w-2/4 mx-auto bg-blue-100 p-6 flex rounded-md'>
                <Image src={user.imgUrl} height={200} width={200}
                className='w-48 mr-4 rounded-md'
                ></Image>
                <div>
                <h1>{user.name}</h1>
                <h1>{user.phone}</h1>
                <h1>{user.email}</h1> 
                <h1>{user.studyingInstitute}</h1> 
                <h1>{user.specialization}</h1>  
                <h1>{user.qulification}</h1> 
                <h1>{user.degrees}</h1> 
                <h1>{user.experience}</h1> 
                <h1>{user.fees}</h1> 
                </div>
                <div className='inline ml-6'>
                    <button className='bg-blue-500 rounded-md px-3 text-lg text-white mb-4'>Delete</button>
                    <br/>
                    <button className='bg-blue-500 rounded-md px-3 text-lg text-white'>Verify</button>
                </div>
                
                </div>
            </div>)}
        </div>
    );
};

export default AllDoctors;
export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/doctors')
    const users = await res.json()
  
    return {
      props: {
        users
      },
    };
  }