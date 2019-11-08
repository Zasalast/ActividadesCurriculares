import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default class Actividad extends Component {

    eliminarActividad = () => {
        console.log(`Eliminar Actividad... ${this.props.info.id}`)
        this.props.eliminarActividad(this.props.info.id);
    }
    editarActividad = () => {
        console.log(`Eliminar Actividad... ${this.props.info.id}`)
        this.props.editarActividad(this.props.info.id);
    }
    render() {
        const { actividadcurricular, encargado, descripcion, fecha, hora,id } = this.props.info;
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
                        <td>  <p className="descripcion">

                        {descripcion}
                        </p>
                        </td>
                      {/*   </p>

                    </p> */}
                    <td>
                    <Link to={`/actividad/${id}`} className='btn btn-primary'>VER</Link>
                    
                    <button onClick={this.editarActividad} className='btn btn-light'>Editar</button>
                    <button onClick={this.eliminarActividad} className='btn btn-danger'>ELIMINAR</button>
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