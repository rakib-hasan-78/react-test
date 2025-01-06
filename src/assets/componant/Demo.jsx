import { useRef } from "react";


const Demo = (props) => {
    let message = useRef(null);
    let testOne = useRef(null);
    let btnText = useRef();
    let standard = 99;

    const textShown = () => {
        if (message.current.innerText === 'Job Done...!') { 
            message.current.innerText =  '' ;
            btnText.current.innerText = 'Message';
            testOne.innerText = ''
        } else {
             message.current.innerText = 'Job Done...!';
             testOne.innerText = `Test Completed.....`;
             btnText.current.innerText = 'Hide MSG'
        }
    };

    return (
        <div>
            <h1 className="text-center text-cyan-400 text-4xl font-black mt-10 capitalize italic"> hello world!  {420}</h1>
            <p className="text-center uppercase text-4xl text-pretty text-rose-500 mt-16 italic font-black">{(()=>{

                if(standard>=80 && standard<=90){
                    return <span>good result</span>
                } else if (standard>90 && standard <95) {
                    return <span>brilliant result</span>
                } else if (standard>=95) {
                    return <span>distinguished result</span>
                } else {
                    return <span>average result</span>
                }

            })()}</p>
            <h1 className="text-center text-purple-600 font-extrabold capitalize">{props.test}</h1>
            <p>hello today! this is {props.item['name']}, a {props.item['age']} years {props.item['occupation']} working to {props.item['aim']} </p>
            <p ref={message}></p>
            <p ref ={(p)=>testOne = p}></p>
            <button ref={btnText} type="button"  onClick={()=>textShown()} className="border-2 px-5 border-cyan-200 capitalize rounded-md mx-auto w-52 flex flex-1 items-center justify-center">message</button>
        </div>
    );
};

export default Demo;