import React from 'react';
import ReactDOM from 'react-dom';
import IndecesionApp from './components/IndecesionApp'
import Modal from 'react-modal';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

let appRoot = document.getElementById('app');

Modal.setAppElement('#app');

ReactDOM.render(<IndecesionApp />, appRoot);
