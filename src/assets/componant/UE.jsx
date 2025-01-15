
import React, { useEffect, useState } from 'react';

const UE = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        (async () => {
            let dataFetch = await fetch('https://dummyjson.com/recipes')
            let json = await dataFetch.json();
            setData(json.recipes);
        })()
    }, []);
    
    return (
        <div className='w-12/12 flex items-center justify-center bg-violet-400 my-1'>
            <div className='w-11/12 flex items-center justify-around space-x-10 my-1 flex-wrap overflow-hidden'>
            {data && data.map((value) => (
                <div key={value.id} className='w-4/12 bg-red-400 py-3 rounded-md'>
                    {JSON.stringify(value)} {/* Assuming `value` has a `name` property */}
                </div>
            ))}
            </div>
        </div>
    );
};

export default UE;