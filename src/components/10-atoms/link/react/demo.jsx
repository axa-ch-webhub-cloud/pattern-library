/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoLink from './DemoLink';

export default {
  title: 'Examples/Link/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Clickable = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoLink />, div);
  return div;
};
