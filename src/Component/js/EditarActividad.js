import React, { Component } from 'react';

class EditarActividad extends Component {

    // crear los refs
    nombreActividadRef = React.createRef();
    nombreEncargadoActividadRef = React.createRef();
    fechaActividadRef = React.createRef();
    horaActividadRef = React.createRef();
    DescripciónActividadRef = React.createRef();

    editarActividad = (e) => {
        e.preventDefault();

        // leer los refs
        const actividad = {
            actividadcurricular: this.nombreActividadRef.current.value,
            encargado: this.nombreEncargadoActividadRef.current.value,
            hora: this.horaActividadRef.current.value,
            fecha: this.fechaActividadRef.current.value,
            descripcion: this.DescripciónActividadRef.current.value


        }

        // console.log(post);

        // enviar por props o petición de axios
        this.props.editarActividad(actividad);
    }

    cargarFormulario = () => {

        if (!this.props.actividad) return null;

        const { actividadcurricular, encargado,hora,fecha,descripcion } = this.props.actividad;

        return (
            <form onSubmit={this.editarActividad} className="col-8">
                <legend className="text-center">Editar Actividad</legend>
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

              

                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        )
    }

    render() {


        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
        );
    }
}

export default EditarActividad;