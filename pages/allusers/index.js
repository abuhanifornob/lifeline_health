import Image from 'next/image';
import React from 'react';

const AllUsers = ({users}) => {
    return (
        <div>
            {users.map((user)=><div
            key={user._id}
            className='w-3/4 mx-auto my-24 '
            >
                <div className='w-2/4 mx-auto bg-blue-100 p-6 flex rounded-md'>
                <Image src={user.userImg} height={200} width={200}
                className='w-20 mr-4 rounded-md'
                ></Image>
                <div>
                <h1>{user.userName}</h1>
                <h1>{user.userPhone}</h1>
                <h1>{user.userEmail}</h1> 
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

export default AllUsers;
export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
  
    return {
      props: {
        users
      },
    };
  }