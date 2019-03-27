import React from 'react';
import { storiesOf } from '@storybook/html';
import ReactDOM from 'react-dom';
import DemoButton from './DemoButton';

storiesOf('Demos', module).add('Button with React', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButton />, div);
  return div;
});
