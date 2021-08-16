import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* static calls root to show the react stuff. interacts with public folder index.html */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

