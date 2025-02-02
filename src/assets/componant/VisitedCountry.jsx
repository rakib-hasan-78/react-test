import React from 'react';
import Title from '../utilities/Title';

const VisitedCountry = ({visitedFlag}) => {
    return (
        <div className='w-8/12 mx-auto flex flex-wrap flex-col items-center justify-center bg-sky-600/40 bg-opacity-55 py-5 shadow-md rounded-md my-5 space-y-5'>
            <Title number={3} text={`countries so far visited....`}/>
            <div className='w-10/12 flex items-center justify-center flex-wrap gap-2'>
            {visitedFlag.map((flag, index) => (
                <div
                className='w-24 h-16 rounded-md shadow-md'
                 key={flag.cca3} id={flag.cca3}>
                    <img className='w-full h-full rounded-md' src={flag.flags.png} alt={flag.name.common} />
                </div>))
            }

            </div>
        </div>
    );
};

export default VisitedCountry;