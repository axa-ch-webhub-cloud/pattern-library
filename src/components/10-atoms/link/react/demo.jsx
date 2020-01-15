/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Readme from '../README.md';
import DemoLink from './DemoLink';

storiesOf('Atoms/Link/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - Link with variable icons', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoLink />, div);
    return div;
  });
