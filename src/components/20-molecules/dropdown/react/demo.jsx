import { storiesOf } from '@storybook/web-components';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoDropdownReact from './DemoDropdownReact';
import DemoDropdownVersionedReact from './DemoDropdownVersionedReact';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import DemoManyOptionsDropdownReact from './DemoManyOptionsReact';

storiesOf('Examples/Dropdown/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
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
