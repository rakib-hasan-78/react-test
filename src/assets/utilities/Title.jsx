import React from 'react';

const Title = ({number, text, className}) => {
    const Tag = `h${number}`
    return (
        <Tag
        className={`font-extrabold uppercase py-1 text-blue-300 ${className}`}>
            {text}
        </Tag>
    );
};

export default Title;