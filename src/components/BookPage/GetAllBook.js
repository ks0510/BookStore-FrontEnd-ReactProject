import axios from "axios";
import { useState } from "react";

export default function GetAllBook(){

  
        const[book,setBook]= useState();

        
       const showBook= ()=>{

        axios.get("http://localhost:8080/adminBook/getAllBooks").then((response)=>{
            setBook(response.data.object);
            console.log("check data "+ JSON.stringify(response.data.object) )
        }).catch( error => { console.log(error.cause)})
    }

    return(
        <>
        <button onClick={showBook}>show Book</button>
        </>
    )

        
    
}