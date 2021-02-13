import React from 'react';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    const { callback } = this.props;
    callback()
  }

  render() {
    const { id, name, descr, lat, lon } = this.props.popupData;
    return (
      <div onClick={this.onClick.bind(this)} className="popup-container">
        <div className="popup">
          <table>
            <tbody>
              <tr>
                <td>id</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{descr}</td>
              </tr>
              <tr>
                <td>Latitude</td>
                <td>{lat}</td>
              </tr>
              <tr>
                <td>Longitude</td>
                <td>{lon}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}