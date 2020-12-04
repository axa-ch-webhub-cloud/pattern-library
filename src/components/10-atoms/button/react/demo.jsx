/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoButtonClick from './DemoButtonClick';
import DemoButtonForm from './DemoButtonForm';

export default {
  title: 'Examples/Button/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Clickable = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButtonClick />, div);
  return div;
};

export const InAForm = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButtonForm />, div);
  return div;
};
