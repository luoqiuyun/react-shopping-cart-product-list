import React from 'react';
import ReactDOM from 'react-dom';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
})