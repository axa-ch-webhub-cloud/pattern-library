/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXACheckboxReact from './AXACheckboxReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Checkbox/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Checkbox - default with label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXACheckboxReact label="I'm a label" />, div);
    return div;
  });
