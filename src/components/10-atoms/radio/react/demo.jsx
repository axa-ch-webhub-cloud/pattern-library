/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';
import Readme from '../README.md';

storiesOf('Components|Atoms/Radio/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Controlled-component React-ified radio button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledRadioButtonReact />, div);
    return div;
  });
