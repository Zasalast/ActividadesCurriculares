import React, { Component } from "react";
/* import PropTypes from 'prop-types'; */
import { NavLink } from "react-router-dom";
/* import '../css/Navegacion.css'; */
import ventass from "../logo192.png";
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
              <img src={ventass} alt="logo imagen" width="40px" />
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
/* Header.propTypes = {
    titulo: PropTypes.string.isRequired
} */
