/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

import wrap from '../../../../demo/react/utils/wrap-render-react';

storiesOf('Molecules/Cookie disclaimer/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Cookie disclaimer - default', () => {
    return wrap(
      <AXACookieDisclaimerReact
        onClick={() => {
          console.log('Pressed');
        }}
        title="Any Title"
        buttonname="Click me"
      >
        <p>Any Description for the cookie disclaimer</p>
      </AXACookieDisclaimerReact>
    );
  });
