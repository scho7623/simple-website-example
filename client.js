import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { StyleSheet } from 'aphrodite';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './src/store';
import App from './src/App';

const store = configureStore();
const renderedClassNames = window.__renderedClassNames__;
const render = (Root) => {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );
};

StyleSheet.rehydrate(renderedClassNames);
render(App);

if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NewApp = require('./src/App').default;
    render(NewApp);
  });
}
