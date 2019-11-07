import React, { Component } from 'react';
import Actividad from './Actividad';
import PropTypes from 'prop-types';

export default class Listas extends Component {

    render() {
        const actividades = this.props.actividades;
        const mensaje = Object.keys(actividades).length === 0 ? 'No hay Actividades' : 'Administra tus Actividades';

        return (
            <div className="lista-citas">

                <div className='lista-citas'>
                 {/*    <div className='titulo-citas'> */}

                      {/*   {mensaje} */}
                 {/*    </div> */}
                </div>


                <div className='lista-citas'>
                    {Object.keys(this.props.actividades).map(activi => (
                        <Actividad
                            key={activi}
                            info={this.props.actividades[activi]}
                            eliminarActividad={this.props.eliminarActividad}
                        />
                    ))}
                    {/* <Actividad /> */}
                </div>
            </div>
        );
    }
}
Listas.propTypes = {
    actividades: PropTypes.array.isRequired,
    eliminarActividad: PropTypes.func.isRequired
}