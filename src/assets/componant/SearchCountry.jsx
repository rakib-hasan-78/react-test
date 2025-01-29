import React from 'react';
import Title from '../utilities/Title';
import Button from '../utilities/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SearchCountry = ({targetValue, setTargetValue, onTarget, onClean}) => {
    return (
        <section 
            className='w-8/12 mx-auto flex flex-wrap flex-col items-center justify-center bg-sky-600/40 bg-opacity-55 py-5 shadow-md rounded-md my-5 space-y-5'>
                <Title number={1} text={`search the country you looking for`}
                className={`text-2xl font-black italic text-center w-full`} />

                <div className='w-2/4 py-5 flex items-center justify-center space-x-5 relative'>
                    <div className='w-3/5 relative'>

                     <input
                     className='bg-gradient-to-l from-blue-500/50
                     from-30% via-sky-400/50 via-45% to-blue-400/80 to-80%
                     rounded-lg shadow-md backdrop-blur-md
                     backdrop-brightness-70 
                     backdrop-opacity-60 
                     backdrop-contrast-125
                     border 
                     border-sky-100
                     outline-0 py-2
                     w-full px-2 
                     caret-zinc-600 
                     text-zinc-600 relative'
                     type="text" name="" id=""
                     value={targetValue} onChange={(e) => setTargetValue(e.target.value) }
                                             
                     />
                       {targetValue &&(<span className='absolute right-2 top-1/2 -translate-y-3 cursor-pointer text-blue-900'
                       onClick={onClean}
                       >
                        {<FontAwesomeIcon icon={faX} />} 
                       </span>)}
                    </div>

                     <Button btnName={`search`}
                        className={`w-1/5 text-xl py-1.5 border font-extrabold uppercase text-blue-100 bg-blue-800 border-blue-800`}
                        onAction={onTarget}
                     />   
                </div>
                
        </section>
    );
};

export default SearchCountry;