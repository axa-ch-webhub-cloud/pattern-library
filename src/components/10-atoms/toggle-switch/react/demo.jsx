import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';
import ControlledWithOnChange from './ControlledWithOnChange';
import ControlledWithConstantActiveProperty from './ControlledWithConstantActiveProperty';

storiesOf('Examples/Toggle Switch/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Controlled without onChange', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    const active = boolean('active', false);

    root.render(<AXAToggleSwitchReact active={active} />);

    return container;
  })
  .add('Controlled with onChange', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<ControlledWithOnChange />);

    return container;
  })
  .add('Controlled with dummy onChange listener', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<ControlledWithConstantActiveProperty />);

    return container;
  })
  .add('Uncontrolled', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<AXAToggleSwitchReact />);

    return container;
  });
