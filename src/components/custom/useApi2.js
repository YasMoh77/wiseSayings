import { useState, useEffect,useRef } from "react";
import { motion,useInView } from 'framer-motion';
import axios from 'axios'
import img from '../../images/wiseMan2.jpg'

const Api2 = () => {
        const [quote, setQuotee] = useState(null)
        const [author, setAuthor] = useState(null)
        const ref1 = useRef('')
        const inViewRef1 = useInView(ref1,{once:true})

        const func= async  () => {
        const res=   await axios.get('https://dummyjson.com/quotes/675');//https://api.quotable.io/quotes/nH5op9VWSA5
        setAuthor(res.data.author)
        setQuotee(res.data.quote)
       }
       
    useEffect(() => {
        func();
    }, [])

   if(!author){
     return  <p className='spinner-border '></p>
   }
   return(
    <>
        <div className='h-50 mb-3 mb-md-5'>
            <img className='w-100 rounded-3 h-100' src={img}/>
        </div>
        <div>
            <p className='text-secondary fs-4 fw-bold'>{author}</p>
            <article className='p-3 bg-white rounded-2 fst-italic fs-4 '>{quote}</article>
            {/*<i>[Tags: {state.tags.join(',')}]</i>*/}
        </div>     
    </>

   );
}

export default Api2
