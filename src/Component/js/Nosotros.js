import React,{Component} from 'react';
import '../css/Nosotros.css';
export default class Nosotros extends Component {

    render() {
        return (
            <div className="contenido-nosotros">
               
                <div className="imagen">
                
                <img src='logo192.png' alt="imagen nosotros" />
                </div>
                <div className="contenido">
                <h2>Acerca de</h2>
                </div>
                <p>Redux es una librería JavaScript muy pequeña (Apenas 2KB en total), con muy poco código. Su API apenas son 5 funciones y lo más importante es que es JavaScript puro, por lo que es agnóstica al framework y puede utilizarse con cualquier librería framework (Angular, Polymer, React, etc...)</p>
            </div>
        );
    }
}