import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../backend/firebase'

import { withRouter } from 'react-router-dom'

const Navbar = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }

    return (
        <>
            <nav className="navbar navbar-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navColl collapse navbar-collapse" id="navbarSupportedContent">

                    {
                        props.user && (
                            <h5 className="btn">Hola! {props.user.email}</h5>
                        )
                    }

                    <Link className="btn" to="/map">
                        Home
                    </Link>

                    <button
                        className="btn"
                        onClick={() => cerrarSesion()}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbar)