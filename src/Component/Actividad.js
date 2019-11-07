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
            <tr>
         <td>
                        {actividadcurricular}
         </td>
                    {/*     </p>
                    </h3>
                    <p className="input-field">
                        <span>Nombre del Encargado: </span>
                        <p>   */}
                       <td> {encargado}</td>
                       {/*  </p>
                    </p>
                    <p className="input-field">
                        <span> Fecha: </span>
                        <p className="input-Fecha"> */}
                        <td>  {fecha}</td>
                      {/*   </p>
                    </p>
                    <p className="input-field">

                        <span> Hora: </span>
                        <p className="input-Hora"> */}
                        <td>  {hora}</td>
                    {/*     </p>
                    </p>
                    <p className="input-field">
                        <span>Descriptión:</span><p> */}
                        <td>  {descripcion}</td>
                      {/*   </p>

                    </p> */}
                    <td>
                    <button onClick={this.postActividad} className='btn btn-danger'>VER</button>
                    <button onClick={this.postsActividad} className='btn btn-light'>Posts</button>
                    <button onClick={this.EditarActividad} className='btn btn-light'>Editar</button>
                    <button onClick={this.eliminarActividad} className='btn btn-light'>ELIMINAR</button>
                    </td>
               
            </tr>
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