/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren';
import DemoUpdateLabelChildren from './DemoUpdateLabelChildren';
import DemoUpdateDomLabel from './DemoUpdateDomLabel';

storiesOf('Components|Atoms/Checkbox/React/Demo', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
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
  })
  .add('Checkbox - updates also as child', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoUpdateLabelChildren />, div);
    return div;
  })
  .add('Checkbox - updates also as DOM label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoUpdateDomLabel />, div);
    return div;
  });
