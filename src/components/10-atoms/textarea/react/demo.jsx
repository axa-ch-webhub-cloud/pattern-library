/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoTextarea from './DemoTextarea';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Textarea/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Input Text - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DemoTextarea />,
      div
    );
    return div;
  });
