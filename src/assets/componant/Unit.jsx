 import React from 'react';

const Unit = ({title, grade, score, isResult}) => {

/*        return  isResult ?
            (
                <div  className='w-3/12 flex flex-wrap flex-col items-center justify-center space-y-4 border-2 rounded-md pt-4 pb-3'>
                    <h3 className='capitalize font-extrabold italic'>this is {title}</h3>
                    <p>Class : {grade}</p>
                    <p>Score : {score}</p>
                </div>
            ) :  `Not Applicable....` */
            let item;
           
                item= <li>Task:{title}{isResult||`Not Done`}</li>
            return item;
};

export default Unit;