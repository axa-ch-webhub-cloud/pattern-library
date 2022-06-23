import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
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
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoTextReact />);

    return container;
  })
  .add('Custom-versioned axa-text under React', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoTextReactVersioned />);

    return container;
  });
