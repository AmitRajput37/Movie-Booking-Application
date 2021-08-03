import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './screens/Home/Routes';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);


