/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoControlledDatepickerReact from './DemoDatepickerReact';
import DemoDatepickerOnDateChange from './DemoDatepickerOnDateChange';
import Readme from '../README.md';

storiesOf('Molecules/Datepicker/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
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
  );
