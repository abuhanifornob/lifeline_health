import { useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthProvider';


function Checkout({bookings}) {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const router = useRouter();
    const { user } = useContext(AuthContext);
    const { checkout } = router.query;


    const bookod =   bookings.find(booked=> booked?.user?.uid===checkout)
    console.log("booking check",bookod);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <>
        {/* hdsfhjhf */}
        <div>
        <div className='w-3/4 mx-auto my-24 '
            >
                <div className='w-2/4 mx-auto bg-blue-100 p-6 flex rounded-md'>
                {/* <Image src={data} height={200} width={200}
                className='w-20 mr-4 rounded-md'
                ></Image> */}
                <div>
                <h1>{bookod.data.name}</h1>
                <h1>{bookod.data.time}</h1>
                <h1>{bookod.data.service}</h1>
                <h1>{bookod.date}</h1> 
                </div>
                <div className='inline ml-6'>
                    <button className='bg-orange-600 rounded-md px-3 text-lg text-white mb-4'>{bookod.payment}</button>
                    <br/>
                    <button className='bg-blue-500 rounded-md px-3 text-lg text-white'>Make Payment</button>
                </div>
                
                </div>
            </div>
        </div>
        {/* hdsfhjhf */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                <form className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-lg font-bold mb-4">Billing Information</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                           {}
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="123 Main St"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="city"
                            type="text"
                            placeholder="Anytown"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="state"
                            type="text"
                            placeholder="CA"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="zip">
                            ZIP Code
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="zip"
                            type="text"
                            placeholder="12345"
                        />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Payment Method</h3>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="paymentMethod"
                                        value="credit-card"
                                        checked={paymentMethod === 'credit-card'}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <span className="ml-2">Credit Card</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="paymentMethod"
                                        value="paypal"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <span className="ml-2">PayPal</span>
                                </label>
                            </div>
                            {paymentMethod === 'credit-card' && (
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="card-number">
                                            Card Number
                                        </label>
                                        <input
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="card-number"
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="card-expiration">
                                            Expiration Date
                                        </label>
                                        <input
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="card-expiration"
                                            type="text"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="card-cvv">
                                            CVV
                                        </label>
                                        <input
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="card-cvv"
                                            type="text"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            )}
                            {paymentMethod === 'paypal' && (
                                <div>
                                    <p>You will be redirected to PayPal to complete your payment.</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-8">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Payment
                            </button>
                        </div>
                </form>
            </div>
        </div>
        </>
        
    );
}

export default Checkout;
export async function getServerSideProps() {
    try {
        const response = await axios.get(
            'https://lifeline-health-rakibul181.vercel.app/api/bookings'
        );
        const bookings = response.data;
        console.log(bookings);
  
        return {
            props: {
                bookings,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                bookings: [],
            },
        };
    }
  }
