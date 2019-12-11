/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Readme from '../README.md';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren';

storiesOf('Atoms/Checkbox/React/Demo', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Checkbox - default with label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoCheckboxCallbackProps />, div);
    return div;
  })
  .add('Checkbox - label as child of the component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoCheckboxLabelAsChildren />, div);
    return div;
  });
