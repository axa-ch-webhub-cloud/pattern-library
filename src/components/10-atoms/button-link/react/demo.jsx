import { storiesOf } from '@storybook/web-components';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoButtonClick from './DemoButtonLinkClick';

storiesOf('Examples/Button Link/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Clickable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButtonClick />, div);
    return div;
  });
