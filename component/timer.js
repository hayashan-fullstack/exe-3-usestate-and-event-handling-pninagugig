import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Timer=()=>{
    const [minutes, setCounter] = useState(0)
    const [second, setCounter2] = useState(0)
    console.log(minutes)
    // const restart = () => {
    //     clearTimeout
    // setCounter(0)
    // }
    setTimeout(() => {
        if(second==59)
        {
            setCounter2(0)
            setCounter(minutes+1) 
        }
        else setCounter2(second+1)
    }, 100)
    
    // for(let i=0; i<10; i++) {
    //     console.log(props.counter)
    // }
    return (
        <div style={{ margin: '20%' }}>
            <h1> That is my clock</h1>
            <h2> { minutes+ " : " + second}</h2>
            <h1>I'm glad you're enjoying my watch, and I hope you now know what time it is</h1>

            <br />
        </div>
    )
}