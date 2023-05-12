import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';




const AppointmentModal = ({ serviceInfo }) => {
    const { timeSlot, fees, doctorID, serviceDatails } = serviceInfo
    const [selectedDate, setSelectedDate] = useState(new Date())
    const { register, handleSubmit } = useForm();
    const date = format(selectedDate, 'PP')

    const { user } = useContext(AuthContext);
    console.log(date);


    const onSubmit = (data) => {
        console.log(data);

        const booking = {
            date,
            data,
            user,
            fees,
            doctorID,
            serviceDatails,
            payment:"unpaid"
        }
        console.log(JSON.stringify(booking));
        fetch(' /api/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    // setSuccessMessage("Registration successful!");
                    console.log(data)
                }
                else {
                    setErrorMessage("Registration failed. Please try again.");
                }
            })
            .catch(error => console.error(error));
    };
    

    const today = new Date();
    const disabledDays = {
        before: today,
    };



    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal flex flex-col">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <div className="p-4">
                        <div className='flex justify-center' >
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                disabled={disabledDays}
                            ></DayPicker>
                        </div>
                        <p className='text-center font-bold text-primary'>Available Appointments on {format(selectedDate, 'PP')}</p>

                        <div className="bg-gray-300 p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder={user ? user.displayName : "Name"}
                                        {...register('name', { required: true })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="service"
                                    >
                                        Service
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="service"
                                        value={serviceDatails.name}
                                        {...register('service', { required: true })}


                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="time"
                                    >
                                        Time Slot
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="time"
                                        {...register('time', { required: true })}
                                    >
                                        <option >Select a time slot</option>
                                        {
                                            timeSlot && timeSlot.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                                        }
                                    </select>
                                </div>
                                <Link
                                href={`/booking/${user?.uid}`}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Book Now
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AppointmentModal