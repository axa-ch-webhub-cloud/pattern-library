/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoContUncontTextarea from './DemoContUncontTextarea';

export default {
  title: 'Examples/Textarea/React',
  parameters: {
    readme,
    changelog,
  },
};

export const DynamicChildrenUnderReact = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoContUncontTextarea />, div);
  return div;
};
