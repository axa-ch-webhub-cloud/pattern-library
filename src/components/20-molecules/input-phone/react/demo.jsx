import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputPhone from './InputPhoneDemo';

storiesOf('Examples/Input Phone/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputPhone />, div);
    return div;
  });
