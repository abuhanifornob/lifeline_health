
import React, { useState } from "react";

const WorkoutCalculator = () => {
    // State variables for form inputs
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [eatingHabits, setEatingHabits] = useState("");
    const [growth, setGrowth] = useState("");
    const [bodyType, setBodyType] = useState("");
    const [activityLevel, setActivityLevel] = useState("");

    // State variable for feedback
    const [feedback, setFeedback] = useState("");
    console.log('a', activityLevel)
    // Function to handle form submission
    const handleSubmit = (e) => {

        e.preventDefault();


        // Perform validation on form inputs
        if (!age || !gender || !weight || !height || !bmi || !eatingHabits || !growth || !bodyType || !activityLevel) {
            setFeedback("Please fill in all the fields.");
        } else {
            // Perform calculations and generate feedback based on user inputs
            let calculatedFeedback = "";

            // Example of generating feedback based on user inputs
            if (bodyType === "ectomorph") {
                if (activityLevel === "lightlyActive") {
                    calculatedFeedback = "You may benefit from a workout routine that focuses on strength training to build muscle mass.";
                } else if (activityLevel === "moderatelyActive") {
                    calculatedFeedback = "A combination of strength training and cardiovascular exercises can help you maintain your slim body type.";
                } else if (activityLevel === "veryActive") {
                    calculatedFeedback = "You may need to increase your caloric intake and focus on resistance training to build muscle mass.";
                }
            } else if (bodyType === "mesomorph") {
                if (activityLevel === "lightlyActive") {
                    calculatedFeedback = "Incorporating regular cardiovascular exercises and a calorie-restricted diet can help you lose fat.";
                } else if (activityLevel === "moderatelyActive") {
                    calculatedFeedback = "A combination of cardiovascular exercises and resistance training can help you lose fat and build muscle.";
                } else if (activityLevel === "veryActive") {
                    calculatedFeedback = "A combination of high-intensity cardiovascular exercises and strength training can help you shed excess fat.";
                }
            } else {
                calculatedFeedback = "Based on your inputs, we recommend a balanced workout routine that includes both cardiovascular exercises and strength training.";
            }

            setFeedback(calculatedFeedback);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 ">
            <h1 className=" font-bold mb-4 text-center text-4xl text-[#254747]">Gym Workout Calculator</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto border-blue-800 border-2 p-4 rounded-md bg-blue-100">
                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age:</label>
                    <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>
                {/* Gender */}
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender:</label>
                    <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">Weight (kg):</label>
                    <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className="block text-gray-700 font-semibold mb-2">Height (cm):</label>
                    <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="bmi" className="block text-gray-700 font-semibold mb-2">BMI:</label>
                    <input type="number" id="bmi" name="bmi" value={bmi} onChange={(e) => setBmi(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="eatingHabits" className="block text-gray-700 font-semibold mb-2">Eating Habits:</label>
                    <select id="eatingHabits" name="eatingHabits" value={eatingHabits} onChange={(e) => setEatingHabits(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2">
                        <option value="">Select eating habits</option>
                        <option value="balanced">Balanced</option>
                        <option value="highProtein">High Protein</option>
                        <option value="lowCarb">Low Carb</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="growth" className="block text-gray-700 font-semibold mb-2">Growth:</label>
                    <select id="growth" name="growth" value={growth} onChange={(e) => setGrowth(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2">
                        <option value="">Select growth</option>
                        <option value="bulk">Bulk</option>
                        <option value="cut">Cut</option>
                        <option value="maintain">Maintain</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="bodyType" className="block text-gray-700 font-semibold mb-2">Body Type:</label>
                    <select id="bodyType" name="bodyType" value={bodyType} onChange={(e) => setBodyType(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2">
                        <option value="">Select body type</option>
                        <option value="ectomorph">slim</option>
                        <option value="mesomorph">fat</option>
                        <option value="endomorph">Endomorph</option>
                    </select>
                </div>


                <div className="mb-4 ">
                    <label htmlFor="activityLevel" className="block text-gray-700 font-semibold mb-2">Activity Level:</label>
                    <select id="activityLevel" name="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2">
                        <option value="">Select activity level</option>
                        {/* <option value="sedentary">Sedentary (little or no exercise)</option> */}
                        <option value="lightlyActive">light (light exercise/sports 1-3 days per week)</option>
                        <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days per week)</option>
                        <option value="veryActive">Very Active (hard exercise/sports 6-7 days per week)</option>
                        {/* <option value="extraActive">Extra Active (very hard exercise/sports and a physical job)</option> */}
                    </select>
                </div>
                <div>
                {
                feedback && (
                    <div className="m-4 ">
                        {/* <p className="text-gray-700 font-semibold mb-2">Your BMI Result:</p> */}
                        <p className="text-xl text-blue-500 font-semibold">{feedback}</p>
                        {/* <p className="text-gray-500">{activityLevel}</p>
                        <p className="text-gray-500">{bodyType}</p> */}
                    </div>
                )
            }
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Calculate</button>
                </div>
            </form>


            
        </div >
    );
}

export default WorkoutCalculator;
