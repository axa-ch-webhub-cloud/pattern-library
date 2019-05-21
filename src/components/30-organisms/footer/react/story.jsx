import DemoFooter from './Footer';

import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Molecules/Footer Small/React', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer', () => {
    const div = document.createElement('div');
    div.id = 'footer';
    ReactDOM.render(<DemoFooter />, div);
    return div;
  });
