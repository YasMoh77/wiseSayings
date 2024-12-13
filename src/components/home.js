import React, { useState, useEffect,useRef,useContext } from 'react';
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
        const refSlider = useRef(null) 
        const [slider, setSlider] = useState(0)  
        useEffect(() => {
            setSlider(refSlider.current.scrollWidth -  refSlider.current.offsetWidth)
        }, []) 
        //prev & next  
        const prevBtn = useRef(null)
        const nextBtn = useRef(null)
        const prev=()=>{
            refSlider.current.scrollLeft -=544;
            if(refSlider.current.scrollLeft<530){ prevBtn.current.style='color:red;border:none';
            }else if(refSlider.current.scrollLeft>540){prevBtn.current.style.color='green';nextBtn.current.style.color='green';}
        }
          
        const next=()=>{
            refSlider.current.scrollLeft +=545;
            if(refSlider.current.scrollLeft>540 && refSlider.current.scrollLeft<2180){
                prevBtn.current.style.color='green';nextBtn.current.style.color='green';
            }else if(refSlider.current.scrollLeft>2180){ nextBtn.current.style.color='red';}
        }
        
        
        /* hooks functions */

    return (
        <div >
            <br/>
           <h1 className='h1-top'>See what some famous and brainy people said</h1> 
            <div className='slider-cont flex center w-mid' >
                <motion.button className='sliderBtn' ref={prevBtn}  onClick={prev} > ⟨ </motion.button>
                    <motion.div ref={refSlider} className='slider'  >
                            <motion.div drag="x" dragConstraints={{right:0 , left:-slider}} className='slider-son' >
                            {
                                arr.map((e,index)=> (<img src={e} key={index} />  )  )
                            }
                            </motion.div>     
                    </motion.div>
                <motion.button className='sliderBtn nextBtn' ref={nextBtn}  onClick={next}> ⟩ </motion.button> 
              </div>
                
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


