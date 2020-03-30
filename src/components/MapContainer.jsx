import React, { Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const MapContainer = (props) => {

    const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?pois=true&apiKey=06Xbckql-JVdM5xLN3eJia30CBj-IxRqHmj8kJxxyLQ&api:320`;

    return (
        <Fragment>
            <Map
                center={props.center}
                zoom={props.zoom}>
               
                

                <TileLayer
                    attribution="&copy; Here 2019"
                    url={hereTileUrl}
                />
                <Marker position={props.center}>
                    <Popup>
                        Estoy parada <br /> en las coordenadas de react
                    </Popup>
                </Marker>

            </Map>
        </Fragment>
    )
}

export default MapContainer
