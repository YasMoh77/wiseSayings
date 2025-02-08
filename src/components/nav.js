//import React from 'react'
import img from '../images/angel.jpg'


const Nav = () => {
    return (
        <div className='nav bg-success text-white fs-3 d-flex align-items-center '>
             <img className='h-75 ms-2' src={img}/>
            <p className='text-capitalize ms-3'> wise sayings are the light we walk in</p>
        </div>
    )
}

export default Nav
