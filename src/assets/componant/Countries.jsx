import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    console.log(countries)
    useEffect(() => {
         fetch('https://restcountries.com/v3.1/all')
         .then((response) => response.json())
         .then((data) => setCountries(data))
    },[])
    return (
        <div className='w-full bg-blue-800 py-9 mt-5 min-h-screen'>
            <div className='w-11/12 mx-auto flex flex-wrap flex-col bg-sky-600/40 bg-opacity-55 py-3 shadow-md rounded-md'>
                <div className='w-full flex flex-wrap items-center gap-6 justify-center'>

                    {countries.map((country, index)=>( <Country key={country.cca3} index={index} country={country} /> ))}
                </div>
            </div>
        </div>
    );
};

export default Countries;  