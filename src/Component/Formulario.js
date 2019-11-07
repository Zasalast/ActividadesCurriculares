import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Listas from './Listas';

export default class Formulario extends Component {
  render() {
    return (
      <div className="input-field">

        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='one-half column'>
          
            </div>

            <div className="input-field">

              <Listas listas={'Lista de Actividades Por Realizar'} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}