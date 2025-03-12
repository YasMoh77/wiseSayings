import React, { useState, useEffect,useRef,useContext } from 'react';
//import {NameCon } from '../App.js';
import { Link } from 'react-router-dom';
import { motion,useInView } from 'framer-motion';
//hooks
import OneQuote from './custom/oneQuote.jsx';
import Api2 from './custom/useApi2.js';
import Api3 from './custom/useApi3.js';
import Api4 from './custom/useApi4.js';
//pics
import {arr} from './imageStore';
  


const Home = () => {
      /* hooks here */
        //const n = useContext(NameCon) 
        const refSlider = useRef(null) 
        const [slider, setSlider] = useState(0)  
        const refChildCont = useRef('')
        const refOneQuote = useRef('')
        const inViewChildCont = useInView(refChildCont,{once:true})
        const inViewOneQuote = useInView(refOneQuote,{once:true})
       

        useEffect(() => {
            setSlider(refSlider.current.scrollWidth -  refSlider.current.offsetWidth)
        }, []) 
        //prev & next  
        const prevBtn = useRef(null)
        const nextBtn = useRef(null)
        const prev=()=>{
            refSlider.current.scrollLeft -=384;
            if(refSlider.current.scrollLeft<50){ prevBtn.current.style.color='red';
            }
        }
          
        const next=()=>{
            refSlider.current.scrollLeft +=385;
            if(refSlider.current.scrollLeft>240 && refSlider.current.scrollLeft<1200){
                prevBtn.current.style.color='green';nextBtn.current.style.color='green';
            }
        }

        //enlarge
        const [enlarge, setEnlarge] = useState('')
        const enlargePicFunc=(src)=>{
            setEnlarge(src)
            document.getElementsByTagName('body')[0].style.overflow='hidden'
        }
        //cancel enlarge
        const cancelEnlarge=()=>{
            setEnlarge('')
            document.getElementsByTagName('body')[0].style.overflow='initial'
        }

        
        //start prev() when page loads
        useEffect(() => {
           // prev()
        }, [])


    return (
        <><div className='container-fluid'>
           
            <motion.p className='text-capitalize text-center mt-3 mb-4 fs-2'
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                transition={{duration:.5}}
                > wise sayings are the light we walk in
            </motion.p>

           <motion.h1 className='text-secondary text-center mb-5'
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                transition={{duration:.5,ease:"easeOut"}}
                >
                See what some famous and brainy people said
             </motion.h1>

            {enlarge&& <div className='overlay'><img src={enlarge} /> <span onClick={cancelEnlarge} className='close-btn'>╳</span></div>}
           
            <motion.div className='slider-cont d-flex  mx-auto align-items-center  row ' 
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1,ease:"easeOut"}}
                    >
                    <motion.div ref={refSlider} className='slider d-flex rounded-3'  >
                        <motion.div  drag="x" dragConstraints={{right:0 , left:-slider}} className='slider-son d-flex rounded-2' >
                            {
                                arr.map((e,index)=> 
                                    <motion.img  className='col-10 col-md-5  rounded-5 py-2 px-3 border-info border-4'  onClick={()=>{ enlargePicFunc(e.name)}} src={e.name} key={index} /> 
                                )
                            }
                        </motion.div>     
                    </motion.div>
                    <motion.div className='d-flex mx-auto justify-content-between'> 
                        <motion.button className='sliderBtn text-light border-0 fw-bold bg-secondary mt-3' ref={prevBtn}  onClick={prev} > ⟨ </motion.button> 
                        <motion.button className='sliderBtn text-light border-0 fw-bold bg-secondary mt-3 ' ref={nextBtn}  onClick={next}> ⟩ </motion.button>
                    </motion.div>
            </motion.div>
             
           <motion.div className='row  justify-content-between mb-5'
                ref={refChildCont}
                initial={{opacity:0,y:100}}
                animate={inViewChildCont?{opacity:1,y:0}:{}}
                transition={{duration:.9,ease:"easeOut"}}
              >
              <div className='child text-center rounded-3 pt-4 pb-5 mb-5 mb-md- col-12 col-md-5 col-lg-4'><Api2/></div>
              <div className='child text-center rounded-3 pt-4 pb-5 mb-5 mb-md- col-12 col-md-5 col-lg-4'><Api3/></div>
              <div className='child text-center rounded-3 pt-4 pb-5 mb-5 mb-md- col-12 col-md-8 col-lg-4'><Api4/></div>
           </motion.div>

           <motion.div className='row'
                ref={refOneQuote}
                initial={{opacity:0,y:100}}
                animate={inViewOneQuote?{opacity:1,y:0}:{}}
                transition={{duration:.9,ease:"easeOut"}}
               >
               <OneQuote/>
           </motion.div>                                                
        </div>

        </>
        
    )
}

export default Home

