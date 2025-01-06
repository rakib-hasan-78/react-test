/* mport React from 'react' */;

const Log = (props) => {
    const status = true;
    switch (status) {
        case true:
            return <button onClick={props.BtnClick} type="button">Log Out</button>;
        case false: 
            return <button type="button">Log In</button>
        default:
            return null;
    }
};

export default Log;