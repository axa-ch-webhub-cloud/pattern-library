import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
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
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoButtonClick />);
    return container;
  })
  .add('In a form', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoButtonForm />);
    return container;
  });
