import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import { firebaseSDK } from './service/firebase';


const firebase = new firebaseSDK();

ReactDOM.render(
  <React.StrictMode>
    <App firebase={firebase}/>
  </React.StrictMode>,
  document.getElementById('root')
);
