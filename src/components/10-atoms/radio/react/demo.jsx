/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';

export default {
  title: 'Examples/Radio/React',
  parameters: {
    readme,
    changelog,
  },
};

export const ControlledComponentReactified = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoControlledRadioButtonReact />, div);
  return div;
};
