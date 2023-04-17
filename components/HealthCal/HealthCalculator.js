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
    <div>
      <h1>Health Check Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={handleWeightChange} />
        </label>
        <br />
        <label>
          Height (cm):
          <input type="number" value={height} onChange={handleHeightChange} />
        </label>
        <br />
        <label>
          BMI:
          <input type="number" value={bmi} onChange={handleBmiChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {feedback && (
        <p>
          <strong>Health Status:</strong> {feedback}
        </p>
      )}
    </div>
  );
};

export default HealthCheckCalculator;