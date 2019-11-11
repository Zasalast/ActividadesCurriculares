import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
/* import { ObtenerActividades,BORRAR_ACTIVIDAD,MOSTRAR_ACTIVIDADES } from './Component/Datos/reducers/actividadesReducer';; */
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
// Initialize Cloud Firestore through Firebase






  firebase.initializeApp( {
    apiKey: "AIzaSyDrwxFLl7GiBtO9vXmy3bOsJjPqxWyHPpc",
    authDomain: "actividadescurriculares.firebaseapp.com",
    databaseURL: "https://actividadescurriculares.firebaseio.com",
    projectId: "actividadescurriculares",
    storageBucket: "actividadescurriculares.appspot.com",
    messagingSenderId: "579782126753",
    appId: "1:579782126753:web:460537495138b63c3814e0",
    measurementId: "G-ZDYW7ZP9PL"
  });
/*   var db = firebase.firestore();
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1875
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
}); */
ReactDOM.render(
<App />,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
