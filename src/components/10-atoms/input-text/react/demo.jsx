import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputText from './DemoInputText';
import DemoInputTextonKeyUp from './DemoInputTextonKeyUp';

storiesOf('Examples/Input Text/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Controlled/uncontrolled', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoInputText />);

    return container;
  })
  .add('Using onKeyUp event', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoInputTextonKeyUp />);

    return container;
  });
