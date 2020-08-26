/* eslint-disable react/no-danger */
/* global document */
import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import AXALinkReact from './AXALinkReact';
import Changelog from '../CHANGELOG.md';

storiesOf('Examples/Cookie Disclaimer/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    layout: 'fullscreen',
    changelog: Changelog,
  })
  .add('Story', () => {
    const buttonname = text('buttonname', 'Accept');
    const title = text('text', 'Terms and conditions of data protection');
    const description = text(
      'Description (not an attribute)',
      // eslint-disable-next-line max-len
      'We use cookies and analysis tools to improve the user friendliness of the Internet website and personalise the advertising of AXA and advertising partners. More details:'
    );
    const dataProtection = text(
      'Link text (not an attribute)',
      'Data protection'
    );
    const link = text(
      'Link address (not an attribute)',
      'https://axa.ch/de/informationen/datenschutz.html'
    );

    const div = document.createElement('div');
    ReactDOM.render(
      <AXACookieDisclaimerReact
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('Pressed');
        }}
        title={title}
        buttonname={buttonname}
      >
        <p>
          {description}
          <AXALinkReact variant="arrowright-animated-white" href={link}>
            {dataProtection}
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
