import React, { useState, useEffect } from 'react'
import cafe from '../icons/donde-cafeterias.png'

const Cafe = () => {

    const [cafes, setCafes] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/master/src/backend/places.json')
        const infoPetPlaces = await data.json()
        let filtrandoLocales = infoPetPlaces.filter((local) => (local.type === 'cafe'))
        setCafes(filtrandoLocales)
    }

    return (
        <div>
            <div className="optionIcono">
                <img src={cafe} alt="Cafeterias" width={40} />
                <p>Cafetería</p>
            </div>
            <div>
                {
                    cafes.map(item => <div key={item.key}>
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

export default Cafe