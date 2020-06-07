import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../backend/firebase'

import '../styles/Footer.css'

import { withRouter } from 'react-router-dom'

const Footer = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }

    return (
        <Fragment>
            <footer className="navbar-footer">
                <div className="container-nav-buttons">
                    {
                        props.firebaseUser !== null ? (
                            <>
                                <button
                                    className="btn"
                                    onClick={() => cerrarSesion()}
                                >
                                    Cerrar Sesión
                                </button>

                                <Link className="btn" to="/map">
                                    Home
                                </Link>
                            </>
                        ) : (
                                <>
                                    <Link className="btn" to="/login">
                                        Iniciar Sesión
                                    </Link>

                                    <Link className="btn" to="/login">
                                        Registrarse
                                    </Link>
                                </>
                            )
                    }
                </div>
            </footer>
        </Fragment>
    )
}

export default withRouter(Footer)
