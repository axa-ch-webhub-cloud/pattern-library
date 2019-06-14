/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';

storiesOf('Atoms/Checkbox/React/Demo', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })\n
  .add('Checkbox - default with label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoCheckboxCallbackProps />, div);
    return div;
  });
