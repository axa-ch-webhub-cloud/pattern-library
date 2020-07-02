/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';
import DemoButtonClick from './DemoButtonLinkClick';

storiesOf('Components|Button Link/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Clickable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonClick />, div);
    return div;
  });
