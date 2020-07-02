/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoControlledDatepickerReact from './DemoDatepickerReact';
import DemoDatepickerOnDateChange from './DemoDatepickerOnDateChange';
import DemoDatepickerExternalValidation from './DemoDatepickerExternalValidation';
import DemoDatepickerReRenderOnEveryKeyStroke from './DemoDatepickerReRenderOnDateChange';
import DemoDatepickerNoInputfield from './DemoDatepickerNoInputfield';
import DemoDatepickerReactPod from './DemoDatepickerReactPod';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';
import DemoDatepickerOnInputfieldKeyUp from './DemoDatepickerOnInputfieldKeyUp';

storiesOf('Components|Datepicker/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Controlled-component React-ified Datepicker with inputfield', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledDatepickerReact />, div);
    return div;
  })
  .add(
    'Uncontrolled, onDateChange-driven React-ified Datepicker with inputfield',
    () => {
      const div = document.createElement('div');
      ReactDOM.render(<DemoDatepickerOnDateChange />, div);
      return div;
    }
  )
  .add(
    'External validation using onDateChange-driven React-ified Datepicker with inputfield',
    () => {
      const div = document.createElement('div');
      ReactDOM.render(<DemoDatepickerExternalValidation />, div);
      return div;
    }
  )
  .add(
    'Re-rendering on every keystroke React-ified Datepicker with inputfield',
    () => {
      const div = document.createElement('div');
      ReactDOM.render(<DemoDatepickerReRenderOnEveryKeyStroke />, div);
      return div;
    }
  )
  .add('No-inputfield React-ified Datepicker with external show/hide', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDatepickerNoInputfield />, div);
    return div;
  })
  .add('Pod-versioned React-ified Datepicker', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDatepickerReactPod />, div);
    return div;
  })
  .add('Using onInputfieldKeyUp event', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoDatepickerOnInputfieldKeyUp />, div);
    return div;
  });
