import React from 'react';

const Question = ({ques}) => {
    const {id,question,answer}=ques;
    console.log(ques);
    return (

    <div tabIndex={id} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full">
            <div className="collapse-title text-xl font-medium ">
                    {question}
                </div>
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
       






    );
};

export default Question;