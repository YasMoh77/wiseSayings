//import React from 'react'
import img from '../images/angel.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Nav = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-success text-white fs-5 px-2">
        <motion.div class="container-fluid"
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:.5}}
            >
          <Link className="navbar-brand fs-4 text-white" to="/">
                <div>
                    <i className='bi bi-book me-2'></i><span>Wise sayings</span>
                </div>
          </Link>
          <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse  ms-5" id="navbarNav">
            <ul className="navbar-nav fs-6">
              <li class="nav-item">
                <Link className="nav-link active text-white ms-5 me-3" aria-current="page" to="/">Homepage</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-white" to="/try">Show More  </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
      </>
    )
}

export default Nav
