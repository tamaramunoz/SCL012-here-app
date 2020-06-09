import React, { useState, useEffect } from 'react'
import restaurant from '../icons/donde-restaurantes.png'

const Restaurants = () => {

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/master/src/backend/places.json')
        const infoPetPlaces = await data.json()
        let filtrandoLocales = infoPetPlaces.filter((local) => (local.type === 'restaurante'))
        setRestaurantes(filtrandoLocales)
    }

    return (
        <div>
            <div className="optionIcono">
                <img src={restaurant} alt="Restaurantes" width={30} />
                <p>Restaurant</p>
            </div>
            <div>
                {
                    restaurantes.map(item => <div key={item.key} >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.content}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{item.type}</h6>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Restaurants