import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';

interface props {
  element: HTMLElement;
}

export default ({ element }: props) => (
  <Provider store={store}>{element}</Provider>
);
