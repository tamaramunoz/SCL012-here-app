import React from 'react'
import logoPet from '../views/imagen/LOGO.png'
import '../styles/Saved.css'

const SavedPlaces = () => {
    return (
        <div className="saved-container">
            <img src={logoPet} alt="Logo Pet Places" width={64} />
            <p className="saved-title">Tus lugares guardados</p>
        </div>
    )
}

export default SavedPlaces