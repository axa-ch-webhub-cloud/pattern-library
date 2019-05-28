import DemoFooter from './Footer';

import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';
import withBodyReset from '../../../../../.storybook/addons/reset-body';

storiesOf('Organisms/Footer/React', module)
  .addDecorator(withMarkdown(Readme))
  .addDecorator(withBodyReset())
  .add('Feature - Footer Callbacks', () => {
    const div = document.createElement('div');
    div.id = 'footer';
    ReactDOM.render(<DemoFooter />, div);
    return div;
  });
