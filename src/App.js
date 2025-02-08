import {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js
import 'bootstrap-icons/font/bootstrap-icons.css';   
import './App.css';

//components
import Try, {a} from './components/try'
import Nav from './components/nav'
import Home from './components/home'
import Not from './components/not'
import Offline from './components/custom/offline';
//
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createContext } from 'react';



export const NameCon = createContext()
  

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
    <div className="text-center">    
           {/* if offline */}
           {offline && <Offline/>}
           <Nav/>
           <NameCon.Provider value='' >
              <BrowserRouter>
                  <Routes>         
                      <Route path='/try' element={<Try/>}/>
                      <Route path='/' element={<Home/>}/>
                      <Route path='*' element={<Not/>}/>
                  </Routes>
              </BrowserRouter>
          </NameCon.Provider>
    </div>
  );
}


export default App;
