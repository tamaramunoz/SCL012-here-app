import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import '../styles/Footer.css'

import { withRouter } from 'react-router-dom'

const Footer = (props) => {


    return (
        <Fragment>
            <footer className="navbar-footer">
                <div className="container-nav-buttons">
                    {
                        props.firebaseUser !== null ? (
                            <>
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
