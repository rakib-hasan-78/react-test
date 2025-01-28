import React, { useState } from 'react';
import Title from '../utilities/Title';
import Button from '../utilities/Button';
import CountryMod from './CountryMod';

const Country = ({country , index, onOpen}) => {
    const {flags:{png, alt}, name:{common},   } = country;
    return (
        <div 
            className='w-3/12 bg-gradient-to-l from-neutral-500/50 from-60% via-gray-600/80 via-90% to-zinc-400/80 rounded-lg shadow-md backdrop-blur backdrop-brightness-90 bg-opacity-65 border border-blue-50 inset-0'>
            <div 
                className='w-full flex items-center justify-start px-1.5 text-xl font-extrabold text-stone-300/60 italic'>
                {index+1<10? `0${index + 1}.`:`${index+1}.`}
            </div>
            <div 
                className='w-full h-52 flex items-center justify-center'>
                <img src={png}
                className='h-full  w-full object-contain p-1.5 m-0'
                alt={alt} />
            </div>
            <div
                className='w-full flex items-center justify-center py-2'>
                <Title number={3} text={common} className={`text-base text-center`}/>
            </div>
            <div 
                className='w-full flex items-center justify-center pb-5'>
                <Button
                 btnName={`learn more`}
                 className={`bg-gradient-to-l from-blue-700/80 from-25% via-blue-800/50 via-75% to-blue-900/70 to-85% text-blue-50 font-extrabold text-base w-3/6 py-2 inset-0 shadow-md`}
                 onAction={onOpen}
                 />
            </div>
        </div>
    );
};

export default Country;