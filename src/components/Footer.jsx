import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../backend/firebase'

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
            <footer className="navbar">
                <div>
                    <div className="d-flex">
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
                </div>
            </footer>
        </Fragment>
    )
}

export default withRouter(Footer)
