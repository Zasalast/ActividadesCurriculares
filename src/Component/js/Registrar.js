import React,{Component} from 'react';

export default class Registar extends Component {

    correoRef = React.createRef();
    contrasenaRef = React.createRef();
    registar =(e) =>{
        e.preventDefault();
        const correo = this.correoRef.current.value,
        contrasena = this.contrasenaRef.current.value;
        console.log("dio un click");
        console.log("dio "+correo.current.value);
        console.log("dio "+contrasena.current.value);

    /*   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }); */

        if (correo === '' || contrasena === '' ) {
            this.setState({ error: true })
        } else {

            const nuevoUsuario ={
            correo ,
            contrasena 
            }
            //se envia al state para actualizar 
            this.props.crearActividad(nuevoUsuario);
        }      
     
    }
   
    render() {
        
        return (
            <div className="class-name">
               <form  onSubmit={this.registar}> 
            <legend>Registar</legend>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Usuario: </label>
                <div className="col-sm-8 col-lg-10"> <input ref={this.correoRef}  type="email" placeholder="Nombre Remitente" />
                </div></div>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Contaseña: </label>
                <div className="col-sm-8 col-lg-10"> <input ref={this.contrasenaRef}  type="password" placeholder="Contaseña" />
                </div>
            </div>

            <div className="col-sm-3">
            <button type="submit" className="btn btn-success w-100">REGISTAR</button>
            </div>
        </form>
            </div>
        );
    }
}