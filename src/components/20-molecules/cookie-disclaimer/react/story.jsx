/* eslint-disable react/no-danger */
/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import withNoBorder from '../../../../../.storybook/addons/no-border';
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
    const warning = document.createElement('div');
    warning.innerHTML = `
      <!-- This is code only for the demo -->
      <br/>
      <div style="border: 1px solid red; padding: 10px;">
      <h1>This is not rendered by the component. This story disappears after click (Empty your cache and/or localStorage if this page is only showing this message</h1>
      </div>`;
    div.appendChild(warning);

    return div;
  });
