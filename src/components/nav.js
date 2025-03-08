//import React from 'react'
import img from '../images/angel.jpg'
import { motion } from 'framer-motion'


const Nav = () => {
    return (
        <div className='nav bg-success text-white fs-3 px-2 d-md-flex flex-nowrap align-items-center '>
             {/*<img className='h-75 ms-2' src={img}/>*/}
             <motion.div className='mx-auto mx-md-0 mt-2 mt-md-0 w-fit'
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:.5}}
             >
                 <i className='bi bi-book'></i>
                 </motion.div>
            <motion.p className='text-capitalize my-0 ms-3'
             initial={{opacity:0,x:-100}}
             animate={{opacity:1,x:0}}
             transition={{duration:.5}}
            > wise sayings are the light we walk in</motion.p>
        </div>
    )
}

export default Nav
