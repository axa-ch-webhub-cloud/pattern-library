/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@storybook/html';
import ReactDOM from 'react-dom';
import App from './App';
import DemoControlledInputsApp from '../demo-controlled-inputs/App';

storiesOf('Demo', module)
  .add('Button React', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'root-button');
    ReactDOM.render(<App />, div);
    return div;
  })
  .add('Controlled Inputs React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledInputsApp />, div);
    return div;
  });
