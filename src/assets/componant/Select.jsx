import React from 'react';
import Title from '../utilities/Title';
import Button from '../utilities/Button';

const Select = ({selectAction, selectContinent, setSelectedContinent }) => {
    return (
        <div className='w-8/12 mx-auto flex flex-wrap flex-col items-center bg-sky-600/40 bg-opacity-55 py-5 shadow-md rounded-md space-y-3'>
            <Title number={3}
                   text={`search countries by continent !`}
                   className={`text-2xl font-black italic text-center w-full`}
            />
            <select
             value={selectContinent}
             onChange={(e) => setSelectedContinent(e.target.value) }
             className='w-4/12 outline-none py-2.5 text-lg capitalize text-left bg-gradient-to-l from-blue-500/50
             from-30% via-sky-400/50 via-45% to-blue-400/80 
             to-80% rounded-lg shadow-md backdrop-blur-md
             backdrop-brightness-70 
             backdrop-opacity-60 
             backdrop-contrast-125
             border 
           border-sky-100'
             name="" id="">
                <option value="">select continent</option>
                <option value="antarctica">antarctica</option>
                <option value="north america">north america</option>
                <option value="south america">south america</option>
                <option value="asia">asia</option>
                <option value="europe">europe</option>
                <option value="africa">africa</option>
                <option value="oceania">oceania</option>
            </select>
            <Button btnName={`select` }
                    className={` text-xl py-1.5 px-4 border font-extrabold uppercase text-blue-100 bg-blue-800 border-blue-800`}
                    onAction={selectAction}
             />
        </div>
    );
};

export default Select;