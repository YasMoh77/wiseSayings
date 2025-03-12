import { useRef } from 'react';
import { motion,useInView } from 'framer-motion';


const Footer = () => {
    const refFoot1 = useRef('')
    const refFoot2 = useRef('')
    const inViewFoot1 = useInView(refFoot1,{once:true})
    const inViewFoot2 = useInView(refFoot2,{once:true})
    return (
        
        <div className='h-md-25  footer  text-white px-2 pt-3 pb-5'>
            <div className='mb-5 d-md-flex justify-content-between '>
                  <motion.div className='d-md-fle mb-4 mb-md-0 align-items-center'
                        ref={refFoot1}
                        initial={{opacity:0,x:-100}}
                        animate={inViewFoot1?{opacity:1,x:0}:{}}
                        transition={{duration:.7,ease:"easeOut"}}
                        >
                      <p className='mb-2 mb-md-3 w-fit mx-auto '> Developed by</p>
                      <a className='d-block w-fit mx-auto' target='_blank' rel='noopener noreferer nofollow' href='https://github.com/YasMoh77'><i className='bi bi-person-circle fs-4 fs-md-5'></i></a>
                  </motion.div> 
                  <motion.div className='d-md-fle align-items-center'
                        ref={refFoot2}
                        initial={{opacity:0,x:-100}}
                        animate={inViewFoot2?{opacity:1,x:0}:{}}
                        transition={{duration:.7,ease:"easeOut"}}
                        >
                      <p className='mb-2 mb-md-3 w-fit mx-auto'>contact me </p>
                      <div className='d-flex w-fit mx-auto' > 
                          <a className='d-block d-md-inline' target='_blank' rel='noopener noreferer nofollow' href='https://web.facebook.com/YaMo1922/'><i className='bi bi-facebook fs-4 fs-md-5'></i></a> 
                          <a className='ms-3 d-block d-md-inline' target='_blank' rel='noopener noreferer nofollow' href='https://wa.me/201020121073'><i className='bi bi-whatsapp fs-4 fs-md-5'></i></a>
                          <a className='ms-3 d-block d-md-inline' target='_blank' rel='noopener noreferer nofollow' href='mailto:hgq1100@yahoo.com'><i className='bi bi-envelope-at fs-4 fs-md-5'></i></a>
                      </div>
                  </motion.div>
             </div>
        </div>
    )
}

export default Footer
