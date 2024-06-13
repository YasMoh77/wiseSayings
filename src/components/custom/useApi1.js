import  { useEffect, useState } from "react";

const Api = () => {
     //api
        const [api, setApi] = useState([])
        const [counter, setCounter] = useState(0)
        const counterIncrement=()=>{
         setCounter(counter+1);
         }
         
        useEffect(() => {
           fetch('https://api.quotable.io/random')
           .then(response => response.json())
           .then(data =>  {setApi(data);console.log(data)});

           const rand = '#'+Math.floor(Math.random()*16777215).toString(16);
           let tagOne=document.getElementById('oneQuote');
           tagOne.style.backgroundColor=rand;         
       }, [counter])

  if(!api){
     return(
        <p>Loading...</p>
     );

  }
  return(
   <div id='oneQuote' className="one-quote">
      <section className="sec">
         <article>{api.content}</article>
         <p>{api.author}</p>
         {api.tags&&api.tags.length>0?<i>[Tags: {api.tags.join(', ')}]</i>:''}
      
      </section>
      <button onClick={counterIncrement}>▶</button>
   </div>
   
  );
}

export default Api
