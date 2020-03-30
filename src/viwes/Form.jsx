import React from 'react';
import '../styles/Form.css';
import Logs from './imagen/niña.png';
//import { Link } from "react-router-dom";
import { Container, Grid, Card, Button } from '@material-ui/core';


class Form extends React.Component {
    state = {};

    handleClick = event => {
        console.log("boton funciona");
    };
    handleSubmit = e => {
        console.log("boton funciona");
        console.log(this.state);
    };
    render() {
        return (
            < Container lg >
                <Grid>

                </Grid>
                <Card XS>
                    <h1>Iniciar Sesión</h1>
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
                            color="primary"
                            href="/map"
                            onClick={this.handleClick}
                            >Save</Button>
                    </form>
                    <Grid className="Avatar">
                        <img
                            src={Logs}
                            width={400}
                            alt="avatar"
                        />

                    </Grid>




                </Card>


            </ Container>
        );

    }
}
export default Form;
