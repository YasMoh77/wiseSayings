import React, { useState, useEffect,useRef,useContext } from 'react';
import {NameCon } from '../App.js';
import { motion } from 'framer-motion';
//hooks
import OneQuote from './custom/oneQuote.jsx';
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
            if(refSlider.current.scrollLeft<50){ prevBtn.current.style.color='red';
            }else if(refSlider.current.scrollLeft>540){prevBtn.current.style.color='green';nextBtn.current.style.color='green';}
        }
          
        const next=()=>{
            refSlider.current.scrollLeft +=545;
            if(refSlider.current.scrollLeft>540 && refSlider.current.scrollLeft<1200){
                prevBtn.current.style.color='green';nextBtn.current.style.color='green';
            }else if(refSlider.current.scrollLeft>1200){ nextBtn.current.style.color='red';}
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
            prev()
        }, [])


    return (
        <><div className='container-fluid'>
            <br/>
           <h1 className='text-secondary mb-5'>See what some famous and brainy people said</h1> 
            {enlarge&& <div className='overlay'><img src={enlarge} /> <span onClick={cancelEnlarge} className='close-btn'>╳</span></div>}
            <div className='slider-cont d-flex mx-auto wid-custom' >
                <motion.button className='sliderBtn' ref={prevBtn}  onClick={prev} > ⟨ </motion.button>
                    <motion.div ref={refSlider} className='slider d-flex rounded-3'  >
                        <motion.div  drag="x" dragConstraints={{right:0 , left:-slider}} className='slider-son d-flex rounded-2' >
                            {
                                arr.map((e,index)=> {   return (<motion.img  className='rounded-5 p-2 border-info border-4'  onClick={()=>{ enlargePicFunc(e.name)}} src={e.name} key={index} /> ) }  )
                            }
                        </motion.div>     
                    </motion.div>
                <motion.button className='sliderBtn nextBtn' ref={nextBtn}  onClick={next}> ⟩ </motion.button> 
            </div>
             
           <div className='row  justify-content-evenly '>
              <div className='child rounded-3 py-3 col-4 col-sm-12'><Api2/></div>
              <div className='child rounded-3 py-3 col-4 col-sm-12'><Api3/></div>
              <div className='child rounded-3 py-3 col-4 col-sm-12'><Api4/></div>
           </div>

           <div><OneQuote/></div>                                                
        </div>

        <div className='h-25 footer d-flex justify-content-around text-white pt-3'>
          <p className='w-50'> Developed by <a className='' target='_blank' rel='noopener noreferer nofollow' href='https://github.com/YasMoh77'>Yasser Mohamed</a></p>
          <div>
            <span>contact me: </span>
            <a className='ms-3' target='_blank' rel='noopener noreferer nofollow' href='https://web.facebook.com/YaMo1922/'>facebook</a> 
            <a className='ms-3' target='_blank' rel='noopener noreferer nofollow' href='https://wa.me/201020121073'>whatsapp</a>
            <a className='ms-3' target='_blank' rel='noopener noreferer nofollow' href='mailto:hgq1100@yahoo.com'>email</a>
          </div>
        </div></>
        
    )
}

export default Home


