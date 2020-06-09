import React, { useState, useEffect } from 'react';
import '../styles/Map.css'
import { auth } from '../backend/firebase'
import { withRouter, Link } from 'react-router-dom'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'
import Navbar from './Navbar';

import restaurant from '../icons/donde-restaurantes.png'
import cafe from '../icons/donde-cafeterias.png'
import bar from '../icons/donde-bares.png'


const LeafMap = (props) => {

  const geolocation = useGeolocation()

  const [locals, setLocals] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {

    if (auth.currentUser) {
      // console.log('existe un usuario');
      setUser(auth.currentUser)

    } else {
      // console.log('no existeeeeee');
      props.history.push('/login')
    }

    getData()

  }, [props.history])

  const getData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/master/src/backend/places.json')
    const infoPetPlaces = await data.json()
    setLocals(infoPetPlaces)
  }

  const latlng = { lat: geolocation.latitude, lng: geolocation.longitude, }
  const center = latlng;  // {lat, lng}
  const zoom = 16;

  return (
    <>
      <Navbar user={user} />

      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
        />
      </div>

      <div className="container-medio">
        <h2 className="where-go">¿A dónde vamos?</h2>
      </div>

      <div className="container-options">

        <Link to="/restaurants">
          <div className="optionIcono">
            <img src={restaurant} alt="Restaurantes" width={30} />
            <p>Restaurant</p>
          </div>
        </Link>

        <Link to="/cafes">
          <div className="optionIcono">
            <img src={cafe} alt="Cafeterias" width={40} />
            <p>Cafetería</p>
          </div>
        </Link>

        <Link to="/bar">
          <div className="optionIcono">
            <img src={bar} alt="Bares" width={30} />
            <p>Bar</p>
          </div>
        </Link>

      </div>

      <div className="containerButtonMedio">
        <button className="lookForPlace">Buscar lugares cercanos</button>
      </div>
    </>

  );
}

export default withRouter(LeafMap)