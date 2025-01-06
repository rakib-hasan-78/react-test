// import React from 'react';

import { useState } from "react";

const Us = () => {
    const [obj, setObj] = useState({
        playerOne: 'V Bat',
        playerTwo: 'GM Bat',
        playerThree: 'BAS Bat'
    });
    // obj handler 
    const currentStatus = (event) => {
        event.preventDefault();
        setObj(cObj =>({
            ...cObj,

            playerThree:'V 100',
        }))
        
    }
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
        <div className="w-full flex flex-wrap flex-col items-center justify-center space-y-3 my-7">
            <div  className="w-full flex flex-wrap items-center justify-center">
                {obj.playerThree}
            </div>
            <div className="w-full flex flex-wrap items-center justify-center space-x-4">
                <button onClick={currentStatus}  className="w-30 border py-2  px-2 rounded-md capitalize bg-pink-600 text-pink-100" type="button">current</button>
            </div>
        </div>
        
        </div>
    );
};

export default Us;