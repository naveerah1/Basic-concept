//1import react and react dom libraries
import React from 'react';
import ReactDOM from "react-dom";//how to get a component from the browser

//2Get reference to div with ID root
const el = document.getElementById('root');

//3 tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4 create a component
function app(){
    // let message = 'Bye there'
    // if(Math.random()>0.5){
    //     message = 'Hello there';
    // }
    const message= {};
    
    return <h1>{message}</h1>
}

//5 Show the component on the screen
root.render(<App />)