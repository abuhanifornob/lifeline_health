import Link from 'next/link';
import React from 'react';

const ServiceCard = ({service}) => {
    const{name, slug,icon , title} =service
    return (
        <div className="bg-base-100 w-96 shadow-xl grid justify-items-center">
            <figure className="px-10 pt-10 text-8xl grid justify-center text-center text-[#4791ff]">
                 {icon}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <div className="card-actions">
                <Link href={`/service/${slug}`}><button className="btn bg-[#254747] ">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;