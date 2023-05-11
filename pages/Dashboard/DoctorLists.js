import React from 'react';

const DoctorLists = ({ dcInfo }) => {
    console.log(dcInfo);
    const { name, phone, experience, about, email, imgUrl, specialization } = dcInfo;
    return (

        <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={imgUrl} />
                <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">{name}</h2>
                    <h3 class="text-gray-500 mb-3">{specialization}</h3>
                    <p class="mb-4">{about}</p>
                    <p class="mb-4">{experience}</p>
                    <span class="">
                        <a class="text-gray-500">
                            <p>Email:{email}</p>
                        </a>

                        <a class="text-gray-500">
                            <p>Phone:{phone}</p>
                        </a>


                    </span>
                </div>
            </div>
        </div>

    );
};

export default DoctorLists;