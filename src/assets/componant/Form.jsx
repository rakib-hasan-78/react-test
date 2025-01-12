import React, { useState } from 'react';

const Form = () => {
    const [form , setForm] =  useState({firstName:"poets of fall"})
    return (
        <div className='w-full flex items-center justify-center bg-orange-200 p-2 my-4'>
            <div className='w-6/12 bg-orange-400 mx-auto p-2'>
                <form action="#">
                    <div className='w-full flex justify-center items-center space-x-0'>
                        <label className='text-orange-100 px-1 capitalize font-extrabold' htmlFor="first-name">first name:</label>
                        <input value={form.firstName}
                        className='bg-orange-300 border-0 outline-none py-1 px-3 rounded-md text-orange-100 font-medium' 
                         type="text" name="first-name" id="first-name" />
                        <label className='text-orange-100 px-1 capitalize font-extrabold' htmlFor="last-name">last name:</label>
                        <input
                        className='bg-orange-300 border-0 outline-none py-1 px-3 rounded-md text-orange-100 font-medium' 
                         type="text" name="last-name" id="last-name" />
                    </div>
                    <div className='w-full flex  items-center justify-center space-x-10 my-3'>
                        <label className='text-orange-100 px-1 capitalize font-extrabold'  htmlFor="email">email address:</label>
                        <input
                        className='bg-orange-300 border-0 outline-none py-1 px-3 rounded-md text-orange-100 font-medium w-9/12' 
                         type="email" name="email" id="email" />
                    </div>
                    <div className='w-full flex  items-center justify-center space-x-8 my-3'>
                        <label className='text-orange-100 px-1 capitalize font-extrabold'  htmlFor="phone">phone Number:</label>
                        <input
                        className='bg-orange-300 border-0 outline-none py-1 px-3 rounded-md text-orange-100 font-medium w-9/12' 
                         type="email" name="phone" id="phone" />
                    </div>
                    <div className='w-full flex  items-center justify-center space-x-8 my-3'>
                        <label className='text-orange-100 px-1 capitalize font-extrabold'  htmlFor="city">choose city:</label>
                        <select
                        className='bg-orange-300 border-0 outline-none py-1 px-3 rounded-md text-orange-100 font-medium w-9/12' 
                         name="city-collection" id="city">
                            <option value="choose a city">choose a city</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Kushtia">Kushtia</option>
                            <option value="sylhet">sylhet</option>
                            <option value="barishal">barishal</option>
                        </select>
                    </div>
                    <div className='w-full flex  items-center justify-center space-x-8 my-3'>
                        <label className='text-orange-100 px-1 capitalize font-extrabold' htmlFor="gender">choose a gender</label>
                        <input  type="radio" name="male" id="male" /> <span className='text-orange-100 capitalize font-extrabold italic'>male</span>
                        <input  type="radio" name="male" id="male" /> <span className='text-orange-100 capitalize font-extrabold italic'>female</span>
                        <input  type="radio" name="male" id="trans" disabled title='you disgrace bastard not welcome here !' /> <span className='text-orange-100 capitalize font-extrabold italic'>trans</span>
                        <input  type="radio" name="male" id="male" /> <span className='text-orange-100 capitalize font-extrabold italic'>eunuch</span>
                    </div>
                    <div className='w-full flex  items-center justify-center space-x-8 my-5 mb-10'>
                        <input className='w-full border-orange-400 border-2 py-2 text-xl font-extrabold uppercase text-orange-100 rounded-md shadow-md cursor-pointer bg-orange-600/50' type="submit" value="submit" />                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;