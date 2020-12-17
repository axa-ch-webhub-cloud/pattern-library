/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';

storiesOf('Examples/Radio/React', module)
  .addParameters({
    readme,
    usage: { disabled: true },
    changelog,
  })
  .add('Controlled-component React-ified', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledRadioButtonReact />, div);
    return div;
  });
