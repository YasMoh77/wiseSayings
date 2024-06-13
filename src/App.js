import './App.css';
//components
import Try, {a} from './components/try'
import Nav from './components/nav'
import Home from './components/home'
import Not from './components/not'
//
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createContext } from 'react';



export const NameCon = createContext()
  

function App() {
  return (
    <div className="App">    
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
