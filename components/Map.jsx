import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const onMapClick = (e) => {
      console.log(e);
    }
    this.map.on('click', onMapClick);
  }
  render() {
    return (
      <div className="map-container">
        <div id="mapid">
        </div>
      </div>
    )
  }
}