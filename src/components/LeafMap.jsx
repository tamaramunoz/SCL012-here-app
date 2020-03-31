import React, { Fragment, useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, TextField , Typography } from '@material-ui/core';
import MapContainer from './MapContainer';
import Geolocalization from './Geolocalization';


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
  const viewport = true;

  return (
    <Card >
      <CardHeader action={<TextField  id="filled-basic" label="Search" variant="filled"  />} />
  
      <CardContent>

        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
          viewport={viewport}
        />
         <Geolocalization></Geolocalization>
   
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LeafMap;    
