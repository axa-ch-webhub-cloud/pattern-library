/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoTextReact from './DemoTextReact';
import Changelog from '../CHANGELOG.md';

storiesOf('Examples/Text/React', module)
  .addParameters({
    changelog: Changelog,
    knobs: { disabled: true },
  })
  /* Default */
  .add('Dynamic children under React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoTextReact />, div);
    return div;
  });
