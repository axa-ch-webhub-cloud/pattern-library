/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoDropdownReact from './DemoDropdownReact';
import DemoUncontrolledDropdownReact from './DemoUncontrolledDropdownReact';
import Readme from '../README.md';

storiesOf('Molecules/Dropdown/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Dropdown as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDropdownReact />, div);
    return div;
  })
  .add('Dropdown as uncontrolled React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoUncontrolledDropdownReact />, div);
    return div;
  });
