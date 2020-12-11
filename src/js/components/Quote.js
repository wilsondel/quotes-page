import React, {useState, useEffect} from 'react';

import '../../assets/styles/styles.scss';
import "regenerator-runtime/runtime.js";


const API = 'https://app.scrapinghub.com/api/v2/datasets/EGDT3RXEQ6q/download?format=json'

export const Quote = ()=>{
  
  const [quotes,useQuotes] = useState([])

  const pos_quote = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  useEffect(()=>{
    const getQuote = async () => {
      const response = await fetch (`${API}`)
      const data = await response.json()
      const pos = pos_quote(0,(data[0]['complete_quote']).length+1)
      let remember_pos =[]
      // remember_pos.push(pos)
      useQuotes(data[0]['complete_quote'][pos])

      console.log(`This is ${(data[0]['complete_quote']).length} lenght`);
    }
    getQuote();
    console.log(quotes);
  },[])

  return(
    <div className="main">
      <div className="quote">
        <h1>{quotes[0]} </h1>
      </div>
      <div className="author">
        <small>{quotes[1]}</small>
      </div>
    </div>
  )
}