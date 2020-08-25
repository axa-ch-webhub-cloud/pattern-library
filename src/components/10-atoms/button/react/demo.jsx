/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Changelog from '../CHANGELOG.md';
import DemoButtonClick from './DemoButtonClick';
import DemoButtonForm from './DemoButtonForm';

storiesOf('Examples/Button/React', module)
  .addParameters({
    changelog: Changelog,
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
