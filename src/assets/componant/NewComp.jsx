import React from 'react';
import { useRef } from 'react';

const NewComp = () => {
    let modifyImg = useRef();
    const modifyingImg = () => {
        modifyImg.current.src = "https://placehold.co/600x400?text=Hello\nWorld"
        modifyImg.current.setAttribute('width', '400px');
        modifyImg.current.setAttribute('height', '300px');
    }

    return (
        <div className='min-w-full py-4 bg-slate-100 my-3 flex justify-center items-center flex-col'>
            <img  ref={modifyImg} src="https://placehold.co/600x400" className='rounded-md'/>
            <div className='min-w-full flex flex-wrap items-center justify-center'>
                
            </div>
            <div>
                <button onClick={()=>modifyingImg()} className='p-3 capitalize bg-red-500 rounded-md text-white/30 my-2' type="button">click to modify</button>
             </div>
        </div>
    );
};

export default NewComp;