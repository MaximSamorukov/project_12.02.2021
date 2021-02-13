import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  // let mymap = L.map('mapid').setView([51.505, -0.09], 13);
  // const onMapClick = (e) => {
  //   console.log(e);
  // }
  // mymap.on('click', onMapClick);
  // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //   maxZoom: 18,
  //   id: 'mapbox/streets-v11',
  //   tileSize: 512,
  //   zoomOffset: -1,
  //   accessToken: 'your.mapbox.access.token'
  // }).addTo(mymap);
  // }
  render() {
    return (
      <div className="map-container">
        <div id="mapid">
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    )
  }
}