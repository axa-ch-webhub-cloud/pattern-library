import DemoFooterSmall from './FooterSmall';

import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Molecules/Footer Small/React', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer with callbacks on language', () => {
    const div = document.createElement('div');
    div.id = 'footer-small';
    ReactDOM.render(<DemoFooterSmall />, div);
    return div;
  });
