import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import FuncCounter from './FuncCounter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FuncCounter title="이것은 Counter입니다." num={0}></FuncCounter> 
);


//reportWebVitals();
