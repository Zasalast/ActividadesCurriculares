import React, { Component } from "react";

import { NavLink } from "react-router-dom";


export default class Header extends Component {
  state = {
    user: null
  };
  renderLoginButton = () => {};
  render() {
    if (this.state.user != null) {
      return (
        <div className="header">
      
            <a href="/iniciarsesion" activeClassName="activo">
              <button>Iniciar Sesion</button>
            </a>
         
     
            <a href="/registar">
              Registrar
            </a>
     
        </div>
      );
    } else {
      return (
        <nav className="header">
          
            <NavLink to={"/"}>
              <img src={'https://firebasestorage.googleapis.com/v0/b/actividadescurriculares.appspot.com/o/Imagenes%2Flogo192.png?alt=media&token=0b19104d-beac-4e1e-a29b-d7c38a6e38a2'} alt="logo imagen" width="40px" />
              {/* <img src={ventass} alt="logo imagen" width="40px" /> */}
            </NavLink>
          
          {/* <button onClick={this.props.renderLoginButton}>Google </button> */}
        
            <button
              href="/registar"
              className="btn btn-primary btn-sm"
              type="button"
            >
              Cerrar Sesión
            </button>
  
        </nav>
      );
    }
  }
}

