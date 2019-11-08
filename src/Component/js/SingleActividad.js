import React,{Component} from 'react';
import {Link} from 'react-router-dom';
const SingleActividad = (props) => {    
        if(!props) return null;
        const { actividadcurricular, encargado, descripcion, fecha, hora,id } = props.actividad;
        return (
            <div className="info-producto"> 
            <div className="imagen">
                
          {/*   <img src={`/img/${imagen}.png`} alt={nombre} /> */}
            </div>
            <div className="info">
            <p><span> {actividadcurricular}</span></p>
            
            
            
            <p><span>$ {encargado}</span></p>
            <p><span>$ {hora}</span></p>
            <p><span>$ {fecha}</span></p>
               
            </div>
            <div className="info">
            <p> {descripcion}</p>
            </div>
            <Link to={`/actividades`} id="btn">Más Información</Link>
            </div>
        );
    }

export default SingleActividad;