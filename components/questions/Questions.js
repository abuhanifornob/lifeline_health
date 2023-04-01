import React from 'react';
import Question from './Question';

const Questions = () => {
    const questionSet = [
        {
            id: 1,
            question: 'Why should I take service from here?',
            answer: 'Through this you can get services from specialist doctors at low cost at home'

        },
        {
            id: 2,
            question: 'What services can I provide from here?',
            answer: 'We have expert doctors. You will be advised by expert doctor regarding the problem you approach us for.'

        },
        {
            id: 3,
            question: 'How much money will it take to consult a doctor?',
            answer: 'You can meet the doctor at very low cost.'

        },
        {
            id: 4,
            question: "How will I pay the money?",
            answer: 'You can pay money in any Bangladesh payment system like Bikash, Rocket, Dutch-Bangla, Sure Cash, Nagot etc.'

        },
        {
            id: 5,
            question: "Will I be given a prescription?",
            answer: 'Yes, you will be given a prescription'

        },
        {
            id: 6,
            question: 'Why should I take service from here?',
            answer: 'Through this you can get services from specialist doctors at low cost at home'

        },
        {
            id: 7,
            question: 'What services can I provide from here?',
            answer: 'We have expert doctors. You will be advised by expert doctor regarding the problem you approach us for.'

        },
        {
            id: 8,
            question: 'How much money will it take to consult a doctor?',
            answer: 'You can meet the doctor at very low cost.'

        },
        {
            id: 9,
            question: "How will I pay the money?",
            answer: 'You can pay money in any Bangladesh payment system like Bikash, Rocket, Dutch-Bangla, Sure Cash, Nagot etc.'

        },
        {
            id: 10,
            question: "Will I be given a prescription?",
            answer: 'Yes, you will be given a prescription'

        },
    ]
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-10">
                    <img className="object-cover object-center rounded" alt="hero" src={"/question.svg"} />
                    <h3 className='text-4xl text-gray-800 font-bold my-3'>Frequently asked questions <br />
                        <div className='mt--4'><span className='text-2xl text-green-800 font-bold \'>Answer the question</span></div></h3>
                    <p className='text-md text-gray-900 font-serif'>We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.</p>
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className='overflow-y-scroll h-96'>
                        {
                            questionSet.map(ques => <Question
                                key={ques.id}
                                ques={ques}
                            >

                            </Question>)
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Questions;