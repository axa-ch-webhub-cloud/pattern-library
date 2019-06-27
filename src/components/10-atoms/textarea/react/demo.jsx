/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoContUncontTextarea from './DemoContUncontTextarea';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Textarea/React/Demos', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Feature - Textarea controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DemoContUncontTextarea />,
      div
    );
    return div;
  });
