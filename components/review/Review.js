import React from 'react';

import Image from 'next/image';

import ReviewCard from './ReviewCard';

import rakibul from "/public/Rakibul.png";
import arnob from "/public/arbob.png";
import dada from "/public/baidyanath.png";
// import shoaib from "/public/shoaib.jfif";


const Review = () => {
    const reviews = [
        {
            name: 'Rakib Khan',
            image: rakibul,
            reviewDetails: "Take Consultation by Video call and Doctor will prescribe the medicine "
        },
        {
            name: 'Azizul Khan',
            image: arnob,
            reviewDetails: "developing customized nutrition plans, offering nutritional counseling, and more to promote optimal health through individualized nutrition and dietary recommendations."
        },
        {
            name: 'Abu Hanif Arnob',
            image: arnob,
            reviewDetails: "Personalized workout plans, group fitness classes, fitness coaching, nutritional support, injury prevention education, and specialized training to help individuals achieve their fitness goals"
        },
        {
            name: 'Sohaib Kahan',
            image: rakibul,
            reviewDetails: " Yoga sessions , meditation instruction, breathwork techniques, and guidance on yoga philosophy to promote physical, mental, and emotional well-being through the practice of yoga."
        },
        {
            name: 'Ariful islam Arif',
            image: dada,
            reviewDetails: "With reconstructive dentistry, we can repaire and restore the beauty of your smile."
        },
        {
            name: 'Bnath Dada',
            image: dada,
            reviewDetails: "Counseling, psychotherapy, and mental health assessments to help individuals overcome emotional and psychological difficulties, improve their mental health and well-being, and enhance their quality of life."
        },


    ]
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <Image src={"/review.svg"} width={200} height={200} alt='review' className='p-0 m-0'></Image>
                <h1 className='text-4xl py-5 text-center font-extrabold'>People's opinions about our service</h1>
                <h3 className='text-xl py-5 text-center font-extrabold mt-[-10px]'>All patients have given their valuable feedback to Lifeline Health</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
                {
                    reviews.map((review, id) => <ReviewCard
                        key={id}
                        review={review}
                    />

                    )
                }
            </div>
        </div>
    );
};

export default Review;