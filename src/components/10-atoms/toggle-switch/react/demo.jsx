/* global document */
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';
import ControlledWithOnChange from './ControlledWithOnChange';

storiesOf('Examples/Toggle Switch/React', module)
  .addParameters({
    readme,
    changelog,
  })
  .add('Controlled without onChange', () => {
    const div = document.createElement('div');
    const active = boolean('active', false);

    ReactDOM.render(<AXAToggleSwitchReact active={active} />, div);

    return div;
  })
  .add('Controlled with onChange', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlledWithOnChange />, div);

    return div;
  })
  .add('Uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAToggleSwitchReact />, div);

    return div;
  });
