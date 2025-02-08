import { useState, useEffect } from "react";
import axios from 'axios'
import img from '../../images/wiseMan2.jpg'

const Api4 = () => {
    const [quote, setQuotee] = useState(null)
    const [author, setAuthor] = useState(null)
    const func= async  () => {
        const res=   await axios.get('https://dummyjson.com/quotes/430');//https://api.quotable.io/quotes/Wp2A_oOWNEq
        setAuthor(res.data.author)
        setQuotee(res.data.quote)
       }
   
    useEffect(() => {
         
        func();
    }, [])
   if(!author){
     return  <p>Loading...</p>
   }
   return(
    <>
         <div className='h-50 mb-5'>
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

export default Api4

