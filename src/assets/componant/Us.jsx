// import React from 'react';

import { useState } from "react";

const Us = () => {
    const [number , setNumber] = useState(0)
    const increamentHandler = () => {
        setNumber(number+1)
    }
    const decreamentHandler = () => {
        if (number>0) {
            setNumber(number-1)
        }
    }
    return (
        <div className="w-full">
        <p>Number: {number}</p>
        <div className="w-full flex items-center justify-center space-x-4">
            <button onClick={increamentHandler} className="w-30 border py-2  px-2 rounded-md capitalize bg-pink-600 text-pink-100" type="button">increament</button>
            <button onClick={decreamentHandler} className="w-30 border py-2  px-2 rounded-md capitalize bg-red-600 text-pink-100" type="button">decreament</button>
        </div>
        </div>
    );
};

export default Us;