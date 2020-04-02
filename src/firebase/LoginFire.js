import React, { Fragment } from 'react';
import logo from '../viwes/imagen/niña.png';
import '../styles/Login.css';
import firebase from '../firebase/conFirebase';
import Form from '../viwes/Form';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: 'true',
      name: '',
      email: '',
      password: ''
      // al estado le colocamos que es verdadero con sus parametros 
    }


  }
  // los eventos de cada metodo se dara aca, para indicarle que debe buscar cada evento 
  Name(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name, ' nombre')
  }
  Email(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email, 'email ')
  }
  Password(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password, 'password')
  }
  //nuevo usuario para la app//
  singUpNewUser = (email, password, name) => {

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      //firebase crea el nuevo usuario con email y password 
      .then(() => {
        this.setState({ estado: false });
        // 
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('error?.');
        } else {
          alert(errorMessage);
        }
        console.log(errorCode);
        console.log(errorMessage);

      });
  };
  render() {
    //le colocamos una condicion para que si el estado de es true muestre el evento del metodo 
    if (this.state.estado) {
      return (
        <div className="container2">
          <h5 className="sign-in">Registrarse</h5>

          <div className="form-group 2">
            <input type="text"
              className="form-control input"
              placeholder="Nombre de usuario"
              value={this.state.name}
              onChange={this.Name.bind(this)}
            />
            <input
              type="text"
              className="form-control input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.Email.bind(this)}
            />
            <input
              type="text"
              className="form-control input"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.Password.bind(this)}
            />
          </div>
          <button
            type="submit"
            className="btn-register"
            id="registrar"
            onClick={this.singUpNewUser}>
            Registrarme
            </button>
            <div className="avatar-register-container">
          <img
            alt="logo"
            src={logo}
            className="avatar-register" />
            </div>
        </div>
      )
    }
    return (
      <Fragment>
        {this.state.estado ? null : <Form />}
      </Fragment>
    )
  }
}

export default Login;



















