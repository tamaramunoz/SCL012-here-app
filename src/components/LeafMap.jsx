import React, { Fragment, useState, useEffect } from 'react';
import '../styles/New.css'

import MapContainer from './MapContainer'
import IconBreadcrumbs from './breadCrumbs'
import useGeolocation from 'react-hook-geolocation'

function LeafMap() {

  const geolocation = useGeolocation()

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/developer/src/json/places.json')
    const infoPetPlaces = await data.json()
    setLocals(infoPetPlaces)
  }
<<<<<<< HEAD

  const latlng = [-33.4374349, -70.6419652]
=======
  
  const latlng = { lat: geolocation.latitude, lng: geolocation.longitude, }
>>>>>>> e42175fbe5fdc5b77143232e10a02abd8a741ee5
  let center = latlng;  // {lat, lng}
  const zoom = 16;

  return (
    <Fragment>

      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
        />
        <div className="container-options">

          <IconBreadcrumbs />
        </div>
      </div>


    </Fragment>
  );
}

export default LeafMap;    
