/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoInputText from './DemoInputText';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

storiesOf('Components|Input Text/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputText />, div);
    return div;
  });
