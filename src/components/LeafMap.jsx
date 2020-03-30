import React from 'react';
import { Card, CardHeader, CardContent, TextField , Typography } from '@material-ui/core';
import MapContainer from './MapContainer';


function LeafMap() {


  const center = [-33.4569397, -70.6482697];  // {lat, lng}
  const zoom = 16;
  const viewport = true;

  return (



    <Card >
      <CardHeader action={<TextField  id="filled-basic" label="Search" variant="filled"  />} />
  
      <CardContent>

        <MapContainer
          center={center}
          zoom={zoom}
          viewport={viewport}
        />
   
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>


  );
}

export default LeafMap;    
