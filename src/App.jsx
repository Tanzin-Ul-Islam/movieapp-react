import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./app.css"
export default function App() {
    let [quote, setQuote] = useState("");
    useEffect(() => {
        fetchQuote();
    }, []);
    const fetchQuote = () => {
        axios.get('https://api.adviceslip.com/advice').then((response) => {
            let data = response.data.slip.advice
            setQuote(quote = data);
        }).catch((error) => {
            console.log("error",error);
        });
    }
    return (
        <div className='app'>
            <div className='card'>
                <h3 className='heading'>{quote}</h3>
                <button className='button' onClick={()=>{fetchQuote()}}>Give me advice</button>
            </div>
        </div>
    )
}
