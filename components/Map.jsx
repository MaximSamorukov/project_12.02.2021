import React from 'react';
import { getId } from '../src/service/getInfo';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Popup from './Popup.jsx';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsShown: false,
      popupData: {},
    }
  }

  setPopupIsNotShown() {
    this.setState({ popupIsShown: false })
  }

  componentDidMount() {
    const { info } = this.props;
    const { lat, lon } = info[0];
    console.log(info);
    this.map = L.map('mapid').setView([lat, lon], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.map);
    info.map((i) => {
      const icon = L.icon({
        iconUrl: './icon.png',
        className: `iconid-${i.id}`,
      });
      const { lat, lon } = i;
      const m = L.marker([lat, lon], { icon }).addTo(this.map);
      m.on('click', (e) => {
        const { _icon } = e.target;
        const classname = _icon.className;
        const id = getId(classname);
        const data = info.filter((i) => i.id === id)[0];
        console.log(data);
        let { popupIsShown } = this.state;
        popupIsShown = !popupIsShown;
        if (popupIsShown) {
          this.setState({
            popupIsShown,
            popupData: data,
          })
        } else {
          this.setState({
            popupIsShown,
          })
        }
      });
      return i;
    });

  }
  render() {
    const { popupIsShown, popupData } = this.state;
    return (
      <div className="map-container">
        {popupIsShown ? <Popup popupData={popupData} callback={this.setPopupIsNotShown.bind(this)} /> : ''}
        <div id="mapid">
        </div>
      </div>
    )
  }
}