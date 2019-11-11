import React,{Component} from 'react';
import '../css/Nosotros.css';
export default class Nosotros extends Component {

    render() {
        return (
            <div className="contenido-nosotros">
               
                <div className="imagen">
                <img src={'https://firebasestorage.googleapis.com/v0/b/actividadescurriculares.appspot.com/o/Imagenes%2Fimages.jfif?alt=media&token=677ecae4-fdd8-4c68-8456-1801404101d4'} alt=""/>
               {/*  <img src='logo192.png' alt="imagen nosotros" /> */}
                </div>
                <div className="contenido">
                <h2>Acerca de</h2>
                </div>
                <p>Somos desarrolladores junior los cuales les encanta descubrir nuevos ambientes de trabajo y ponerse retos que le permitan tanto a ellos como a la sociedad crecer constantemente,al iguar que compartir nuestras experiencias y creaciones...!</p>
            </div>
        );
    }
}