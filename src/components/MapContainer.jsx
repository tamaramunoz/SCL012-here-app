import React, { Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const MapContainer = (props) => {

    const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?pois=true&apiKey=kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig &api:320`;

    return (
        <Fragment>
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
                        Esta es mi ubicación actual
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
