import { useRouter } from 'next/router';
import React from 'react';

const ServiceDetails = () => {
    const router = useRouter()
    const {service} = router.query
    return (
        <div>
            <p>Service Name: {service}</p>
        </div>
    );
};

export default ServiceDetails;