import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import context from './store/context';
import './index.css';
import './assets/base.css';
import App from './App';

ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>
  ,
  document.getElementById('root')
);
