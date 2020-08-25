/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';
import Changelog from '../CHANGELOG.md';

storiesOf('Examples/Radio/React', module)
  .addParameters({
    changelog: Changelog,
  })
  .add('Controlled-component React-ified', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledRadioButtonReact />, div);
    return div;
  });
