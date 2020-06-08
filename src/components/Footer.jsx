import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import '../styles/Footer.css'
import back from '../icons/Menu-volver.png'
import worth from '../icons/Menu-valorizar.png'
import save from '../icons/Menu-guardar.png'
import share from '../icons/Menu-compartir.png'

import { withRouter } from 'react-router-dom'

const Footer = (props) => {


    return (
        <Fragment>
            <footer className="navbar-footer">
                    {
                        props.firebaseUser !== null ? (
                            <div className="insideButtonsFooter">
                                <div className="backAndWorth">
                                    <Link className="btn" to="/map">
                                        <img src={back} alt="Volver" />
                                    </Link>

                                    <Link className="btn" to="/map">
                                        <img src={worth} alt="Valorar" />
                                    </Link>
                                </div>
                                <div className="saveAndShare">
                                    <Link className="btn" to="/map">
                                        <img src={save} alt="Guardar" />
                                    </Link>

                                    <Link className="btn" to="/map">
                                        <img src={share} alt="Compartir" />
                                    </Link>
                                </div>
                            </div>
                        ) : (
                                <div className="insideButtonsFooter">
                                    <Link className="btn" to="/login">
                                        Ingresar
                                    </Link>

                                    <Link className="btn" to="/">
                                        Cancelar
                                    </Link>
                                </div>
                            )
                    }
            </footer>
        </Fragment>
    )
}

export default withRouter(Footer)
