

import './App.css'
import Demo from './assets/componant/Demo';
import Log from './assets/componant/Log';
import NewComp from './assets/componant/NewComp';
import MultiRef from './assets/componant/MultiRef';
import Api from './assets/componant/Api';

function App() {

  const BtnClick = () => {
    alert('log out done ....');
    console.log('clicked....')
  }
  const item = {
    name: 'dr.james',
    age: '24',
    aim: 'ensure medical support',
    occupation: 'businessman'
}
  return (
    <>
      <Log BtnClick= {()=>BtnClick()} />
      <Demo test="Demo Title" item= {item}/>
      <NewComp />
      <MultiRef />
      <Api />
    </>
  )
}

export default App
