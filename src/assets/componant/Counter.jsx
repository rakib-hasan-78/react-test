import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div className='w-full flex items-center justify-center bg-violet-400 py-4 flex-col'>
            <p className='w-1/4 bg-violet-600/30 py-4 rounded-md shadow-black/15 shadow-md text-center font-extrabold text-violet-100 text-4xl'>{count<10 ? `0${count}` : count}</p>
            <div className='flex space-x-6 my-5'>
            <button 
                className="border-2 capitalize p-2 rounded-md font-bold bg-violet-700/70 text-violet-100 border-violet-400" 
                type="button" 
                onClick={()=>count<45 && (setCount(count=>count+1))}
                >
                Increment
            </button>
                <button className=' border-2 capitalize p-2 rounded-md font-bold bg-pink-800/60 text-violet-100 border-violet-400' type="button" onClick={()=> count>0 && (setCount(count=>count-1)) } >decrement</button>
            </div>
        </div>
    );
};

export default Counter;