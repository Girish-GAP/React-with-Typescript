// import react base and Dom library
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';

// create refereance to root
const el : any = document.getElementById('root');


// give control to react
const root = ReactDOM.createRoot(el);


// render component
root.render(
    <App></App>
)