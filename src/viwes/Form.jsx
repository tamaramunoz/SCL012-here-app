import React, { Fragment } from 'react';
import firebase from '../firebase/conFirebase';
import Map from '../components/LeafMap';
import '../styles/Form.css';
import Logs from './imagen/niña.png';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 'true',
            email: '',
            password: '',
            // le colocamos un estdo a nuestro metodos para que ejecuten con el evento 
        }

    }
    // Evento que ejecuta el metodo del input
    handleEmai(event) {
        this.setState(
            { email: event.target.value });
        console.log(this.state.email, 'emailfunciona')

    }
    //es evanto que guarda la contraseña que se introdusca en el metodo inpu
    handlePassword(event) {
        this.setState(
            { password: event.target.value });
        console.log(this.state.email, 'ingresando clave')
    }
    // funcion que inicia la secion de usuario
    singInUser = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState(
                    { estado: false })
                //si se inicia correctamente el estado de la funcion de login cambia 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorMessage);
            });
    };

    render() {
        //colocaremos una condicional para que se cumpla el evento y la funcion correspondiente que queremos ver 
        if (this.state.estado) {
            return (

                <div className="container">
                    <div className="col col-lg-6">
                        <h1 className="sign-in">Iniciar Sesión</h1>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Ingresar Correo"
                                type="text"
                                name="firstName"
                                onChange={this.handleEmai.bind(this)}
                                value={this.state.email}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Ingresar Contraseña"
                                type="text"
                                name="firstName"
                                onChange={this.handlePassword.bind(this)}
                                value={this.state.password}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primar"
                            id="registrar"
                            onClick={this.singInUser}
                        >
                        Ingresar</button>

                    </div>
                    <div className="avatar-container">
                        <img
                            src={Logs}
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                </div>

            );

        }
        return (
            <Fragment>
                {this.state.estado ? null : <Map />}
            </Fragment>
        )
    }
}
export default Form;
