import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
/* import Actividades from '../js/Actividades'; */
/* import Inicio from '../js/Inicio'; */

import actividades from '../Component/Datos/datos.json';
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
import SingleActividad from './js/SingleActividad';
import EditarActividad from './js/EditarActividad';
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

    editarActividad = (ActividadActualizada) => {
        const {id} = ActividadActualizada;
        console.log(`Eliminar Actividad... ${this.props.info.id}`)
        let actividadtId = id;

        const actividades = [...this.state.actividades];

        const actividadEditar = actividades.findIndex(actividad => actividadtId === actividad.id );

        actividades[actividadEditar] = ActividadActualizada;

        this.setState({
          actividades
        })


    }

   /*  eliminarActividad = (id) => {
        const actividadesActuales = [...this.state.actividades];
        axios.delete(actividadesActuales[id])
             .then(res=>{
                  if(res.status === 200) {
                       const actividadesActuales = [...this.state.actividades];                       
                       let resultado = actividadesActuales.filter(actividad => (
                        actividad.id != id
                       ));
                       this.setState({
                        actividades: resultado
                       })
                  }
             })
   } */
/* 
    borrarPost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then(res=>{
                  if(res.status === 200) {
                       const posts = [...this.state.posts];                       
                       let resultado = posts.filter(post => (
                            post.id != id
                       ));
                       this.setState({
                            posts: resultado
                       })
                  }
             })
   } */

  /*  crearPost = (post) => {
       axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
              .then(res => {
                  if(res.status === 201) {
                      swal(
                          'Post Creado',
                          'Se creo correctamente',
                          'success'
                      )
                      let postId = {id: res.data.id};
                     const nuevoPost = Object.assign({}, res.data.post, postId);

                     this.setState(prevState => ({
                         posts: [...prevState.posts, nuevoPost]
                     }))
                  }
              })
   }

   editarActividad = (actividadActualizado) => {
      //  console.log(postActualizado);

       const {id} = actividadActualizado;

       axios.put(`https://jsonplaceholder.typicode.com/actividades/${id}`, {actividadActualizado})
          .then(res => {
              if(res.status === 200) {

                  swal(
                      'Post Actualizado',
                      'Se guardó correctamente',
                      'success'
                  )

                  let actividadtId = res.data.id;

                  const actividades = [...this.state.actividades];

                  const actividadEditar = actividades.findIndex(actividad => actividadtId === actividad.id );

                  actividades[actividadEditar] = actividadActualizado;

                  this.setState({
                    actividades
                  })
              }
          })
   } */




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
 
    componentWillMount(){
        this.setState({
            actividades:actividades
        })
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


<Route exact path="/editar/:actividadId" render={ (props) => {
                                        let idActividad = props.location.pathname.replace('/editar/', '');

                                        const actividades = this.state.actividad;

                                        let filtro;
                                        filtro = actividades.filter(actividad => (
                                            actividad.id === Number(idActividad)
                                        ))
                                        return(
                                             <EditarActividad
                                             actividad={filtro[0]}
                                                  editarActividad={this.editarActividad}
                                             />
                                        )
                                   } }
                                   />





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

                          <Route exact path="/actividad/:actividadId" render={(props) => {
                                   let idActividad = props.location.pathname.replace('/actividad/', '');
                                   const actividades = this.state.actividades;

                                   let filtro;
                                   filtro = actividades.filter(activid => (
                                    activid.id === Number(idActividad)
                                   ))

                                   {/*this.state.actividades[idActividad]*/}
                                   return (
                                        <SingleActividad
                                        actividad={filtro[0]}
                                           
                                        />
                                   )
                              } } /> 

                              

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