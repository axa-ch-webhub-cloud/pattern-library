/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoContUncontTextarea from './DemoContUncontTextarea';

storiesOf('Examples/Textarea/React', module)
  .addParameters({
    readme,
    usage: { disabled: true },
    changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoContUncontTextarea />, div);
    return div;
  });
