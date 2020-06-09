import React, { useState, useEffect } from 'react'
import '../styles/FilterLocals.css'

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
        <div className="filterContainer">

            <h5 className="filterTitle">Cafeterías</h5>

            <div>
                {
                    cafes.map(item =>
                        <div key={item.key}>
                            <div className="card">
                                <div className="cardBody">
                                    <p className="card-title">{item.content}</p>
                                    <p>{item.type}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cafe