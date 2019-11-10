import React, { Component } from "react";
import firebase from "firebase";
export default class InicioSesion extends Component {
    constructor(props){
        super(props);
        this.state = {  
            user: null,
            foto: null,
            nombre: null,
            correo:null,contraseña:null};
    }
  /*   state={
        user: null,
        foto: null,
        nombre: null,
        correo:null,contraseña:null
    } */
  nombreRef = React.createRef();
  userRef = React.createRef();
  fotoRef = React.createRef();
  correoRef = React.createRef();
  contraseñaRef = React.createRef();

  /* SesionCorreo=(props)=>{
    const {user,nombre, foto,correo} =props.user;

  handleAuth=()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha utilizado email`))
      .catch(error => console.log(`Error ${error.code} ${error.message}  no ha utiñozadooo email`));
  }

  renderLoginButton=()=> {
    //si el usuario esta logueado
    const foto = null;
    const nombre = null;
    if (this.state.user) {
        console.log("SE a -------------logueado");
     /*  <img src={this.state.user.photoURL} alt={this.state.user.displayName}/> 
     <p>
         {this.state.user.displayName}
     </p>  
    } else {
        //si el usuario no esta logueado
        console.log("no -----------logueado")
    <button onclick={handleAuth}> google</button> 
      }
      console.log(foto+'foto');
      console.log(nombre+'nombreee');
      
    }




 } */
 

  handleAuth=() =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.correo} ha utilizado email`))
      .catch(error => console.log(`Error ${error.code} ${error.message}  no ha utiñozadooo email`));
  }
 

  renderLoginButton= ()=> {
    //si el usuario esta logueado
    const foto = null;
    const nombre = null;
    if (this.state.user) {
        console.log("SE a -------------logueado");
     /*  <img src={this.state.user.photoURL} alt={this.state.user.displayName}/> 
     <p>
         {this.state.user.displayName}
     </p>  */
    } else {
      //si el usuario no esta logueado
      console.log("no -----------logueado")
/*   <button onclick={handleAuth}> google</button> */
    }
    console.log(foto+'foto');
    console.log(nombre+'nombreee');
    
  }

  SesionCorreo = e => {
    e.preventDefault();
    const user = this.userRef.current.value,
      nombre = this.nombreRef.current.value,
      foto = this.fotoRef.current.value,
      correo = this.correoRef.current.value,
      contraseña = this.contraseñaRef.current.value;

    if (correo === "" || contraseña === "") {
      this.setState({ error: true });
    } else {
      const nuevaSesion = {
        id: Math.random() * (2000 - 1) + 2,
        user,
        nombre,
        foto,
        correo,
        contraseña
      };
      //se envia al state para actualizar
      this.props.crearActividad(nuevaSesion);
      this.setState({ error: false });
    }
  };

  render() {
   /*  firebase.auth().createUserWithEmailAndPassword(correo, contraseña).catch((error) =>{
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      }); */
    
    
      firebase.auth().signOut().then(() =>{
        // Sign-out successful.
      }).catch((error) =>{
        // An error happened.
      });
    return (
      <div className="class-name">
  {this.renderLoginButton()}

  <form onSubmit={this.handleAuth}>
<button onClick={this.handleAuth}>google</button>
  </form>



        <form onSubmit={this.SesionCorreo}>
          <legend>Inicio de Sesión</legend>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Correo:{" "}
            </label>
            <div className="col-sm-8 col-lg-10">
              {" "}
              <input
                ref={this.correoRef}
                type="text"
                placeholder="Nombre Remitente"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Contaseña:{" "}
            </label>
            <div className="col-sm-8 col-lg-10">
              {" "}
              <input
                ref={this.contraseñaRef}
                type="password"
                placeholder="Contaseña"
              />
            </div>
          </div>

          <div className="col-sm-3">
            <button type="submit" >Iniciar Sesión</button>
            
           {/*  <input
              type="submit"
              value="Enviar"
              className="btn btn-success w-100"
            /> */}
          </div>
        </form>
        <a href="/registro"><button >registar</button></a>
      </div>
    );
  }
}
