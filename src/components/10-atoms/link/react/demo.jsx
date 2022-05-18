import { storiesOf } from '@storybook/web-components';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoLink from './DemoLink';
import DemoLinkInsideText from './DemoLinkInsideText';

storiesOf('Examples/Link/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Variable icons', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoLink />, div);
    return div;
  })
  .add('Link inside of text', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoLinkInsideText />, div);
    return div;
  });
