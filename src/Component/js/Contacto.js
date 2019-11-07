import React,{Component} from 'react';

import {Link} from 'react-router-dom';
const Contacto = () => {    
        return (
         <form>
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
        );
    }

export default Contacto;