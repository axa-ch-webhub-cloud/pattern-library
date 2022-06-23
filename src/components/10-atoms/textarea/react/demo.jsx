import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoContUncontTextarea from './DemoContUncontTextarea';

storiesOf('Examples/Textarea/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoContUncontTextarea />);

    return container;
  });
