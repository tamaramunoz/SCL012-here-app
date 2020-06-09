import React, { useState, useEffect } from 'react'
import bar from '../icons/donde-bares.png'

const Bar = () => {

    const [bares, setBares] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/master/src/backend/places.json')
        const infoPetPlaces = await data.json()
        let filtrandoLocales = infoPetPlaces.filter((local) => (local.type === 'bar'))
        setBares(filtrandoLocales)
    }

    return (
        <div>
            <div className="optionIcono">
                <img src={bar} alt="Bares" width={30} />
                <p>Bar</p>
            </div>
            <div>
                {
                    bares.map(item => <div key={item.key}>
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

export default Bar