import React, { useEffect, useState } from 'react';
import SingleJue from './SingleJue';

const JUE = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))

    },[])
    return (
        <div className='w-full py-3 my-3 flex items-center justify-center flex-wrap space-x-2 gap-y-2 gap-x-2'>
            {users.map((user)=> ( <SingleJue key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} address={user.address} phone={user.phone} website={user.website} company={user.company}  />  ))}
        </div>
    );
};

export default JUE;