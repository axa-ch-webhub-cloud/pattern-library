/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAFileUploadReact from './AXAFileUploadReact';
import Readme from '../README.md';

storiesOf('Molecules/File Upload/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('File Upload - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div style={{ width: '453px' }}>
        <AXAFileUploadReact>
          The following files are being transferred:
        </AXAFileUploadReact>
      </div>,
      div
    );
    return div;
  });
