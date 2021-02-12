import './styles/styles.css';
import React from 'react';
import { render } from 'react-dom';
const div = document.querySelector('#container');
div.textContent = 'Webpack';


const App = () => (<div>Link</div>);
render(<App />, div)