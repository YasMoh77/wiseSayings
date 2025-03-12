import { useState,useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
//import img from '../images/angel.jpg';


const Try = () => {

    const [quote, setQuote] = useState([]) 

    const getQuote=async()=>{ 
        try {
            const res = await axios.get('https://dummyjson.com/quotes');// https://ron-swanson-quotes.herokuapp.com/v2/quotes
            setQuote(res.data.quotes)
        } catch (error) {
            setQuote('something wrong happened')
        }
    }
    {/*const setMorefunc=()=>{
        getQuote()
    }*/}
    useEffect(() => {
       getQuote()
    }, [])

    return (
        <div class='minh d-flex'>
            {
                !quote
                ?<div className='mx-auto w-fit my-5 text-info '><p className='spinner-border'></p></div>
                :<>
                    <div className='p-2 w-100  mt-4'>
                        {Array.isArray(quote)&&quote.length>0
                            ?quote.map((e)=>
                                <motion.p
                                    initial={{opacity:0,y:-50}}
                                    animate={{opacity:1,y:0}}
                                    transition={{duration:1.9,ease:"easeInOut"}}
                                    >
                                    {e.id}-{e.quote} 
                                    <p className='fst-italic fw-bold'>{e.author}</p>
                               </motion.p>
                                )
                            :<p className='mx-auto w-fit my-5'></p>
                        }
                            
                       {/*} <button className='border-0 bg-success text-white' onClick={setMorefunc}>click to show more</button>*/}
                    </div>
                </>
            }

        </div>
           
    )
}

export default Try

