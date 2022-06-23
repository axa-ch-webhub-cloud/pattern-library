import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';

storiesOf('Examples/Radio/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Controlled-component React-ified', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoControlledRadioButtonReact />);

    return container;
  });
