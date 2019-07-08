/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import Readme from '../README.md';

storiesOf('Molecules/Dropdown/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Focussable React-ified Dropdown', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoFocussableDropdownReact />, div);
    return div;
  });
