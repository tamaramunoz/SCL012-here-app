import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="navbar">
                <div>
                    <div className="d-flex">
                        <Link className="btn" to="/login">
                            Iniciar Sesión
                        </Link>

                        <Link className="btn" to="/register">
                            Registrarse
                        </Link>

                        <Link className="btn" to="/map">
                            Home
                        </Link>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
