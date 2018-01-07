import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import './common.css';
import App from './ui/App';
import registerServiceWorker from './registerServiceWorker';

/* global document */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
