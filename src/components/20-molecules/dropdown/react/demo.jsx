import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoDropdownReact from './DemoDropdownReact';
import DemoDropdownVersionedReact from './DemoDropdownVersionedReact';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import DemoManyOptionsDropdownReact from './DemoManyOptionsReact';

storiesOf('Examples/Dropdown/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Focussable', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoFocussableDropdownReact />);

    return container;
  })
  .add('Many-options', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoManyOptionsDropdownReact />);

    return container;
  })
  .add('React Component', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDropdownReact />);

    return container;
  })
  .add('Versioned React Component', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDropdownVersionedReact />);

    return container;
  });
