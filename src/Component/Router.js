import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
/* import Actividades from '../js/Actividades'; */
/* import Inicio from '../js/Inicio'; */
import firebase from "firebase";
import actividades from "../Component/Datos/datos.json";
/* import SingleActividad from './SingleActividad'; */
import Navegacion from "./js/Navegacion";
import Contacto from "./js/Contacto";
import Nosotros from "./js/Nosotros";
import Listas from "./Listas";
import AgregarActividad from "./AgregarActividad";
import IniciarSesion from './js/IniciarSesion';
import Exportar from "./js/Exportar";
/* import Buscador from './Buscador/Buscador'; */
import Registar from "./js/Registrar";
import SingleActividad from "./js/SingleActividad";
import EditarActividad from "./js/EditarActividad";
export default class Router extends Component {
  state = {
    actividades: [],
    terminoBusqueda: "",
    posts: [],
    user:null
   
  };



  obtenerPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.setState({
        posts: res.data
      });
    });
  };

  eliminarActividad = id => {
    //Leer el state
    const actividadesActuales = [...this.state.actividades];
    //Borrar el elemento del state
    const actividades = actividadesActuales.filter(
      actividad => actividad.id !== id
    );
    //Actualizar el State
    this.setState({
      actividades
    });
  };

  editarActividad = ActividadActualizada => {
    const { id } = ActividadActualizada;
    console.log(`Eliminar Actividad... ${this.props.info.id}`);
    let actividadtId = id;

    const actividades = [...this.state.actividades];

    const actividadEditar = actividades.findIndex(
      actividad => actividadtId === actividad.id
    );

    actividades[actividadEditar] = ActividadActualizada;

    this.setState({
      actividades
    });
  };

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

  /*  crearActividad = (Actividad) => {
       axios.actividad(`https://console.firebase.google.com/project/actividadescurriculares/database/firestore/data~2FActividades~2F`, {Actividad})
              .then(res => {
                  if(res.status === 201) {
                      swal(
                          'Post Creado',
                          'Se creo correctamente',
                          'success'
                      )
                      let ActividadId = {id: res.data.id};
                     const nuevoActividad= Object.assign({}, res.data.Actividad, ActividadId);

                     this.setState(prevState => ({
                      Actividades: [...prevState.Actividades, nuevoActividad]
                     }))
                  }
              })
   } */

   editarActividad = (actividadActualizado) => {
      //  console.log(postActualizado);

       const {id} = actividadActualizado;

       axios.put(`https://console.firebase.google.com/project/actividadescurriculares/database/firestore/data~2FActividades~2F${id}`, {actividadActualizado})
          .then(res => {
              if(res.status === 200) {

                  /* swal(
                      'Post Actualizado',
                      'Se guardó correctamente',
                      'success'
                  ) */

                  let actividadtId = res.data.id;

                  const actividades = [...this.state.actividades];

                  const actividadEditar = actividades.findIndex(actividad => actividadtId === actividad.id );

                  actividades[actividadEditar] = actividadActualizado;

                  this.setState({
                    actividades
                  })
              }
          })
   }

   componentDidMount() {
       firebase.auth().onAuthStateChanged(user =>{
           this.setState({
               user:user
           })
       })
    console.log("hola componentDidMount");
    const ActividadesLS = localStorage.getItem("Actividades");
    if (ActividadesLS) {
      this.setState({
        actividades: JSON.parse(ActividadesLS),
        infoActividad: localStorage.getItem("Actividades")
      });
    }
  }

  componentWillMount() {
    this.setState({
      actividades: actividades
    });
  }

  componentDidUpdate() {
    localStorage.setItem("Actividades", JSON.stringify(this.state.actividades));
    
  }

  crearActividad = nuevaActividad => {
    const actividades = [...this.state.actividades, nuevaActividad];
    this.setState({
      actividades
    });
  }; 

  /*   componentWillMount() {
          this.setState({
              productos: infoActividad
          })
      } */

  busquedaActividad = busqueda => {
    if (busqueda.length >= 3) {
      this.setState({
        terminoBusqueda: busqueda
      });
    } else {
      this.setState({
        terminoBusqueda: ""
      });
    }
  };
  render() {
    
    let actividades = [...this.state.actividades];
    let busqueda = this.state.terminoBusqueda;
    let resultadoBusqueda = this.state.terminoBusqueda;
    if (busqueda !== "") {
      resultadoBusqueda = actividades.filter(
        actividadB =>
          actividadB.actividadcurricular
            .toLowerCase()
            .indexOf(busqueda.toLowerCase()) !== -1
      );
    } else {
      resultadoBusqueda = actividades;
    }


    if (this.state.user===null) {

        return (
            <BrowserRouter>
              <div className="contenedor">
             
              
                <Navegacion />
                <h1>
                  <Header />
                </h1>
               
                <Switch>
                  <Route
                    exact
                    path="/actividades"
                    render={() => (
                      <div>
                   
      
                        <Listas
                          actividades={resultadoBusqueda}
                          busquedaActividad={this.busquedaActividad}
                          eliminarActividad={this.eliminarActividad}
                        />
                      </div>
                    )}
                  />
      
                  <Route
                    exact
                    path="/editar/:actividadId"
                    render={props => {
                      let idActividad = props.location.pathname.replace(
                        "/editar/",
                        ""
                      );
      
                      const actividades = this.state.actividad;
      
                      let filtro;
                      filtro = actividades.filter(
                        actividad => actividad.id === Number(idActividad)
                      );
                      return (
                        <EditarActividad
                          actividad={filtro[0]}
                          editarActividad={this.editarActividad}
                        />
                      );
                    }}
                  />
      
                  <Route
                    exact
                    path="/"
                    render={() => (
                     
                      <div className="row">
                        <div className="col-md-6">
                          <AgregarActividad crearActividad={this.crearActividad} />
                        </div>
                        <div className="col-md-6">
                          <Listas
                            actividades={resultadoBusqueda}
                            eliminarActividad={this.eliminarActividad}
                            busquedaActividad={this.busquedaActividad}
                          />
                        </div>
                      </div>
                    )}
                  />
      
                  <Route path="/nosotros" component={Nosotros} />
                  <Route path="/registar" component={Registar} />
      
                  <Route path="/contacto" component={Contacto} />
                  <Route path="/iniciosesion" component={IniciarSesion} />
      
                  <Route
                    exact
                    path="/actividad/:actividadId"
                    render={props => {
                      let idActividad = props.location.pathname.replace(
                        "/actividad/",
                        ""
                      );
                      const actividades = this.state.actividades;
      
                      let filtro;
                      filtro = actividades.filter(
                        activid => activid.id === Number(idActividad)
                      );
      
                   
                      return <SingleActividad actividad={filtro[0]} />;
                    }}
                  />
      
                </Switch>
              </div>
            </BrowserRouter>
          );
      
        
    } else {
        return ( 
            <BrowserRouter>
            
            
            {/* <a href="/registro"><button >registar</button></a> */}
            <Switch>
            <Route path="/registro" component={Registar} />
            <Route path="/iniciosesion" component={IniciarSesion} />
            <Route path="/" component={IniciarSesion} />
            </Switch>
            </BrowserRouter>
                );
    }
   
  }
}
