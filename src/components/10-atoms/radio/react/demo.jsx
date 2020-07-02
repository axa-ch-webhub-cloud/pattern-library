/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

storiesOf('Components|Radio/React/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Controlled-component React-ified', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledRadioButtonReact />, div);
    return div;
  });
