import React, { useState, useEffect } from 'react';
import '../styles/New.css'
import { auth } from '../backend/firebase'
import { withRouter } from 'react-router-dom'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'
import Navbar from './Navbar';


const LeafMap = (props) => {

  const geolocation = useGeolocation()

  const [locals, setLocals] = useState([]);
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

  // useEffect(() => {
  //   getData()
  // }, [])

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
      <Navbar />

      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
        />

        <div className="container-medio">
          {
            user && (
              <p>{user.email}</p>
            )
          }
          <h2 className="where-go">¿A dónde vamos?</h2>
        </div>


        <div className='container-medio'>
          <button>Buscar lugares cercanos</button>
        </div>

      </div>


    </>

  );
}

export default withRouter(LeafMap)