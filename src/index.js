import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import './common.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* global document */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
