import React from 'react';
import Unit from './Unit';


const Cdr = () => {
    return (
        <div className='w-full bg-lime-400 py-2 my-2 flex items-center justify-center flex-col content-center'>
            <Unit  title={`conditional rendering 1`} grade={`4`} score={80} isResult={true}/>
        </div>
    );
};

export default Cdr; 