import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './store';
import sampleData from './store/initialState.json';
import App from './components/containers/App';

const store = storeFactory(sampleData);

window.React = React;
window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
