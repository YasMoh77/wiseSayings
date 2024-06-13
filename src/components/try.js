import React from 'react';
import img from '../images/angel.jpg';
export const a=2;

const arr=[{'name':'omar'},{'name':'abdu'},{'name':'huda'},{'name':'yas'}];
//const arr=[];
const response=await fetch('https://api.quotable.io/random');
const quote=await response.json();
//console.log(typeof(quote))


const Try = (props) => {
    return (
        <div class='try-cont'>
            {
                arr.length>=1? arr.map((e,i)=>{
                    return(
                    <div class=''>
                        <img className='pics' src={img}/>
                        <a>iam {e.name}</a>
                    </div>
                    )
                }):<h2>No Data found</h2>
            }
            

        </div>
           
    )
}

export default Try

