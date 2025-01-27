import React from 'react';

const Button = ({btnName, onAction, className}) => {
    return (
        <button 
        onClick={onAction}
        className={`capitalize font-medium  text-sm p-1 rounded-md shadow-md ${className}`}
        >
            {btnName}
        </button>
    );
};

export default Button;