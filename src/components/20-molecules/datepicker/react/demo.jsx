import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoDatepickerExternalValidation from './DemoDatepickerExternalValidation';
import DemoDatepickerNoInputfield from './DemoDatepickerNoInputfield';
import DemoDatepickerOnDateChange from './DemoDatepickerOnDateChange';
import DemoDatepickerOnInputfieldKeyUp from './DemoDatepickerOnInputfieldKeyUp';
import DemoControlledDatepickerReact from './DemoDatepickerReact';
import DemoDatepickerReactPod from './DemoDatepickerReactPod';
import DemoDatepickerReRenderOnEveryKeyStroke from './DemoDatepickerReRenderOnDateChange';

storiesOf('Examples/Datepicker/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Controlled-component with inputfield', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoControlledDatepickerReact />);

    return container;
  })
  .add('Uncontrolled, onDateChange-driven with inputfield', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDatepickerOnDateChange />);

    return container;
  })
  .add('External validation using onDateChange-driven with inputfield', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDatepickerExternalValidation />);

    return container;
  })
  .add('Re-rendering on every keystroke with inputfield', () => {
    const container = document.createElement('container');
    root.render(<DemoDatepickerReRenderOnEveryKeyStroke />, container);
    return container;
  })
  .add('No-inputfield with external show/hide', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDatepickerNoInputfield />);

    return container;
  })
  .add('Pod-versioned', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDatepickerReactPod />);

    return container;
  })
  .add('Using onInputfieldKeyUp event', () => {
    const container = document.createElement('container');
    const root = createRoot(container);
    root.render(<DemoDatepickerOnInputfieldKeyUp />);

    return container;
  });
