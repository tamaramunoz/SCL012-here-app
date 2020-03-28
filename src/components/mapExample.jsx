import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

    
class MapHere extends React.Component{


  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){

    const hereTileURL= 'https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/13/4400/2686/256/png8?apiKey={06Xbckql-JVdM5xLN3eJia30CBj-IxRqHmj8kJxxyLQ}'

    const center = [22.286394, 114.149139];
    const zoom = 16;
    return(
      <Map 
      center = {center}
      zoom = {zoom}
      >
        <TileLayer
        attribution="&copy: HERE 2019"
        url={hereTileURL}
        />

      </Map>

    );

  }
  
}
export default MapHere