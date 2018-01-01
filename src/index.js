import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import './index.css';
import App from './App/';
import registerServiceWorker from './registerServiceWorker';

/* global document */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
