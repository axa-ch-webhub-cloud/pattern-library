/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Changelog from '../CHANGELOG.md';
import DemoLink from './DemoLink';

storiesOf('Examples/Link/React', module)
  .addParameters({
    changelog: Changelog,
  })
  .add('Variable icons', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoLink />, div);
    return div;
  });
