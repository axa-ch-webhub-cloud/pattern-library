import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputPhone from './InputPhoneDemo';

storiesOf('Examples/Input Phone/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Controlled/uncontrolled', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoInputPhone />);

    return container;
  });
