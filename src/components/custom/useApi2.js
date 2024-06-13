import { useState, useEffect } from "react";
import axios from 'axios'
import img from '../../images/wiseMan2.jpg'

const Api2 = () => {
    const [state, setstate] = useState(null)
    useEffect(() => {
         const func= async  () => {
         const res=   await axios.get('https://api.quotable.io/quotes/nH5op9VWSA5');
         setstate(res.data)
        }
        func();
    }, [])
   if(!state){
     return  <p>Loading...</p>
   }
   return(
    <>
        <div className='div-img'>
            <img src={img}/>
        </div>
        <div>
            <p>{state.author}</p>
            <article>{state.content}</article>
            <i>[Tags: {state.tags.join(',')}]</i>
        </div>     
    </>

   );
}

export default Api2
