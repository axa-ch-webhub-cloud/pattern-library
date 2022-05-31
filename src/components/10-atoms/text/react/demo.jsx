import { storiesOf } from '@storybook/web-components';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoTextReact from './DemoTextReact';
import DemoTextReactVersioned from './DemoTextReactVersioned';

storiesOf('Examples/Text/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
    knobs: { disable: true },
  })
  /* Default */
  .add('Dynamic children under React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoTextReact />, div);
    return div;
  })
  .add('Custom-versioned axa-text under React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoTextReactVersioned />, div);
    return div;
  });
