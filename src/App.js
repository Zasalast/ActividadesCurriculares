import React, { Component } from 'react';
import './App.css';

import Router from './Component/Router';
//redux
import {Provider} from 'react-redux';
import store from './store';
export default class App extends Component {
 
  render() {
    /* const firebase = require("firebase"); */
// Required for side-effects
require("firebase/firestore");
    return (
    <Provider store={store}>
      <div className="container">
        <Router />
    
      </div>
      </Provider>
    );
  }
}

