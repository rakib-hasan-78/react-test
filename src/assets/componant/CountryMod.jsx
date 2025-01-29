import React from 'react';
import Title from '../utilities/Title';
import PG from '../utilities/PG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const CountryMod = ({country, onClick}) => {
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
          unMember,
          timezones=[],  
        } = country;

    return (
        <div className='w-10/12 bg-gradient-to-l from-emerald-500/70 from-30% via-green-600/60 to-teal-700/70 to-80% rounded-lg shadow-md backdrop-blur-md backdrop-brightness-90 backdrop-opacity-90 backdrop-contrast-125 border border-emerald-100 p-2 mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-between py-2'>
                <Title number={2} text={common} className={`text-2xl text-green-200`} />
                <span className='text-white px-3 cursor-pointer text-2xl'>{<FontAwesomeIcon icon={faX} onClick={onClick} />}</span>
            </div>
            <div className='w-full flex'>
                <div className='w-7/12'>
                    <Title number={4} text={`official name: ${official}`} />
                    <PG type={'p'} text={`${continents.length > 1 ? 'continents : ' : 'continent : '} ${continents.join(', ')}`}/>
                    <PG type={'p'} text={`subregion :  ${subregion}`}/>
                    <PG type={'p'} text={`area: ${area} SqKm.`}/>
                    <PG type={'p'} text={`${borders.length > 1 ? 'borders :' : 'border :'} ${borders.join(', ')} `}/>
                    <PG type={'p'} text={` land status : ${landlocked ? 'landlocked country' : 'not a landlocked country'}`}/>
                    <PG type={'p'} text={`independent status : ${independent ? 'independent country' : 'not independent'}`}/> 
                    <PG type={'p'} text={`${capital.length>1 ? 'capital cities : ' : 'capital city : '} ${capital.join(' , ')}`}/>
                    <PG type={'p'} text={`population: ${population}`}/>
                    <PG type={'p'} text={` ${Object.keys(languages).length > 1 ? 'languages : ' : 'language : '} ${Object.values(languages).join(', ')}`}/>
                    <PG type={'p'} text={`${Object.keys(currencies).length > 1 ? 'currencies : ' : 'currency : '} ${Object.values(currencies).map(currency=> `${currency.name}`).join(', ')}`}/>
                    <div className='w-full flex items-center justify-start space-x-4'>
                        <PG type={'span'} text={`UN Status :  ${unMember ? 'UN Member': 'not UN member'}`} />
                        <PG type={'span'} text={`week starts :  ${startOfWeek}`} />
                    </div>
                    <div className='w-full flex items-center justify-start space-x-4'>
                        <PG type={'span'} text={`${timezones.length>1?'timezones':'timezone'} :  ${timezones.join(', ')}`} />
                        <PG type={'span'} text={`${Object.keys(currencies).length>1 ? 'currency symbols':'currency symbol'} :  ${Object.values(currencies).map(currency=> `${currency.symbol}`).join(', ' )}`} />
                    </div>
                </div>
                <div className='w-4/12 flex items-center'>
                    <img src={svg} alt={alt} className='rounded-lg shadow-md shadow-emerald-600/50 inset-0 w-full h-2/4' />
                </div>
            </div>
        </div>
    );
};

export default CountryMod;


