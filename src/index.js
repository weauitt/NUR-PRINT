import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SmoothScrolling from './utils/SmoothScroll'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <SmoothScrolling>
        <App />
      </SmoothScrolling>
    </BrowserRouter>

  </React.StrictMode>
);
