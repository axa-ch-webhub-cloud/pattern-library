/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXADatepickerReact from './AXADatepickerReact';
import Readme from '../README.md';

storiesOf('Molecules/Datepicker/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Datepicker as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXADatepickerReact
        data-test-id="datepicker-react"
        locale="de-CH"
        day={25}
        month={1}
        labelbuttoncancel="Cancel"
        labelbuttonok="OK"
        allowedyears={['2019-2020', 2024]}
      />,
      div
    );
    return div;
  })
  .add('Datepicker with inputfield as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXADatepickerReact
        inputfield
        inputplaceholder="Wählen Sie ein Datum"
        data-test-id="datepicker-react"
        locale="de-CH"
        day={25}
        month={1}
        year={2020}
        labelbuttoncancel="Cancel"
        labelbuttonok="OK"
        allowedyears={[2019, 2020]}
      />,
      div
    );
    return div;
  });
