import ReactDOM from 'react-dom/client';
import React from 'react';
import PokeData from './PokeData';

const root = ReactDOM.createRoot(document.querySelector('#container'));
root.render(<PokeData id={1}/>);