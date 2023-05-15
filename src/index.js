import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';

import './index.css';
console.log(123);
console.log(counter(5, 4));

function counter(x, y) {
  return x + y;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
