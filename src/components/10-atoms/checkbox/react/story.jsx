/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXACheckbox from './AXACheckboxReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Checkbox/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Checkbox - uncontrolled', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <AXACheckbox
        label="I'm a checkbox with longer label and error"
        error=" Im an error"
      />,
      div
    );
    return div;
  });
