/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoButtonClick from './DemoButtonLinkClick';

export default {
  title: 'Examples/Button Link/React',
  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};

export const Clickable = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButtonClick />, div);
  return div;
};
