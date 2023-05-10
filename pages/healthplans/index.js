import HealthplanCard from '@/components/HealthPlan/HealthplanCard';
import React from 'react';

const HealthPlanCards = () => {
    const datas = [
        {
          name: "DocTime Care",
          price: 180,
          id: "01",
          img: "",
          chacegory: "For 1 adult",
          des1: "Unlimited consultations with our experienced on duty General Physician & Gynaecology Doctors",
          des2: "Upto 40% discount on home diagnostic tests.",
        },
        {
          name: "DocTime Family Care",
          price: 315,
          id: "02",
          img: "",
          chacegory: "For 4 family members",
          des1: "Unlimited consultations with our experienced on duty General Physician, Pediatric & Gynaecology Doctors",
          des2: "Upto 40% discount on home diagnostic tests.",
        },
        {
          name: "DocTime Family Care +",
          price: 405,
          id: "03",
          img: "",
          chacegory: "For 4 family member",
          des1: "Unlimited consultations with our experienced on duty General Physician, Pediatric & Gynaecology Doctors",
          des2: "Upto 40% discount on home diagnostic tests.",
        },
        {
          name: "DocTime Family Care ++",
          price: 495,
          id: "04",
          img: "",
          chacegory: "For 4 family members",
          des1: "Unlimited consultations with our experienced on duty General Physician & Gynaecology Doctors",
          des2: "Upto 40% discount on home diagnostic tests.",
        },
      ];
    return (
        <div >
            <h1 className="text-5xl font-bold text-center lg:text-6xl mt-24">
          LifeLine Health Care and Protect Plans
        </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto w-3/4 justify-items-center gap-16 my-24'>
            {
                datas.map((data)=><HealthplanCard
                key={data.id}
                data={data}
                ></HealthplanCard>)
            }
        </div>  
        </div>
        
    );
};

export default HealthPlanCards;