import React, { useState,useMemo, useEffect,useRef,useContext } from 'react';
import {NameCon } from '../App.js';
import { motion } from 'framer-motion';
//hooks
import Api from './custom/useApi1.js';
import Api2 from './custom/useApi2.js';
import Api3 from './custom/useApi3.js';
import Api4 from './custom/useApi4.js';
//pics
import {arr} from './imageStore';



const Home = () => {
    
      /* hooks here */
        const n = useContext(NameCon) 
        const refSlider = useRef(0) 
        const [slider, setSlider] = useState(0)  
        useEffect(() => {
            setSlider(refSlider.current.scrollWidth -  refSlider.current.offsetWidth)
          
            
        }, [])   
        
        /* hooks functions */

    return (
        <div >
            <br/>
           <h1 className='h1-top'>See what some famous and brainy people said</h1> 
            <br/><br/><br/>
              <motion.div ref={refSlider} className='slider'  >
                   <motion.div> prev</motion.div>  
                        <motion.div drag="x" dragConstraints={{right:0 , left:-slider}} className='slider-son' >
                        {
                            arr.map((e,index)=> ( <img src={e} key={index} />) )
                        }
                        </motion.div>     
                   <motion.div> next</motion.div>        
              </motion.div>
           <div className='flex wrap home-top-cont'>
              <div className='child'><Api2/></div>
              <div className='child'><Api3/></div>
              <div className='child'><Api4/></div>
           </div>

           <div><Api/></div>                                                
            <hr/> <br/><br/> <br/>     
           
        </div>
        
    )
}

export default Home


