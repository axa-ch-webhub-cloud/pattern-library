/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoLink from './DemoLink';

storiesOf('Examples/Link/React', module)
  .addParameters({
    readme,
    usage: { disabled: true },
    changelog,
  })
  .add('Variable icons', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoLink />, div);
    return div;
  });
