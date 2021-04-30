/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoButtonClick from './DemoButtonClick';
import DemoButtonForm from './DemoButtonForm';

storiesOf('Examples/Button/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Clickable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonClick />, div);
    return div;
  })
  .add('In a form', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonForm />, div);
    return div;
  });
