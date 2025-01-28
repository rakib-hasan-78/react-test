import React from 'react';

const CountryMod = ({country}) => {
    const {name:{common}} = country
    return (
        <div className='w-10/12 bg-green-400 p-2 mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center shadow-xl'>
            <h1>{common}</h1>
        </div>
    );
};

export default CountryMod;