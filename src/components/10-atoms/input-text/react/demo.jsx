import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputText from './DemoInputText';
import DemoInputTextonKeyDown from './DemoInputTextonKeyDown';
import DemoInputTextonKeyUp from './DemoInputTextonKeyUp';

storiesOf('Examples/Input Text/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputText />, div);
    return div;
  })
  .add('Using onKeyDown event', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputTextonKeyDown />, div);
    return div;
  })
  .add('Using onKeyUp event', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputTextonKeyUp />, div);
    return div;
  });
