import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import AgregarActividad from './Component/AgregarActividad';
import Listas from './Component/Listas';
import Router from './Component/Router';

export default class App extends Component {


  render() {
    return (

      <div className="container">
        <Router />
      </div>

    );
  }

}

