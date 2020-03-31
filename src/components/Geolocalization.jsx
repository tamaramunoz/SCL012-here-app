import React, { useEffect } from 'react'
import useGeolocation from 'react-hook-geolocation'

const  Geolocalization  = () => {

  useEffect(() => {
    onGeolocationUpdate()
  }, [])

    const onGeolocationUpdate = geolocation => {
        // console.log('Here’s some new data from the Geolocation API: ', geolocation)
      }
    
    const geolocation = useGeolocation({}, onGeolocationUpdate)

    return !geolocation.error
      ? (
        <div>
        <ul>
          <li>Latitude:          {geolocation.latitude}</li>
          <li>Longitude:         {geolocation.longitude}</li>
          <li>Speed:             {geolocation.speed}</li>
          <li>Timestamp:         {geolocation.timestamp}</li>
        </ul>
        </div>
      )
      : (
        <p>No geolocation, sorry.</p>
      )
      
  }

export default Geolocalization;
