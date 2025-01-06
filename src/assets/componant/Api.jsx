// import React from 'react';

import { useRef } from "react";

const Api = () => {
    let data = useRef(null)
    let msgText = useRef(null);
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        data.current = await response.json();
        console.log(data.current)
    }
    const showData = () => {
         msgText.current.innerText = JSON.stringify(data.current);
    }

    return (
        <div className="w-full border my-10 bg-slate-100">
        <p ref={msgText} className="flex justify-center items-center py-2 pb-4"></p>
            <div className="flex flex-wrap items-center justify-center space-x-3 mb-5">
            <button onClick={() => fetchData()} className="border w-20 text-sm py-2 px-1 bg-green-700 text-white capitalize rounded font-light" type="button">get data</button>
            <button onClick={showData} className="border w-20 text-sm py-2 px-1 bg-green-700 text-white capitalize rounded font-light" type="button">show data</button> 
            </div>
        </div>
    );
};

export default Api;