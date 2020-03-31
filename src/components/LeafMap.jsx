import React, { Fragment, useState, useEffect } from 'react';
import MapContainer from './MapContainer'
import Geolocalization from './Geolocalization'

function LeafMap() {

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/developer/src/json/places.json')
    const infoPetPlaces = await data.json()
    setLocals(infoPetPlaces)
  }
  
  const latlng = {
    lat: -33.4190702,
    lng: -70.6418162,
  }

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
        <Geolocalization></Geolocalization>
      </div>
    </Fragment>
  );
}

export default LeafMap;    
