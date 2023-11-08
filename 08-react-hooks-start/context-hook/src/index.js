import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ComponentsNoContext/App';
// import App from './ComponentsContext/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
