import { useState } from "react";

export default function SpecialityAppoinment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [speciality, setSpeciality] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [university, setUniversity] = useState("");
  const [degreeYear, setDegreeYear] = useState("");
  const [degreeResult, setDegreeResult] = useState("");
  const [internDepartment, setInternDepartment] = useState("");
  const [internHospital, setInternHospital] = useState("");
  const [internYear, setInternYear] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [experienceYear, setExperienceYear] = useState("");
  const [license, setLicense] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = [
      {
        firstName,
        lastName,
        photo,
        speciality,
        education: [
          {
            degreeName,
            university,
            degreeYear,
            degreeResult,
          },
          {
            degreeName,
            university,
            degreeYear,
            degreeResult,
          },
        ],
      },
    ];
    console.log({
      firstName,
      lastName,
      photo,
      speciality,
      degreeName,
      university,
      degreeYear,
      degreeResult,
      internDepartment,
      internHospital,
      internYear,
      hospitalName,
      experienceYear,
      license,
    });
    console.log(doctor);
  };

  return (
    <div className=" my-4">
      <h1 className="text-center font-bold text-3xl">
        Please Fill Up Doctor Information Details
      </h1>
      <form
        className="w-full max-w-2xl p-5 mx-auto shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 justify-start md:flex-row">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
            Photo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="speciality"
          >
            Speciality
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="speciality"
            type="text"
            placeholder="Speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          />
        </div>
        <fieldset className="shadow-xl border px-3 border-gray-300">
          <legend className="font-bold">Educational Information</legend>
          <fieldset className="shadow-xl border px-3 border-gray-300">
            <legend className="font-bold">1</legend>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="degreeName"
              >
                Degree Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="degreeName"
                type="text"
                placeholder="Speciality"
                value={degreeName}
                onChange={(e) => setDegreeName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="university"
              >
                University Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="university"
                type="text"
                placeholder="Speciality"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 justify-start md:flex-row">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="degreeYear"
                >
                  Passing Year
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="degreeYear"
                  type="text"
                  placeholder="Passing Year"
                  value={degreeYear}
                  onChange={(e) => setDegreeYear(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="degreeResult"
                >
                  Result
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="degreeResult"
                  type="text"
                  placeholder="degree Result"
                  value={degreeResult}
                  onChange={(e) => setDegreeResult(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="shadow-xl border px-3 border-gray-300">
            <legend className="font-bold">1</legend>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="degreeName"
              >
                Degree Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="degreeName"
                type="text"
                placeholder="Speciality"
                value={degreeName}
                onChange={(e) => setDegreeName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="university"
              >
                University Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="university"
                type="text"
                placeholder="Speciality"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 justify-start md:flex-row">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="degreeYear"
                >
                  Passing Year
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="degreeYear"
                  type="text"
                  placeholder="Passing Year"
                  value={degreeYear}
                  onChange={(e) => setDegreeYear(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="degreeResult"
                >
                  Result
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="degreeResult"
                  type="text"
                  placeholder="degree Result"
                  value={degreeResult}
                  onChange={(e) => setDegreeResult(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
        </fieldset>
        <input
          type="submit"
          value="Submit"
          className=" w-full bg-#4791ff bg-slate-400 mt-3"
        />
      </form>
    </div>
  );
}
