/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren';
import DemoUpdateLabelChildren from './DemoUpdateLabelChildren';

storiesOf('Examples/Checkbox/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Default with label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoCheckboxCallbackProps />, div);
    return div;
  })
  .add('Label as child of the component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoCheckboxLabelAsChildren />, div);
    return div;
  })
  .add('Updates also as child', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoUpdateLabelChildren />, div);
    return div;
  });
