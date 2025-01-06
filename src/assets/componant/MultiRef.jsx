import React, { useRef } from 'react';

const MultiRef = () => {
    let name, number, email = useRef(null);
    let styleRef = useRef();
    let numberSet = useRef(0)
    const onStyle = () => {
        event.preventDefault();
        if (styleRef.current.classList.contains('text-emerald-500')) {
            numberSet.current++;
            console.log(numberSet.current);
            styleRef.current.classList.remove('text-emerald-500')
            styleRef.current.classList.add('text-pink-600')
        } else {
            styleRef.current.classList.remove('text-pink-600');
            styleRef.current.classList.add('text-emerald-500');
        }
    }
    const dataHandler = () => {
        let cName = name.value;
        let cNumber = number.value;
        let cmail = email.value;
        alert(`${cName} :  ${cNumber} : ${cmail}`)
    }
    return (
        <div className='w-full'>
            <form className='min-w-full flex flex-1 justify-center items-center content-center flex-wrap flex-col py-5' action="#" method="get">
                <input ref={(n)=> name=n} className='my-3' type="text" name="" id=""   placeholder='name' />
                <input ref={(nu)=> number = nu} className='my-3' type="number" name="" id=""  placeholder='number'/>
                <input ref={(mail)=> email = mail} className='my-3' type="email" name="" id=""  placeholder='email'/>
                <button onClick={()=>dataHandler()} className='btn border-2 p-3' type="button">send data</button>
            </form>
            <div className='mt-10 w-full py-4 text-center capitalize'>
                <h1 ref={styleRef} className='text-emerald-500 text-4xl font-bold italic'>fantastic four a fantastic movie bro !</h1>
                <button onClick={()=>onStyle()} className='border p-2 w-40 rounded-md capitalize font-extralight bg-pink-600 text-pink-100 mt-5'>change style</button>
            </div>
        </div>
    );
};

export default MultiRef;