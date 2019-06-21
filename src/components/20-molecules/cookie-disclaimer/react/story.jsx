/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import wrap from '../../../../demo/react/utils/wrap-render-react';
import AXALinkReact from './AXALinkReact';
import Readme from '../README.md';

storiesOf('Molecules/Cookie disclaimer/React', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
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
        <p>
          Any Description for the cookie disclaimer
          <AXALinkReact
            variant="arrowright-animated-white"
            href="https://axa.ch/de/informationen/datenschutz.html"
          >
            Data protection
          </AXALinkReact>
        </p>
      </AXACookieDisclaimerReact>
    );
  });
