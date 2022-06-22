import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren';
import DemoUpdateLabelChildren from './DemoUpdateLabelChildren';

storiesOf('Examples/Checkbox/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Default with label', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoCheckboxCallbackProps />);
    return container;
  })
  .add('Label as child of the component', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoCheckboxLabelAsChildren />);
    return container;
  })
  .add('Updates also as child', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoUpdateLabelChildren />);
    return container;
  });
