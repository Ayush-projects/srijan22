import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './context/authContext';
import LastLocationProvider from './context/lastLocationContext';

require('dotenv').config();


ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </AuthContextProvider>
  </BrowserRouter>
  , document.getElementById('root'));
