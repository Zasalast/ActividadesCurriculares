import React, { Component } from 'react';


import PropTypes from 'prop-types';
export default class AgregarActividad extends Component {
    state = {
        error: false
    }
    nombreActividadRef = React.createRef();
    nombreEncargadoActividadRef = React.createRef();
    fechaActividadRef = React.createRef();
    horaActividadRef = React.createRef();
    DescripciónActividadRef = React.createRef();

    crearNewActividad = (e) => {
        e.preventDefault();
        const actividadcurricular = this.nombreActividadRef.current.value,
            encargado = this.nombreEncargadoActividadRef.current.value,
            hora = this.horaActividadRef.current.value,
            fecha = this.fechaActividadRef.current.value,
            descripcion = this.DescripciónActividadRef.current.value;

        if (actividadcurricular === '' || encargado === '' || hora === '' || fecha === '' || descripcion === '') {
            this.setState({ error: true })
        } else {

            const nuevaActividad = {
                id: Math.random() * (20120012 - 1) + 2,
                actividadcurricular,
                encargado,
                hora,
                fecha,
                descripcion
            }
            //se envia al state para actualizar 
            this.props.crearActividad(nuevaActividad);
            this.setState({ error: false })
        }

    }

    render() {
        const existeError = this.state.error;
        return (
            <div className="class-name">
                <form onSubmit={this.crearNewActividad}>

                    <div className="form-group row">

                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Actividad</label>

                        <div className="col-sm-8 col-lg-10">

                            <input ref={this.nombreActividadRef} type="text" className="form-control" placeholder="Nombre Actividad" />

                        </div>

                    </div>

                    <div className="form-group row">

                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Encargado</label>

                        <div className="col-sm-8 col-lg-10">

                            <input ref={this.nombreEncargadoActividadRef} type="text" className="form-control" placeholder="Nombre Encargado de Realizar Actividad" />

                        </div>

                    </div>



                    <div className="form-group row">

                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>

                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">

                            <input ref={this.fechaActividadRef} type="date" className="form-control" />

                        </div>



                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>

                        <div className="col-sm-8 col-lg-4">

                            <input ref={this.horaActividadRef} type="time" className="form-control" />

                        </div>

                    </div>



                    <div className="form-group row">

                        <label className="col-sm-4 col-lg-2 col-form-label">Descripción</label>

                        <div className="col-sm-8 col-lg-10">

                            <textarea ref={this.DescripciónActividadRef} className="form-control"></textarea>

                        </div>

                    </div>

                    <div className="form-group row justify-content-end">

                        <div className="col-sm-3">

                            <button type="submit" className="btn btn-success w-100">Agregar</button>

                        </div>

                    </div>

                </form>
                {existeError ? <div className='alert alert-danger text-center'>
                    Todos los campos son necesarios
                </div> : ''}
            </div>
        );
    }
}

AgregarActividad.propTypes = {
    actividades: PropTypes.array.isRequired,
    eliminarActividad: PropTypes.func.isRequired
}