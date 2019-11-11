import React, { Component } from 'react';
import firebase from "firebase";
import { Link } from 'react-router-dom';
export default class Contacto extends Component {
    state = {
        error: false
    }
    nombreRef = React.createRef();
    emailRef = React.createRef();

    mensajeRef = React.createRef();


    /* crearNewContacto = (e) => {
        e.preventDefault();
        const nombre = this.nombreRef.current.value,
            email = this.emailRef.current.value,
            mensaje = this.mensajeRef.current.value,


            if (nombre === '' || email === '' || mensaje === '') {
                this.setState({ error: true })
            } else {
    
                const nuevaContacto = {
                    id: Math.random() * (2000 - 1) + 2,
                    nombre,
                    email,
                    mensaje
                }
                var db = firebase.firestore();
                db.collection("Contacto").add({
                    nombre,
                    email,
                    mensaje
                })
                    .then(function (docRef) {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
                //se envia al state para actualizar 
                this.props.crearActividad(nuevaContacto);
                this.setState({ error: false })
            }

    } */

    render() {

        return (
            <div>
                <form onSubmit={this.crearNewContacto} >
                    <legend>Formulario Contacto</legend>
                    <div className="input-field">
                        <label>Nombre: </label>
                        <input type="text" placeholder="Nombre Remitente" />
                    </div>
                    <div className="input-field">
                        <label>Email: </label>
                        <input type="email" placeholder="Correo Remitente" />
                    </div>
                    <div className="input-field">
                        <label>Mensaje: </label>
                        <textarea placeholder="Mensaje"></textarea>
                    </div>
                    <div className="input-field">

                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>

        );
    }
}
