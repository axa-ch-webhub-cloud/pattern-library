/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoTextReact from './DemoTextReact';
import DemoTextReactVersioned from './DemoTextReactVersioned';

export default {
  title: 'Examples/Text/React',
  parameters: {
    readme,
    changelog,
  },
};

export const DynamicChildrenUnderReact = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoTextReact />, div);
  return div;
};
export const CustomVersionedAxatextUnderReact = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoTextReactVersioned />, div);
  return div;
};
