import { useRouter } from 'next/router';
import profile from '../../public/profiiledemo.png';
import Image from 'next/image';

const ProfileSlug = () => {
    const router = useRouter()
    const { profileSlug } = router.query

    return <>
        <div className='mx-auto max-w-screen-xl bg-blue-200 py-10 mt-12 rounded-md shadow-md'>
            <div className=' flex justify-center '>
                <div className="avatar online">
                    <div className="w-64 rounded-full border-2 border-[#4791ff]">
                        <Image height={500} width={1000} src={profile} />
                    </div>
                </div>
            </div>
            <div className='text-center mt-12'>
                <h3 className='text-[#4791ff] text-2xl mb-3 font-medium'>Md Azizul Khan</h3>
                <h3 className='text-[#254747] text-2xl mb-3'>azizul.khan.251@gmail.com</h3>
                <h3 className='text-[#254747] text-2xl mb-3'> <span className='font-medium'>Date of Birth:</span> 13.09.1999</h3>
                <h3 className='text-[#254747] text-2xl mb-3 font-medium'>Login as a <span className='text-[#4791ff]'>User</span> </h3>
                <h1>slug: {profileSlug}</h1>
            </div>

        </div>



    </>
}

export default ProfileSlug