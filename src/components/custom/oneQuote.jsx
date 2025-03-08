import  { useEffect, useState,useRef } from "react";
import { http } from "../axios/axios";

const OneQuote = () => {
     //api
        const [author, setAuthor] = useState(null)
        const [quote, setQuote] = useState(null)
        const [counter, setCounter] = useState(0)
        const [tags, setTags] = useState(null)
        //
        const refQuoteOne = useRef(null)
        const counterIncrement=()=>{
             setCounter(counter+1);
         }

        
         //get random quote
         const random=async()=>{
            try{
               const res=await http.get('random');
               setAuthor(res.data.author);
               setQuote(res.data.quote)
               setTags(res.data.tags)
               //change background
               const rand = '#'+Math.floor(Math.random()*16777215).toString(16);
               refQuoteOne.current.style.backgroundColor=rand;  

            }catch(error){
               setAuthor('something wrong happened');
               setQuote('something wrong happened')
            }
         }
                     
       
   useEffect(() => {
      random();
   }, [counter]);

            
  if(!author){
     return(<p className='spinner-border mt-3'></p>);
  }
  return(
   <div ref={refQuoteOne}  className="one-quote col-12 cold-md-4 rounded-2 py-4 mb-5">
      <section className="sec">
         <article className='fs-2 mb-3'>{quote}</article>
         <p className='fs-5 mb-2'>{author}</p>
         {tags&&tags.length>0?<i>[Tags: {tags.join(', ')}]</i>:''}
      </section>
      <button className='border-0 rounded-4 fs-6 py-1 px-3 mt-4' onClick={()=>{counterIncrement()}}>Show more</button>
   </div>
   
  );
}

export default OneQuote


