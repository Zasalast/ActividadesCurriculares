import React, { Component } from 'react';

import { Link } from 'react-router-dom';
const InisiarSesion = () => {



    
    return (

        <form>
            <legend>Inicio de Sesión</legend>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Usuario: </label>
                <div className="col-sm-8 col-lg-10"> <input type="text" placeholder="Nombre Remitente" />
                </div></div>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Contaseña: </label>
                <div className="col-sm-8 col-lg-10"> <input type="password" placeholder="Contaseña" />
                </div>
            </div>

            <div className="col-sm-3">
                <button type="submit" onClick="registar()"></button>
                <input type="submit" value="Enviar" className="btn btn-success w-100"/>
            </div>
        </form>
    );
}

export default InisiarSesion;