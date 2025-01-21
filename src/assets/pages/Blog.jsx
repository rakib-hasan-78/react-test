import React from 'react';
import UE from '../componant/UE';
import Menu from '../componant/Menu';
import Log from '../componant/Log';
import { BtnClick } from '../handler/btnClick';
import { useParams } from 'react-router-dom';

const Blog = () => {
    let {check, peck} = useParams()
    return (
        <div>
        <span>Check: {check}</span><br />
        <span>Peck: {peck}</span>
        <Log BtnClick= {()=>BtnClick()} />
        <Menu />
        <UE />
        </div>
    );
};

export default Blog;