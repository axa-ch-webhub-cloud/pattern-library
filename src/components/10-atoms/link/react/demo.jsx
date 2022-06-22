import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoLink from './DemoLink';
import DemoLinkInsideText from './DemoLinkInsideText';

storiesOf('Examples/Link/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Variable icons', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoLink />);

    return container;
  })
  .add('Link inside of text', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<DemoLinkInsideText />);

    return container;
  });
