import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoFooterSmall from './FooterSmall';
import Readme from '../README.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';

storiesOf('Molecules/Footer Small/React', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Footer with callbacks on language', () => {
    const div = document.createElement('div');
    div.id = 'footer-small';
    ReactDOM.render(<DemoFooterSmall />, div);
    return div;
  });
