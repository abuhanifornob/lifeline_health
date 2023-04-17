import React, { useState } from "react";

const BmiCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const calculateBmi = () => {
        if (weight && height) {
            const heightInMeter = height / 100; // Convert height from cm to meter
            const bmiValue = weight / (heightInMeter * heightInMeter);
            setBmi(bmiValue.toFixed(2));
        } else {
            setBmi(null);
        }
    };

    return (
        <div className="w-3/4 mx-auto mt-24">
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Find Out You BMI!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Weight: (Kg)</span>
                                </label>
                                <input type="number" value={weight} onChange={handleWeightChange}  placeholder="Weight" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height: (Cm)</span>
                                </label>
                                <input type="number" value={height} onChange={handleHeightChange} placeholder="Height" className="input input-bordered" />
                                {bmi && (
                    <p>
                        Your BMI is: <strong>{bmi}</strong>
                    </p>
                )}
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={calculateBmi} className="btn btn-primary">Calculate BMI</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="hero  mt-24">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Suggestion For You!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Weight: (Kg)</span>
                                </label>
                                <input type="number" value={weight} onChange={handleWeightChange}  placeholder="Weight" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height: (Cm)</span>
                                </label>
                                <input type="number" value={height} onChange={handleHeightChange} placeholder="Height" className="input input-bordered" />
                                {bmi && (
                    <p>
                        Your BMI is: <strong>{bmi}</strong>
                    </p>
                )}
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={calculateBmi} className="btn btn-primary">Calculate BMI</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default BmiCalculator;