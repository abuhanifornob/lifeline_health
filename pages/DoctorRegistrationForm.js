import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const service = [
    {
        id: '01',
        name: 'Medicine / General Physician',
        slug: 'medicine',
    },
    {
        id: '02',
        name: 'Gynecology',
        slug: 'gynecology',

    },
    {
        id: '03',
        name: 'Child Care / Pediatrics',
        slug: 'child-care',
    },
    {
        id: '04',
        name: ' Skin / Dermatology',
        slug: 'skin',
    },
    {
        id: '05',
        name: 'dentist',
        slug: 'dentist',
    },
    {
        id: '06',
        name: 'Mental Helth',
        slug: 'mental-helth',
    },
    {
        id: '07',
        name: 'Nutrition & Diet Specialist',
        slug: 'nutrition-diet-specialist',
    },
    {
        id: '08',
        name: 'Eye / Ophthalmology',
        slug: 'ophthalmology',
    },
    {
        id: '09',
        name: 'Complementary and Alternative Medicine',
        slug: 'alternative-medicine',
    },
    {
        id: '10',
        name: 'Brain / Neurology',
        slug: 'neurology',
    },
    {
        id: '11',
        name: 'Orthopedics',
        slug: 'orthopedics',
    },
    {
        id: '12',
        name: 'Gastroenterology',
        slug: 'gastroenterology',
    },
    {
        id: '13',
        name: 'Diabetes / Endocrinology',
        slug: 'endocrinology',
    }
    ,
    {
        id: '14',
        name: 'Heart / Cardiology',
        slug: 'cardiology',
    }
    ,
    {
        id: '15',
        name: 'Ear, Nose and Throat / ENT',
        slug: 'ent',
    }
    ,
    {
        id: '16',
        name: 'Urology',
        slug: 'urology',
    },
    {
        id: '17',
        name: 'Lungs / Pulmonology',
        slug: 'pulmonology',
    },
    {
        id: '18',
        name: 'Cancer / Oncology',
        slug: 'oncology',
    },
    {
        id: '19',
        name: 'Kidney / Nephrology',
        slug: 'nephrology',
    },
    {
        id: '20',
        name: 'Family Medicine',
        slug: 'family-medicine',
    },
    {
        id: '21',
        name: 'Physical Medicine & Rehabilitation',
        slug: 'rehabilitation',
    },


]

const degrees = [
    "MD",
    "DO",
    "MBBS",
    "MBChB",
    "BDS",
    "DDS",
    "DVM",
    "PharmD",
];
const DoctorRegistrationForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { googleLongin, createUser, userProfileUpdate, user } = useContext(AuthContext);
    const onSubmit = async (data) => {
        console.log(data);
        console.log(data.availability);
        setIsLoading(true);
        setSuccessMessage("");
        setErrorMessage("");
        const img = data.img[0]
        const password=data.password;
        const email=data.email;
        // const timeSlot = createTimeSlots(data.availabilityFrom, data.availabilityTo, 20)
        const serviceDatails =   service.find(sName=> sName.slug===data.service)
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=fa48313b438b840b4b3a809ce90982e6`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData=>{
                console.log(imgData);
                if(imgData.success){
                    const imgUrl = imgData.data.url
                    

                //  firebase auth
                const userInfo = {
                    displayName: data.name,
                    photoURL: imgUrl,
                    phoneNumber: data.phone
                  };
                  console.log('doctor',userInfo)
                createUser(email, password)
                    .then((result) => {
        
                      userProfileUpdate(userInfo)
                        .then(() => {
                          toast("Registration Successfull");
                        //   router.push("/");
                          const user = result.user;
                          console.log("jkdshjuhsdfguih", user);
                          reset();
                        })
                        .catch((error) => console.error(error));
        
                    //   router.push("/");
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                //  firebase auth

        const doctor = {
            name: data.name,
            email:data.email,
            timeSlot:[],
            imgUrl:imgUrl,
            phone:data.phone,
            studyingInstitute:data.studyingInstitute,
            degree:data.degree,
            specialization:data.specialization,
            serviceDatails:serviceDatails,
            workplace:data.workplace,
            about:data.about,
            experience:data.experience,
            fees:"300"

        }
        console.log('doctorsss',JSON.stringify(doctor))

        // post request doctor data
        // axios
        // .post('http://localhost:3000/api/doctors', JSON.stringify(doctor) )
        // .then((response) => {
        //   // Assuming the API response contains the saved comment
        //   const savedComment = response.data;
        //     console.log('ddddd',savedComment)
          
        // })
        // .catch((error) => {
        //   console.error('Error submitting comment:', error);
        // });
        fetch('http://localhost:3000/api/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                setSuccessMessage("Registration successful!");
                                console.log(data)
                            }
                            else{
                                setErrorMessage("Registration failed. Please try again.");  
                            }



                        })
                        .catch(error => console.error(error));
        // post request doctor data
                }
            })

        // function createTimeSlots(startTime, endTime, interval) {
        //     const timeSlots = [];
        //     let currentTime = startTime;

        //     while (currentTime < endTime) {
        //         timeSlots.push(new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        //         currentTime += interval;
        //     }

        //     return timeSlots;
        // }

        

        // Send data to server and handle success/failure
        // try {
        //     const response = await fetch("/api/doctor-registration", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(doctor),
        //     });

        //     if (response.ok) {
        //         setSuccessMessage("Registration successful!");
        //     } else {
        //         setErrorMessage("Registration failed. Please try again.");
        //     }
        // } catch (error) {
        //     setErrorMessage("An error occurred. Please try again.");
        // }

        setIsLoading(false);
    };
    return (
        <div className="my-24">
            <div className="m-4 mt-8">
                <h1 className="text-center text-4xl font-bold ">Register As A Doctor</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-base-100 shadow-xl p-6 ">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className={`appearance-none border-2 ${errors.experience ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">Name is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className={`appearance-none border-2 ${errors.experience ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">Email is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className={`appearance-none border-2 ${errors.experience ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">Password is required</span>
                    )}
                </div>
                <div className="mb-4">
                    
                        <label  htmlFor="img" className="block font-bold mb-2">
                             Your Photo 
                        </label>
                        <input type="file" {...register('img', { required: 'file is requird' })} className={`appearance-none border-2 ${errors.img ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} />
                        {errors.img && <p className="text-error">{errors.img?.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block font-bold mb-2">Phone</label>
                    <input id="phone" type="text" className={`appearance-none border-2 ${errors.phone ? "border-red-500" : "border-gray-200"
                        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} {...register('phone', { required: true })} />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">Please enter your phone number</p>}
                </div>
                <div>
                    <label htmlFor="studyingInstitute" className="block font-bold mb-2">
                        Studying Institute
                    </label>
                    <input
                        type="text"
                        id="studyingInstitute"
                        name="studyingInstitute"
                        {...register("studyingInstitute", { required: true })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md {`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md outline-none focus:ring-2 focus:ring-blue-500`}"
                    >

                    </input>
                </div>
                <div>
                    <label htmlFor="degree" className="block font-bold mb-2">
                        Degree
                    </label>
                    <select
                        id="degree"
                        name="degree"
                        {...register("degree", { required: true })}
                        className={`appearance-none border-2 ${errors.experience ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    >
                        <option value="">Select a degree</option>
                        {degrees.map((degree) => (
                            <option value={degree} key={degree}>
                                {degree}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="specialization">
                        Specialization
                    </label>
                    <input
                        id="specialization"
                        className={`appearance-none border-2 ${errors.specialization ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        type="text"
                        placeholder="Enter your specialization"
                        {...register("specialization", { required: true })}
                    />
                    {errors.specialization && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div>
                    <label htmlFor="service" className="block font-bold mb-2">
                        Service
                    </label>
                    <select
                        id="service"
                        name="service"

                        {...register("service", { required: true })}

                        className={`appearance-none border-2 ${errors.experience ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    >
                        <option value="">Select a specialty</option>
                        {service.map((specialty) => (
                            <option value={specialty.slug} key={specialty.id}>
                                {specialty.name}
                            </option>
                        ))}
                    </select>
                </div>



                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="workplace">
                        Current Workplace
                    </label>
                    <input
                        id="workplace"
                        className={`appearance-none border-2 ${errors.workplace ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        type="text"
                        placeholder="Enter your current workplace"
                        {...register("workplace", { required: true })}
                    />
                    {errors.workplace && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="availabilityFrom">
                        Available time slot for appointment from
                    </label>
                    <input
                        id="availabilityFrom"
                        className={`appearance-none border-2 ${errors.availabilityFrom ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        type="time"
                        step="3600"
                        placeholder="Enter your available time for appointment"
                        {...register("availabilityFrom", { required: true })}
                    />
                    {errors.availabilityFrom && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                    <label className="block font-bold mb-2" htmlFor="availabilityTo">
                        Available time slot appointment to
                    </label>
                    <input
                        id="availabilityTo"
                        className={`appearance-none border-2 ${errors.availabilityTo ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        type="time"
                        step="3600"
                        placeholder="Enter your available time for appointment"
                        {...register("availabilityTo", { required: true })}
                    />
                    {errors.availabilityTo && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="about">
                        About You
                    </label>
                    <textarea
                        id="about"
                        className={`appearance-none border-2 ${errors.about ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        type="text"
                        placeholder="Write about you"
                        {...register("about", { required: true })}
                    />
                    {errors.about && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="Experience">
                        Experience
                    </label>
                    <input
                        id="experience"
                        className={`appearance-none border-2 ${errors.experience ? "border-red-500" : "border-gray-200"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        type="text"
                        placeholder="Enter your experience"
                        {...register("experience", { required: true })}
                    />
                    {errors.experience && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

            </form>
        </div>
    );
};

export default DoctorRegistrationForm;