/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAImageUploadReact from './AXAImageUploadReact';
import Readme from '../README.md';

storiesOf('Molecules/Image Upload/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Image Upload - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div style={{ width: '453px' }}>
        <AXAImageUploadReact>
          Folgende Dateien werden übertragen
        </AXAImageUploadReact>
      </div>,
      div
    );
    return div;
  });
