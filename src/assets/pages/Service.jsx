import React from 'react';
import MultiRef from '../componant/MultiRef';
import Us from '../componant/Us';
import Menu from '../componant/Menu';
import Log from '../componant/Log';
import { BtnClick } from '../handler/btnClick';

const Service = () => {
    return (
        <div>
            <Log BtnClick= {()=>BtnClick()} />
            <Menu />
            <MultiRef />
            <Us />
        </div>
    );
};

export default Service;