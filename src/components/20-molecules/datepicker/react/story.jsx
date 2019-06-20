/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXADatepickerReact from './AXADatepickerReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Molecules/Datepicker/React', module)
  .addDecorator(withMarkdown(Readme))
  .add('Datepicker as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXADatepickerReact
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
        onAXADateChange={date => console.log(`date changed ${date}`)}
      />,
      div
    );
    return div;
  });
