import React, {useState, useEffect} from 'react';

import '../../assets/styles/styles.scss';
import "regenerator-runtime/runtime.js";


const API = 'https://app.scrapinghub.com/api/v2/datasets/EGDT3RXEQ6q/download?format=json'

export const Quote = ()=>{
  
  const [quotes,useQuotes] = useState([])

  useEffect(()=>{
    const getQuote = async () => {
      const response = await fetch (`${API}`)
      const data = await response.json()
      useQuotes(data[0]['complete_quote'][0])
      console.log(`This is ${quotes}`);
    }
    getQuote();
    console.log(quotes);
  },[])

  return(
    <div className="main">
      <div className="quote">
        <h1>hello {quotes[0]} </h1>
      </div>
      <div className="author">
        <small>{quotes[1]}</small>
      </div>
    </div>
  )
}