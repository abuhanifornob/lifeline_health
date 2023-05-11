import BmiCalculator from '@/components/BmiCal/BmiCalculator';
import HealthCheckCalculator from '@/components/HealthCal/HealthCalculator';
import WorkoutCalculator from '@/components/WorkoutCal/WorkoutCalculator';
import React from 'react';

const index = () => {
    return (
        <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto mt-24">
        <div className="col-span-1 w-full  ">
          <WorkoutCalculator></WorkoutCalculator>
        </div>
        <div className="col-span-1 w-full  ">
          {/* <div className="grid grid-cols-4"> */}

          <div className="col-span-2 w-full  ">
            <BmiCalculator></BmiCalculator>
          </div>
          <div className="col-span-2 w-full  ">
            <HealthCheckCalculator></HealthCheckCalculator>
          </div>
          {/* </div> */}
        </div>
      </div>

    );
};

export default index;