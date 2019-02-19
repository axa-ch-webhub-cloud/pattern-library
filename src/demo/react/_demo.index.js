/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@storybook/html';
import ReactDOM from 'react-dom';
import App from './App';

storiesOf('Demo', module).add('Button React', () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'root-button');
  ReactDOM.render(<App />, div);
  return div;
});
