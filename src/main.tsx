import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {' '}
    //se usa para que no se puedan usar funciones deprecadas que estoy usando y
    no lo deberia hacer
    <App />
  </React.StrictMode>
);
