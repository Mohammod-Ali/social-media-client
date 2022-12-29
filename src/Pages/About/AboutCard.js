import React from 'react';

const AboutCard = ({data}) => {
    const {name, email, university, address} = data

    return (
        <div className='text-center mt-10'>
            <h1 className='text-5xl '>Name: <span className='font-bold'>{name}</span> </h1>
            <h2 className='text-4xl mt-4'>Email: <span className='font-semibold '>{email}</span></h2>
            <h2 className='text-4xl mt-4'>University Name: <span className='font-semibold '>{university} </span></h2>
            <h2 className='text-4xl mt-4'>Address: <span className='font-semibold'>{address}</span></h2>
        </div>
    );
};

export default AboutCard;