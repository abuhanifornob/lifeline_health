import  { useState } from "react";

const HealthCheckCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleBmiChange = (e) => {
    setBmi(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on input fields
    if (!age || !gender || !weight || !height || !bmi) {
      setFeedback("Please fill in all fields.");
    } else {
      // Perform health check based on input
      let healthStatus = "";
      if (age < 18) {
        healthStatus = "You are too young for a health check.";
      } else if (gender === "male" && bmi < 20) {
        healthStatus = "You have a low BMI. Please consult a healthcare professional.";
      } else if (gender === "female" && bmi < 19) {
        healthStatus = "You have a low BMI. Please consult a healthcare professional.";
      } else {
        healthStatus = "You are in good health.";
      }

      setFeedback(healthStatus);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className=" font-bold mb-4 text-center text-4xl text-[#254747]">Health Check Calculator</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto border-blue-800 border-2 p-4 rounded-md bg-blue-100">
        <div className="mb-4">
         <label className="block text-gray-700 font-semibold mb-2">
          Age:
        </label> 
          <input type="number" value={age} onChange={handleAgeChange} className="w-full border-gray-300 rounded-md px-4 py-2" />
        </div>
        
       
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
          Gender:
        </label> 
          <select value={gender} onChange={handleGenderChange} className="w-full border-gray-300 rounded-md px-4 py-2">
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
       
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
          Weight (kg):
        </label>
          <input type="number" value={weight} onChange={handleWeightChange} className="w-full border-gray-300 rounded-md px-4 py-2"/>
        </div>
        
       
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
          Height (cm):
        </label>
          <input type="number" value={height} onChange={handleHeightChange} className="w-full border-gray-300 rounded-md px-4 py-2"/>
        </div>
        
       
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
          BMI:
        </label>
          <input type="number" value={bmi} onChange={handleBmiChange} className="w-full border-gray-300 rounded-md px-4 py-2"/>
        </div>

        <div>
        {feedback && (
        <p>
          <strong>Health Status:</strong> {feedback}
        </p>
      )}
        </div>
        
  
        <div className="mt-4 text-center">
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Calculate Health</button> 
        </div>
        
      </form>
      
    </div>
  );
};

export default HealthCheckCalculator;