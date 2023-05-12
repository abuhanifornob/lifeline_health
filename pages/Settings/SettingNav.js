import Link from 'next/link';
import React from 'react';

const SettingNav = () => {
    return (
        <div className='text-gray-600 body-font text-center max-w-screen-xl mx-auto'>
            <div className="tabs mx-auto block mt-7">
                <Link href={'./EmailVerify'} className="tab tab-lifted">
                    <h2 className="font-bold text-lg">Veryfy Your Email</h2>
                </Link>
                <Link href={'./ChangedPassword'} className="tab tab-lifted" >
                    <h2 className="font-bold text-lg">Password Reset</h2>
                </Link>
                <Link href={'./DeleteAccount'} className="tab tab-lifted">
                    <h2 className="font-bold text-lg">Delete Your Account</h2>
                </Link>
            </div>
        </div>
    );
};

export default SettingNav;