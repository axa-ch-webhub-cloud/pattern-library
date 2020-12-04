/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren';
import DemoUpdateLabelChildren from './DemoUpdateLabelChildren';

export default {
  title: 'Examples/Checkbox/React',
  parameters: {
    readme,
    changelog,
  },
};

export const DefaultWithLabel = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoCheckboxCallbackProps />, div);
  return div;
};
export const LabelAsChildOfTheComponent = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoCheckboxLabelAsChildren />, div);
  return div;
};
export const UpdatesAlsoAsChild = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoUpdateLabelChildren />, div);
  return div;
};
