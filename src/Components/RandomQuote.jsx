import React, { useState } from 'react'
import './RandomQuote.css'
import arrow_icon from '../Components/Assets/Arrow_icon.jpg'

const RandomQuote = () => {
    let quotes =[];
    async function loadQuotes(){
        const response =await fetch("https://type.fit/api/quotes");
        quotes= await response.json();
    }
    
    const [quote,setQuote]=useState({
text:"First, find out what your hero wants, then just follow him.",
author:"Ray Bradbury",
    });
    const random =() =>{
      const select =quotes[Math.floor(Math.random()*quotes.length)];
      setQuote(select); 
    }
    loadQuotes();
  return (
   
    <div className='container'>
        <h2>Quote Generator</h2>
<div className="quote">{quote.text}</div>
<div>
    <div className="line"></div>
    <div className="bottom">
        <div className="author">{quote.author.split(',')[0]}</div>
        <div className="icons">
            <img src={arrow_icon} onClick={()=>{random()}} width="25px"alt=""/>
        </div>
    </div>
</div>
    </div>
  )
}

export default RandomQuote