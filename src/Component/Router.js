import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
/* import Actividades from '../js/Actividades'; */
/* import Inicio from '../js/Inicio'; */

import infoActividad from '../Component/Datos/datos.json';
/* import SingleActividad from './SingleActividad'; */
import Navegacion from './js/Navegacion';
import Contacto from './js/Contacto';
import Nosotros from './js/Nosotros';
import Listas from './Listas';
import AgregarActividad from './AgregarActividad';
import InisiarSesion from './js/IniciarSesion';
import Exportar from './js/Exportar';
/* import Buscador from './Buscador/Buscador'; */
import Registar from './js/Registrar';
export default class Router extends Component {
    state = {
        actividades: [],
        terminoBusqueda: '',
        posts:[]
    }
    obtenerPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res =>{
            this.setState({
                posts:res.data
            })
        })
    }
    componentDidMount() {
        console.log('hola componentDidMount');
        const ActividadesLS = localStorage.getItem('Actividades');
        if (ActividadesLS) {
            this.setState({
                actividades: JSON.parse(ActividadesLS),
                infoActividad :localStorage.getItem('Actividades')
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            'Actividades',
            JSON.stringify(this.state.actividades),
            
        )
    }



    crearActividad = (nuevaActividad) => {
        const actividades = [...this.state.actividades, nuevaActividad];
        this.setState({
            actividades
        })
    }

    eliminarActividad = id => {
        //Leer el state

        const actividadesActuales = [...this.state.actividades];


        //Borrar el elemento del state
        const actividades = actividadesActuales.filter(actividad => actividad.id !== id);


        //Actualizar el State
        this.setState({
            actividades
        })
    }


    /*   componentWillMount() {
          this.setState({
              productos: infoActividad
          })
      } */

    busquedaActividad = (busqueda) => {
        if (busqueda.length >= 3) {
            this.setState({
                terminoBusqueda: busqueda
            })
        } else {
            this.setState({
                terminoBusqueda: ''
            })
        }
    }
    render() {
        let actividades = [...this.state.actividades];
        let busqueda = this.state.terminoBusqueda;
        let resultadoBusqueda = this.state.terminoBusqueda;
        if (busqueda !== '') {
            resultadoBusqueda = actividades.filter(actividadB => (
                actividadB.actividadcurricular.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            ))
        } else {
            resultadoBusqueda = actividades;
        }
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Navegacion />
                    <h1><Header /></h1>

                    <Switch>
                        <Route exact path="/actividades" render={() => (

                            <div>
                                {/* <Buscador /> */}
                               
                                <Listas actividades={resultadoBusqueda}
                                    busquedaActividad={this.busquedaActividad}
                                    eliminarActividad={this.eliminarActividad}
                                />
                            </div>

                        )} />


                        <Route exact path="/" render={() => (
                            /*  <Listas actividades={this.state.actividades}
                                 eliminarActividad={this.eliminarActividad}
                             /> */
                            <div className='row'>
                                <div className='col-md-6'>

                                    <AgregarActividad crearActividad={this.crearActividad} />
                                </div>
                                <div className='col-md-6'>
                                    <Listas actividades={resultadoBusqueda}
                                        eliminarActividad={this.eliminarActividad}
                                        busquedaActividad={this.busquedaActividad}
                                    />
                                </div>
                            </div>

                        )} />

                        <Route path="/nosotros" component={Nosotros} />
                        <Route path="/registar" component={Registar} />

                        <Route path="/contacto" component={Contacto} />
                        <Route path="/iniciosesion" component={InisiarSesion} />

                        {/*  <Route exact path="/producto/:productoId" render={(props) => {
                                   let idProducto = props.location.pathname.replace('/producto/', '');
                                   return (
                                        <SingleProducto
                                             producto={this.state.productos[idProducto]}
                                             key={idProducto}
                                        />
                                   )
                              } } /> */}

                        {/*    <Route render={() => (
                            <Listas actividades={this.state.actividades}
                                eliminarActividad={this.eliminarActividad}
                            />
                        )} /> */}
                    </Switch></div>




            </BrowserRouter>
        );
    }
}