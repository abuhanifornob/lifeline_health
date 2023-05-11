import React from 'react';
import { BsCheckLg } from "react-icons/bs";
const HealthplanCard = ({data}) => {
    const {name,price,id,chacegory,des1,des2}=data
    return (
        <div className="bg-white dark:bg-gray-900 ">
      <div className="container  w-full mx-auto">
        

        <div className="">
          <div className="card card-compact w-full mx-auto bg-base-100 shadow-md p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-blue-500">
                  {name}
                </h2>
                <p className="">
                  <span className="text-xl font-semibold">৳</span>
                  <span className="text-2xl font-bold">{price}</span>
                  /monthly
                </p>
                <p className="text-sm">For 1 adult</p>
              </div>
              <figure>
                <img
                  className="w-12"
                  src="https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/images/subscription/icon/IFgOaFB9Blr8MlO0W4o9LKOLiVh5qEMN2RH5xWLX.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZUG2TYIWLXBZGRKF%2F20230505%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20230505T131229Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Signature=d5c42ac906a90af61e3f6712bef4a7c8edcb74e499d544cc441c256679e711da"
                  alt="icon"
                />
              </figure>
            </div>
            <div className="card-body">
              <div className="flex justify-around gap-2">
                <p className="text-lg font-bold">
                  <BsCheckLg />
                </p>
                <p>
                  {des1}
                </p>
              </div>

              <div className="flex justify-around gap-2">
                <p className="text-lg font-bold">
                  <BsCheckLg />
                </p>
                <p>
                  {des2}
                </p>
              </div>

              <button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HealthplanCard;