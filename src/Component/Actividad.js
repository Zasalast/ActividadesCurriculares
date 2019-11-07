import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Actividad extends Component {

    eliminarActividad = () => {
        console.log(`Eliminar Actividad... ${this.props.info.id}`)
        this.props.eliminarActividad(this.props.info.id);
    }

    render() {
        const { actividadcurricular, encargado, descripcion, fecha, hora } = this.props.info;
        return (
            <div className="media mt-3">
                <div className='media-body'>
                    <h3 className='mt-0'>
                        <span> Nombre Actividad:</span>  <p>{actividadcurricular}</p>
                    </h3>
                    <p className="input-field">
                        <span>Nombre del Encargado: </span>
                        <p>  {encargado}</p>
                    </p>
                    <p className="input-field">
                        <span> Fecha: </span>
                        <p className="input-Fecha">{fecha}</p>
                    </p>
                    <p className="input-field">

                        <span> Hora: </span>
                        <p className="input-Hora">{hora}</p>
                    </p>
                    <p className="input-field">
                        <span>Descriptión:</span><p>{descripcion}</p>

                    </p>
                    <button onClick={this.eliminarActividad} className='btn btn-danger'>ELIMINAR</button>
                </div>
            </div>
        );
    }

}
Actividad.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.string.isRequired,
        actividadcurricular: PropTypes.string.isRequired,
        encargado: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired
    }),
    eliminarActividad: PropTypes.func.isRequired

}