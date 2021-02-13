import React from 'react';
import { Menu } from 'antd';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(e) {
    const { name } = e.item.props;
    const { callback } = this.props;
    callback(name);
  }

  render() {
    return (
      <Menu onClick={this.onClick.bind(this)} className="menu-container" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item name="main" className="menu-item" key="1">Главная</Menu.Item>
        <Menu.Item name="list" className="menu-item" key="2">Список</Menu.Item>
        <Menu.Item name="map" className="menu-item" key="3">Карта</Menu.Item>
      </Menu>
    )
  }
}