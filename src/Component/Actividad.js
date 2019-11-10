import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Actividad extends Component {
  eliminarActividad = () => {
    console.log(`Eliminar Actividad... ${this.props.info.id}`);
    this.props.eliminarActividad(this.props.info.id);
  };
  editarActividad = () => {
    console.log(`Eliminar Actividad... ${this.props.info.id}`);
    this.props.editarActividad(this.props.info.id);
  };
  render() {
    const {
      actividadcurricular,
      encargado,
      descripcion,
      fecha,
      hora,
      id
    } = this.props.info;
    return (
      <tr>
        <td> {actividadcurricular}</td>

        <td> {encargado}</td>

        <td> {fecha}</td>

        <td> {hora}</td>

        <td>
          <Link to={`/actividad/${id}`} className="btn btn-primary">
            VER
          </Link>

          <button onClick={this.editarActividad} className="btn btn-light">
            Editar
          </button>
          <button onClick={this.eliminarActividad} className="btn btn-danger">
            ELIMINAR
          </button>
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
};
