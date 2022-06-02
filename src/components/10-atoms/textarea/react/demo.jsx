import { storiesOf } from '@storybook/web-components';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoContUncontTextarea from './DemoContUncontTextarea';

storiesOf('Examples/Textarea/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoContUncontTextarea />, div);
    return div;
  });
