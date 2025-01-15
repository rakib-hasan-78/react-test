 import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div className='w-full flex flex-wrap items-center justify-center space-x-1'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Product">Product</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
            
        </div>
    );
};

export default Menu;