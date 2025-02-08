import axios from "axios";

 //for forms without files to api
 export const   http=axios.create({
    baseURL:'https://quoteslate.vercel.app/api/quotes/',
    headers:{
        "Content-Type": "application/json",
        'X-Requested-With':'XMLHttpRequest',
    },
    //withCredentials:true,// for authentication only
})