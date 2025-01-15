import React from 'react';
import UE from '../componant/UE';
import Menu from '../componant/Menu';
import Log from '../componant/Log';
import { BtnClick } from '../handler/btnClick';

const Blog = () => {
    return (
        <div>
        <Log BtnClick= {()=>BtnClick()} />
        <Menu />
        <UE />
        </div>
    );
};

export default Blog;