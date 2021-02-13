import './styles/styles.css';
import React from 'react';
import { render } from 'react-dom';
import TopMenu from '../components/TopMenu.jsx';
import MainPage from '../components/MainPage.jsx';
import List from '../components/List.jsx';
import Map from '../components/Map.jsx';
import { Layout } from 'antd';
import { getStaticData } from '../src/service/getInfo';
const { Header, Content, Footer } = Layout;
const div = document.querySelector('#container');
div.textContent = 'Webpack';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'main',
      info: [],
    }
  }
  setPage(page) {
    this.setState({ page })
  }

  componentDidMount() {
    const info = [];
    if (this.state.info.length === 0) {
      getStaticData().then((data) => {
        for (let i = 0; i < data.length; i += 1) {
          info.push(data[i]);
        }
      });
      this.setState({ info });
    }
  }

  render() {
    const { page, info } = this.state;
    return (
      <Layout className="layout">
        <Header>
          <TopMenu callback={this.setPage.bind(this)} />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {page === 'main' ? <MainPage /> : page === 'map' ? <Map info={info} /> : <List info={info} />}
        </Content>
      </Layout>
    )
  }
}
render(<App />, div)