/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import DemoManyOptionsDropdownReact from './DemoManyOptionsReact';
import DemoDropdownReact from './DemoDropdownReact';
import Readme from '../README.md';

storiesOf('Components|Molecules/Dropdown/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Focussable React-ified Dropdown', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoFocussableDropdownReact />, div);
    return div;
  })
  .add('Many-options React-ified Dropdown', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoManyOptionsDropdownReact />, div);
    return div;
  })
  .add('Dropdown as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDropdownReact />, div);
    return div;
  });
