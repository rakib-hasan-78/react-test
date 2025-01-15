import React from 'react';
import Log from '../componant/Log';
import Demo from '../componant/Demo';
import NewComp from '../componant/NewComp';
import MultiRef from '../componant/MultiRef';
import Api from '../componant/Api';
import Us from '../componant/Us';
import Form from '../componant/Form';
import UE from '../componant/UE';
import Menu from '../componant/Menu';
import {BtnClick} from '../handler/btnClick'
const Home = () => {

      const item = {
        name: 'dr.james',
        age: '24',
        aim: 'ensure medical support',
        occupation: 'businessman'
    }
    return (
        <div>
            <Menu />
            <Log BtnClick= {()=>BtnClick()} />
            <Demo test="Demo Title" item= {item}/>    
            <NewComp />
            <MultiRef />
            <Api />
            <Us />
            <Form />
            <UE />
        </div>
    );
};

export default Home;

