import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const hereCredentials = {
    id: 'o8EpULhhcyysRJ7oY07L',
    key: 'kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig'
}

function LeafMap() {

const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?apiKey=kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig &api:320`;
const center = [-33.4569397,  -70.6482697];  // {lat, lng}
const zoom = 16;

  return (
    <Map 
      center={center} 
      zoom={zoom}>

        <TileLayer
          attribution="&copy; Here 2019"
          url={hereTileUrl}
        />

      </Map>

  );
}

export default LeafMap;    
