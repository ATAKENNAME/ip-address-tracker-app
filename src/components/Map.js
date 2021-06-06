import React from 'react';
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";


function Map(props) {
    // const position = [51.505, -0.09]
    var myIcon = L.icon({
        iconUrl: 'images/icon-location.svg',
        iconSize: [40, 50],
        iconAnchor: null,
        shadowUrl: null,

    });

    function ChangeMapView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());

        return null;
    }
    return (

        <MapContainer id="map" center={[props.mapLocation.lat, props.mapLocation.lng]} zoom={13} scrollWheelZoom={false} >
            { console.log(props.mapLocation.lat, props.mapLocation.lng)}
            < TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapView coords={props.mapLocation} />
            <Marker position={[props.mapLocation.lat, props.mapLocation.lng]} icon={myIcon}>
                {/* <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> */}
            </Marker>
        </MapContainer >
    )
}


export default Map;