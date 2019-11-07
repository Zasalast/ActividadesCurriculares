import React, { Component } from 'react';
import Actividad from './Actividad';
import PropTypes from 'prop-types';
import Buscador from './Buscador/Buscador';
import Exportar from './js/Exportar';

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
            <div>
                <Buscador
                    busqueda={this.props.busquedaActividad}
                />
                <table className="table">
                
                <thead>
                  


                  
                        {/*   {mensaje} */}
                     


                    <tbody >  <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Encargado</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Accion</th>
                    </tr>

                        {this.mostrarActividad()}

                    </tbody>
                </thead>
            </table>
            <Exportar />
            </div>
            
        );
    }
}
Listas.propTypes = {
    actividades: PropTypes.array.isRequired,
    eliminarActividad: PropTypes.func.isRequired
}