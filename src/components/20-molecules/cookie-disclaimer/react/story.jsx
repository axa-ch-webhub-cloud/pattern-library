/* eslint-disable react/no-danger */
/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import withNoBorder from '../../../../../.storybook/addons/no-border/no-border';
import AXALinkReact from './AXALinkReact';
import Readme from '../README.md';

storiesOf('Molecules/Cookie disclaimer/React', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Cookie disclaimer - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXACookieDisclaimerReact
        onClick={() => {
          // eslint-disable-next-line no-console
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
      </AXACookieDisclaimerReact>,
      div
    );
    return div;
  });
