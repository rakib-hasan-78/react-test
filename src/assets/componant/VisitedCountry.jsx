import React from 'react';
import Title from '../utilities/Title';

const VisitedCountry = ({visitedFlag}) => {
    return (
        <div className='w-8/12 mx-auto flex flex-wrap flex-col items-center justify-center bg-sky-600/40 bg-opacity-55 py-5 shadow-md rounded-md my-5 space-y-5'>
            <Title number={3} text={`countries so far visited....`}/>
            <div>
                {visitedFlag.map((flag, index)=>(
                    <div id={index+1}>
                        <img  src={flag}/>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default VisitedCountry;