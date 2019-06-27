/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoControlledDatepickerReact from './DemoDatepickerReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Molecules/Datepicker/React/Demos', module)
  .addDecorator(withMarkdown(Readme))
  .add('Controlled-component React-ified Datepicker with inputfield', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledDatepickerReact />, div);
    return div;
  });
