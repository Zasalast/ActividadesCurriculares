import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import { NavLink } from 'react-router-dom';
/* import '../css/Navegacion.css'; */
import ventass from '../logo192.png';
export default class Header extends Component {

    render() {
        return (
        <nav >
              <NavLink to={'/'}>
           <img src={ventass}  alt="logo imagen"width="40px" /> 
            
             </NavLink>
           
         
       </nav>

        );
    }

}
/* Header.propTypes = {
    titulo: PropTypes.string.isRequired
} */


