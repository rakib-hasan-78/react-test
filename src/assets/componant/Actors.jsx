import React from 'react';
import Actor from './Actor';

const Actors = () => {
    const actorData = ['bappa raz','dhappa raz', 'bakib khan', 'polti khan','poshim'];
    return (
        <div className='w-full flex justify-between items-center bg-amber-500 py-2 my-3 flex-wrap space-x-2 gap-1 px-3'>
             {actorData.map(actor=>{
                return <Actor key={actor} name={actor}/>
             })}
        </div>
    );
};

export default Actors;