import React from 'react';
import withAuth from '../withAuth/withAuth';

const DoctorList = () => {
    const [doctorInfo, setDoctorInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/doctors`)
            .then(res => res.json())
            .then(data => setDoctorInfo(data))
    }, [])
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Doctors List</h1>

                </div>
                <div class="flex flex-wrap -m-4">


                    {
                        doctorInfo.map(dcInfo => <DoctorLists key={dcInfo._id} dcInfo={dcInfo}></DoctorLists>)
                    }

                </div>
            </div>
        </section>

    );
};

export default withAuth(DoctorList);