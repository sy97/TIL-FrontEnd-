import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import FuncCounter from './FuncCounter';
//import App3 from './reducer/App3';
import App4 from './reducer/App4';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<FuncCounter title="이것은 Counter입니다." num={0}></FuncCounter> 
  <App4></App4>
);


//reportWebVitals();
