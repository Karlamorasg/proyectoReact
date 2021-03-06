import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAB2fwLI4UHhMy8hhS5yb8mq_h80jdzxaY",
    authDomain: "proyectoreact-336f6.firebaseapp.com",
    databaseURL: "https://proyectoreact-336f6.firebaseio.com",
    projectId: "proyectoreact-336f6",
    storageBucket: "proyectoreact-336f6.appspot.com",
    messagingSenderId: "417489897294",
    appId: "1:417489897294:web:a6a8c94ac5ca512048c01f",
    measurementId: "G-GRPSEGMM51"
})

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


