import React from 'react'
import '../styles/Loading.css'
import LogoLoading from '../views/imagen/isotipo-readme.png'

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="logo-loading">
                <img src={LogoLoading} alt="Pet places logo"/>
            </div>

            <div className="title-loading">
                <h3>Cargando...</h3>
            </div>

            <div className="spin spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
