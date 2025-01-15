import React from 'react';
import Form from '../componant/Form';
import Menu from '../componant/Menu';
import Log from '../componant/Log';
import {BtnClick} from '../handler/btnClick'
const Contact = () => {

    return (
        <div>
            <Menu />
            <Log BtnClick= {()=>BtnClick()}  />
            <Form />
        </div>
    );
};

export default Contact;