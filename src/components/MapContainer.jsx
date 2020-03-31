import React, { Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CustomizedInputBase from './searchPlaces'

const MapContainer = (props) => {

    const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?pois=true&apiKey=kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig &api:320`;

    return (
        <Fragment>
               <CustomizedInputBase/>
            <Map
                center={props.center}
                zoom={props.zoom} 
                >
                <TileLayer
                    attribution="&copy; Here 2019"
                    url={hereTileUrl}
                />
                <Marker position={props.center}>
                    <Popup>
                        Estoy parada <br /> en las coordenadas de react
                    </Popup>
                </Marker>

                {props.locals.map(item => {
                    return (
                        <div key={item.key}>
                        <Marker position={item.position}>
                            <Popup>{item.content}</Popup>
                        </Marker>
                        </div>
                    )
                })
                }

            </Map>
         
        </Fragment>
    )
}

export default MapContainer
