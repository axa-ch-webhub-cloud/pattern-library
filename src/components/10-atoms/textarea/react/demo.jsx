/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoContUncontTextarea from './DemoContUncontTextarea';
import Changelog from '../CHANGELOG.md';

storiesOf('Examples/Textarea/React', module)
  .addParameters({
    changelog: Changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoContUncontTextarea />, div);
    return div;
  });
