/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';
import DemoButtonClick from './DemoButtonClick';
import DemoButtonForm from './DemoButtonForm';

storiesOf('Atoms/Button/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  }).add('Feature - Button clickable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonClick />, div);
    return div;
  })
  .add('Feature - Button in a form', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonForm />, div);
    return div;
  });
