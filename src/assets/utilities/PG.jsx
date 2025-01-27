import React from 'react';

const PG = ({type, text, className}) => {
    const Tag = `${type}`
    return (
        <Tag
        className={`text-lg text-blue-100 capitalize py-1 className`}>
            {text}
        </Tag>
    );
};

export default PG;