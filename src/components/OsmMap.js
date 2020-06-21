import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import * as L from 'leaflet';
import { Icon } from 'leaflet/src/layer/marker';
import 'leaflet/dist/leaflet.css';

import picIcon from 'leaflet/dist/images/marker-icon.png';
import picShadow from 'leaflet/dist/images/marker-shadow.png';

export default class OsmMap extends Component {
  render()
  {
 
    if (typeof window !== 'undefined') {
 
      const markerIcon = new Icon({
        iconUrl: picIcon,
        iconSize: [36, 48],
        iconAnchor: [18, 18],
        shadowSize: [36, 36],
        shadowUrl: picShadow,
        shadowAnchor: [18, 18],
        popupAnchor: [0, -16],
        tooltipAnchor: [13, -4]
      });
 
      const lat = parseFloat(this.props.lat);
      const lng = parseFloat(this.props.lng);
      const text = this.props.text;

      return (
        <div className="leaflet-container">
           <Map className="map" center={[lat, lng]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={[lat, lng]} icon={markerIcon}>
              <Popup> {text}</Popup>
            </Marker>
          </Map>
        </div>
      )
    }
    return null
  }
}

