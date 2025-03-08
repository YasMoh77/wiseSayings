import React, { useState, useEffect,useRef,useContext } from 'react';
import {NameCon } from '../App.js';
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
        const n = useContext(NameCon) 
        const refSlider = useRef(null) 
        const [slider, setSlider] = useState(0)  
        const refChildCont = useRef('')
        const refOneQuote = useRef('')
        const refFoot1 = useRef('')
        const refFoot2 = useRef('')
        const inViewChildCont = useInView(refChildCont,{once:true})
        const inViewOneQuote = useInView(refOneQuote,{once:true})
        const inViewFoot1 = useInView(refFoot1,{once:true})
        const inViewFoot2 = useInView(refFoot2,{once:true})

        useEffect(() => {
            setSlider(refSlider.current.scrollWidth -  refSlider.current.offsetWidth)
        }, []) 
        //prev & next  
        const prevBtn = useRef(null)
        const nextBtn = useRef(null)
        const prev=()=>{
           // refSlider.current.scrollLeft -=544;
            refSlider.current.scrollLeft -=384;
            if(refSlider.current.scrollLeft<50){ prevBtn.current.style.color='red';
            }else if(refSlider.current.scrollLeft>540){prevBtn.current.style.color='green';nextBtn.current.style.color='green';}
        }
          
        const next=()=>{
           // refSlider.current.scrollLeft +=545;
            refSlider.current.scrollLeft +=385;
            if(refSlider.current.scrollLeft>540 && refSlider.current.scrollLeft<1200){
                prevBtn.current.style.color='green';nextBtn.current.style.color='green';
            }else if(refSlider.current.scrollLeft>1600){ nextBtn.current.style.color='red';}
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
            <br/>
           <motion.h1 className='text-secondary mb-5'
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:.5,ease:"easeOut"}}
           >
             See what some famous and brainy people said
             </motion.h1>

            {enlarge&& <div className='overlay'><img src={enlarge} /> <span onClick={cancelEnlarge} className='close-btn'>╳</span></div>}
           
            <motion.div className='slider-cont d-flex  mx-auto align-items-center mt-5 row ' 
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1,ease:"easeOut"}}
                    >
                    <motion.div ref={refSlider} className='slider d-flex rounded-3'  >
                        <motion.div  drag="x" dragConstraints={{right:0 , left:-slider}} className='slider-son d-flex rounded-2' >
                            {
                                arr.map((e,index)=> 
                                    <motion.img  className='col-9 col-md-5  rounded-5 p-2 border-info border-4'  onClick={()=>{ enlargePicFunc(e.name)}} src={e.name} key={index} /> 
                                )
                            }
                        </motion.div>     
                    </motion.div>
                    <motion.div className='d-flex -25 mx-auto justify-content-between'> 
                        <motion.button className='sliderBtn mt-3' ref={prevBtn}  onClick={prev} > ⟨ </motion.button> 
                        <motion.button className='sliderBtn mt-3 ' ref={nextBtn}  onClick={next}> ⟩ </motion.button>
                    </motion.div>
            </motion.div>
             
           <motion.div className='row  justify-content-between mb-4'
                ref={refChildCont}
                initial={{opacity:0,y:100}}
                animate={inViewChildCont?{opacity:1,y:0}:{}}
                transition={{duration:.9,ease:"easeOut"}}
              >
              <div className='child rounded-3 pt-4 pb-5 mb-5 mb-md- col-12 col-md-5 col-lg-4'><Api2/></div>
              <div className='child rounded-3 pt-4 pb-5 mb-5 mb-md- col-12 col-md-5 col-lg-4'><Api3/></div>
              <div className='child rounded-3 pt-4 pb-5 mb-5 mb-md- col-12 col-md-8 col-lg-4'><Api4/></div>
           </motion.div>

           <motion.div className='row'
             ref={refOneQuote}
             initial={{opacity:0,y:100}}
             animate={inViewOneQuote?{opacity:1,y:0}:{}}
             transition={{duration:.9,ease:"easeOut"}}
           ><OneQuote/></motion.div>                                                
        </div>

        <div className='h-md-25  footer  text-white px-2 pt-3 pb-5'>
            <div className='mb-5 d-md-flex justify-content-between'>
                  <motion.div className='d-md-flex mb-3 mb-md-0 align-items-center'
                        ref={refFoot1}
                        initial={{opacity:0,x:-100}}
                        animate={inViewFoot1?{opacity:1,x:0}:{}}
                        transition={{duration:.7,ease:"easeOut"}}
                        >
                      <p className='w-5 mb-0'> Developed by</p>
                      <a className='ms-2' target='_blank' rel='noopener noreferer nofollow' href='https://github.com/YasMoh77'><i className='bi bi-person-circle fs-5'></i></a>
                  </motion.div> 
                  <motion.div className='d-md-flex align-items-center'
                        ref={refFoot2}
                        initial={{opacity:0,x:-100}}
                        animate={inViewFoot2?{opacity:1,x:0}:{}}
                        transition={{duration:.7,ease:"easeOut"}}
                        >
                      <p className='mb-0'>contact me: </p>
                      <div className='d-flex ' > 
                          <a className='ms-2 ms-md-3 d-block d-md-inline' target='_blank' rel='noopener noreferer nofollow' href='https://web.facebook.com/YaMo1922/'><i className='bi bi-facebook'></i></a> 
                          <a className='ms-3 d-block d-md-inline' target='_blank' rel='noopener noreferer nofollow' href='https://wa.me/201020121073'><i className='bi bi-whatsapp'></i></a>
                          <a className='ms-3 d-block d-md-inline' target='_blank' rel='noopener noreferer nofollow' href='mailto:hgq1100@yahoo.com'><i className='bi bi-envelope-at'></i></a>
                      </div>
                  </motion.div>
             </div>
        </div>
        </>
        
    )
}

export default Home

/*
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


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2>Simple Carousel</h2>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 2</h3>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 4</h3>
          <img src="https://via.placeholder.com/800x400" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;*


const Home = () => {
      
    //slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      /* hooks here *
        const n = useContext(NameCon) 
        const refSlider = useRef(null) 
        const [slider, setSlider] = useState(0)  
        /*useEffect(() => {
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
        }*

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
            <br/>
           <h1 className='text-secondary mb-5'>See what some famous and brainy people said</h1> 
            {enlarge&& <div className='overlay'><img src={enlarge} /> <span onClick={cancelEnlarge} className='close-btn'>╳</span></div>}
           
            <div className='w-75 mx-auto mb-5'>
            <h2>Simple Carousel</h2>
                <Slider {...settings}>
                  {
                   arr.map((e,index)=>  <div><img  className='rounded-5 p-2 ms-2'  onClick={()=>{ enlargePicFunc(e.name)}} src={e.name} key={index} /></div>    )
                  }
                    
                </Slider>
            </div>
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
            </div>*
             
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

*/
