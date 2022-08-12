import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDgALj4f1UVilsYesKcBspggqzrFRvr-BA",
    authDomain: "bosqueviejo-drinks.firebaseapp.com",
    projectId: "bosqueviejo-drinks",
    storageBucket: "bosqueviejo-drinks.appspot.com",
    messagingSenderId: "14289757646",
    appId: "1:14289757646:web:3ce18f469543a13f73779f",
    measurementId: "G-XNNEZ424CQ"
  };

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
