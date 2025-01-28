import React from 'react';
import Title from '../utilities/Title';

const CountryMod = ({country}) => {
    const {name:{common, official},
          population,
          flags:{svg,alt}, 
          independent, 
          landlocked, 
          capital=[], 
          borders=[],
          area, 
          continents =[], 
          subregion, 
          currencies={}, 
          languages={},
          startOfWeek, 
          unMember  
        } = country;

      const currencyName = currencies.CHF?.name || "N/A";
      const currencySymbol = currencies.CHF?.symbol || "N/A";

    return (
        <div className='w-10/12 bg-gradient-to-l from-emerald-500/70 from-30% via-green-600/60 to-teal-700/70 to-80% rounded-lg shadow-md backdrop-blur-md backdrop-brightness-90 backdrop-opacity-90 backdrop-contrast-125 border border-emerald-100 p-2 mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-start py-2'>
                <Title number={2} text={common} className={`text-2xl text-green-200`} />
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-7/12'>
                    
                </div>
                <div className='w-4/12'>
                    <img src={svg} alt={alt} className='rounded-md shadow-md shadow-emerald-600/50 inset-0 w-full h-full' />
                </div>
            </div>
        </div>
    );
};

export default CountryMod;


