import React from 'react';

const SingleJue = ({id, name, username, email, address, phone, website, company}) => {
    const {street, suite, city, zipcode} = address; 
    const {name:companyName, bs} = company; 
    return (
        <div className='w-3/12 py-3 bg-orange-400 flex flex-col capitalize rounded-md h-80 text-orange-100'>
            <h5>employee ID: <span className='bg-orange-700/50 px-3 py-1  rounded-md'>{id}</span></h5>
            <h4>employee Name: {name}</h4>
            <p>User Name : <span className='bg-orange-600/40 px-3 py-1  rounded-md'>{username}</span></p>
            <div className='w-full flex-col'>
                <h4>Address:</h4>
                <h5>Street: {street}</h5>
                <p>City:{city}, zipcode: {zipcode}</p>
            </div>
            <div>
                <h4>Company:</h4>
                <h5>Name: <span className='bg-orange-300/40 px-3 py-1  rounded-md'>{companyName} </span> </h5>
                <p>Business type: {bs}</p>
            </div>
        </div>
    );
};

export default SingleJue;