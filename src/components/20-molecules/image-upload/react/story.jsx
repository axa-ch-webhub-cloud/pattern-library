/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAImageUploadReact from './AXAImageUploadReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Molecules/Image Upload/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Image Upload - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAImageUploadReact>Image Upload</AXAImageUploadReact>,
      div
    );
    return div;
  });
