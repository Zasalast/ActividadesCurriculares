import React, { Component } from 'react';
import './App.css';
/* import Header from './Component/Header';
import AgregarActividad from './Component/AgregarActividad';
import Listas from './Component/Listas'; */
import Router from './Component/Router';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/storage";
import "firebase/performance";
import "firebase/database";
export default class App extends Component {


  render() {
    const firebaseConfig = {
      apiKey: "AIzaSyBzjBNNrO0tHcXbdZ7rn37Q3pclTig-aKw",
      authDomain: "zasalast-42259.firebaseapp.com",
      databaseURL: "https://zasalast-42259.firebaseio.com",
      projectId: "zasalast-42259",
      storageBucket: "zasalast-42259.appspot.com",
      messagingSenderId: "342304818465",
      appId: "1:342304818465:web:8b6c91e2f924a05b2f6a60",
      measurementId: "G-SCWT70NEHN"
    };

    firebase.initializeApp(firebaseConfig);
    return (

      <div className="container">
        <Router />
      </div>

    );
  }

}

