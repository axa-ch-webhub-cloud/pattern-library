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
        day={20}
        month={0}
        year={2020}
      />,
      div
    );
    return div;
  });
