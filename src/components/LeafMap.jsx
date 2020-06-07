import React, { useState, useEffect } from 'react';
import '../styles/New.css'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'



function LeafMap() {

  const geolocation = useGeolocation()

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/master/src/backend/places.json')
    const infoPetPlaces = await data.json()
    setLocals(infoPetPlaces)
  }

    // const getData = async () => {
    //   try {
    //     const data = await db.collection('locales').get()
    //     const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    //     console.log(arrayData);
    //     // setLocals(arrayData)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }


  const latlng = { lat: geolocation.latitude, lng: geolocation.longitude, }
  const center = latlng;  // {lat, lng}
  const zoom = 16;

  return (
    <>
    <header className='header' ></header>

      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
        />

        <div className="container-medio">
          <h2 className="where-go">¿A dónde vamos?</h2>
        </div>


        <div className='container-medio'>
          <button>Buscar lugares cercanos</button>
        </div>

      </div>


    </>

  );
}

export default LeafMap;    
