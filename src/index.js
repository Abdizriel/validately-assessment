/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore, { history } from './store/configureStore';
import Root from './shared/components/root';
import './styles/main.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./shared/components/root', () => {
    const NewRoot = require('./shared/components/root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
