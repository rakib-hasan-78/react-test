
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './assets/pages/Home';
import Product from './assets/pages/Product';
import Service from "./assets/pages/Service";
import Blog from "./assets/pages/Blog";
import Contact from './assets/pages/Contact';
import NotFound from './assets/pages/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Service' element={ <Service/>  }/>        
          <Route path='/Blog' element={ <Blog/>  }/>
          <Route path='/Contact' element={<Contact/> }></Route>        
          <Route path='/*' element={<NotFound/> }></Route>        
        </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
