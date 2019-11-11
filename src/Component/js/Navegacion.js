import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
/* import '../css/Navegacion.css'; */

export default class Header extends Component {

    render() {
        return (
        <nav className="navegacion">
          
           <NavLink to={`/nosotros`} id="btn" activeClassName="activo">Nosotros</NavLink>
           <NavLink to={`/actividades`} id="btn" activeClassName="activo">Actividades</NavLink>
           <NavLink to={`/contacto`} id="btn" activeClassName="activo">Contacto</NavLink>
         
       </nav>

        );
    }

}
/* Header.propTypes = {
    titulo: PropTypes.string.isRequired
} */


