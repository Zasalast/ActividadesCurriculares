import React, { Component } from 'react';
import Actividad from './Actividad';
import PropTypes from 'prop-types';
import Buscador from './Buscador/Buscador';

export default class Listas extends Component {
    mostrarActividad = () => {
        const actividades = this.props.actividades;
        const mensaje = Object.keys(actividades).length === 0 ? 'No hay Actividades' : 'Administra tus Actividades';
        return (
            <React.Fragment>
                {Object.keys(this.props.actividades).map(activi => (
                    <Actividad
                        key={activi}
                        info={this.props.actividades[activi]}
                        eliminarActividad={this.props.eliminarActividad}
                    />
                ))}
            </React.Fragment>
        )
    }
    render() {
        const actividades = this.props.actividades;
        const mensaje = Object.keys(actividades).length === 0 ? 'No hay Actividades' : 'Administra tus Actividades';

        return (
            <table className="table">
                <Buscador
                    busqueda={this.props.busquedaActividad}
                />
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Encargado</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                    </tr>


                  
                        {/*   {mensaje} */}
                     


                    <tbody className='lista-citas'>

                        {this.mostrarActividad()}

                    </tbody>
                </thead>
            </table>
        );
    }
}
Listas.propTypes = {
    actividades: PropTypes.array.isRequired,
    eliminarActividad: PropTypes.func.isRequired
}