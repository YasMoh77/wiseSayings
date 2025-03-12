import {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js
import 'bootstrap-icons/font/bootstrap-icons.css';   
//components
import Try from './components/try'
import Nav from './components/nav'
import Home from './components/home'
import Not from './components/not'
import Offline from './components/custom/offline';
import Footer from './components/footer/footer';
//
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
  

function App() {
  //
  const [offline, setOffline] = useState(false)
  //handle no connection
  const ifOnline=()=>{
    //check connection
    if (!navigator.onLine) {
      setOffline(true)
      const body= document.getElementsByTagName('body')[0];
      body.style.overflow='hidden';
    }
  }

  useEffect(() => {
    ifOnline()
  }, [])


  return (
    <div className="">{/*//text-center*/}    
           {/* if offline */}
           {offline && <Offline/>}
           
              <BrowserRouter>
                  <Nav/>
                  <Routes> 
                      <Route path='/try' element={<Try/>}/>
                      <Route path='/' element={<Home/>}/>
                      <Route path='*' element={<Not/>}/>
                  </Routes>
                  <Footer/>
              </BrowserRouter>
    </div>
  );
}


export default App;
