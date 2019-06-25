/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoInputText from './DemoInputText';
import Readme from '../README.md';

storiesOf('Atoms/Input Text/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Input Text - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputText />, div);
    return div;
  });
