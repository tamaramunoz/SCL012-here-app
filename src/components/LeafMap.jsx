import React, { Fragment, useState, useEffect } from 'react';
import {Card} from '@material-ui/core'
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
  
  const latlng = { lat: geolocation.latitude, lng: geolocation.longitude, }
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
      </div>
      <Card>
      <IconBreadcrumbs/>
      </Card>
    </Fragment>
  );
}

export default LeafMap;    
