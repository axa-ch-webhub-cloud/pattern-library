/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import DemoManyOptionsDropdownReact from './DemoManyOptionsReact';
import DemoDropdownReact from './DemoDropdownReact';
import DemoDropdownVersionedReact from './DemoDropdownVersionedReact';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

storiesOf('Examples/Dropdown/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Focussable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoFocussableDropdownReact />, div);
    return div;
  })
  .add('Many-options', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoManyOptionsDropdownReact />, div);
    return div;
  })
  .add('React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDropdownReact />, div);
    return div;
  })
  .add('Versioned React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDropdownVersionedReact />, div);
    return div;
  });
