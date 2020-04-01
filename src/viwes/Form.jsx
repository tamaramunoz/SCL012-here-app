import React from 'react';
import '../styles/Form.css';
import Logs from './imagen/niña.png';
import {Button} from '@material-ui/core'

class Form extends React.Component {
    state = {};

    handleClick = e => {
        console.log('button was clicked');
    };
    handleSubmit = e => {
        console.log("boton funciona");
        console.log(this.state);
    };
    render() {
        return (
            <div >
                    
                <div className="container">
                    <div className="col col-lg-6">
                 
                       {/*<h1>Iniciar Sesión</h1>*/}
            
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label> Nombre</label>
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                />
                            </div>

                            <div className="form-group">
                                <label> Apellido </label>
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                />
                            </div>

                            <div className="form-group">
                                <label> Email</label>
                                <input onChange={this.props.onChange}
                                    className="form-control"
                                    type="email"
                                    name="Email"
                                    value={this.state.Email}
                                />
                            </div>

                            <Button
                                variant="contained"
                                href="/map"
                                onClick={this.handleClick}
                                >Save</Button>
                        </form>
                    </div>

                </div>
                <div className="Avatar">
                        <img className="img-fluid Form-ava"
                            src={Logs}
                            alt="avatar" />

                    </div>
            </div>
        );

    }
}
export default Form;
