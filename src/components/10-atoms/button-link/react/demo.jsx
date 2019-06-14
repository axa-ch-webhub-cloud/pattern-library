/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';
import DemoButtonClick from './DemoButtonLinkClick';

storiesOf('Atoms/Button Link/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - Button Link clickable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonClick />, div);
    return div;
  });
