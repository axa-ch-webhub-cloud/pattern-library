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
    ReactDOM.render(<AXAInputFileReact>Default</AXAInputFileReact>, div);
    return div;
  })

  /* Icon */
  .add('InputFile - Icon', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAInputFileReact icon="arrow-right">Icon</AXAInputFileReact>, div);
    return div;
  })

  /* Multiple */
  .add('InputFile - Multiple', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact multiple>Multiple</AXAInputFileReact>,
      div
    );
    return div;
  })

  /* Accept */
  .add('InputFile - Accept', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact accept="application/pdf">Accept only PDF</AXAInputFileReact>,
      div
    );
    return div;
  })

  /* Capture */
  .add('InputFile - Capture', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div>
        <AXAInputFileReact accept="image" capture>Capture</AXAInputFileReact>
        <AXAInputFileReact capture="user">Capture User</AXAInputFileReact>
        <AXAInputFileReact capture="environment">Capture Environment</AXAInputFileReact>
      </div>,
      div
    );
    return div;
  });
