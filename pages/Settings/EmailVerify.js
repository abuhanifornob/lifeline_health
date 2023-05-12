import { AuthContext } from '@/context/AuthProvider';
import app from '@/firebase/firebase.config';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import SettingNav from './SettingNav';

const auth = getAuth(app);

const EmailVerify = () => {
    const { user } = useContext(AuthContext);

    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast.success('Check Your Email!');
                // Email verification sent!
                // ...
                // alert("Email send succes")
            });
    }



    return (
        <div className='text-gray-600 body-font max-w-screen-xl mx-auto'>
            <SettingNav></SettingNav>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Verify Your Email</h1>
                        
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" value={user?.displayName} disabled className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={user?.email} disabled className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={emailVerification} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Verify</button>
                        <Toaster></Toaster>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmailVerify;