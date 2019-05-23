/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAInputFileReact from './AXAInputFileReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Input File/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('InputFile - Default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact
        onChange={e => {
          console.log('files selected: ', e.target.files);
        }}
      >
        Default
      </AXAInputFileReact>,
      div
    );
    return div;
  })

  /* Icon */
  .add('InputFile - Icon', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact
        onChange={e => {
          console.log('files selected: ', e.target.files);
        }}
        icon="arrow-right"
      >
        Icon
      </AXAInputFileReact>,
      div
    );
    return div;
  })

  /* Multiple */
  .add('InputFile - Multiple', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact
        onChange={e => {
          console.log('files selected: ', e.target.files);
        }}
        multiple
      >
        Multiple
      </AXAInputFileReact>,
      div
    );
    return div;
  })

  /* Accept */
  .add('InputFile - Accept', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact
        onChange={e => {
          console.log('files selected: ', e.target.files);
        }}
        accept="application/pdf"
      >
        Accept only PDF
      </AXAInputFileReact>,
      div
    );
    return div;
  })

  /* Capture */
  .add('InputFile - Capture', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div>
        <AXAInputFileReact
          onChange={e => {
            console.log('files selected: ', e.target.files);
          }}
          capture
        >
          Capture
        </AXAInputFileReact>
        <AXAInputFileReact
          onChange={e => {
            console.log('files selected: ', e.target.files);
          }}
          accept="image/*"
          capture="capture"
        >
          Capture Image
        </AXAInputFileReact>
        <AXAInputFileReact
          onChange={e => {
            console.log('files selected: ', e.target.files);
          }}
          accept="video/*"
          capture
        >
          Capture Video
        </AXAInputFileReact>
      </div>,
      div
    );
    return div;
  });
