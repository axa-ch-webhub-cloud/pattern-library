/* eslint-disable react/no-danger */
/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
// import withNoBorder from '../../../../../.storybook/addons/no-border/react/no-border-react';
import AXALinkReact from './AXALinkReact';
import Readme from '../README.md';

// TODO:: Make it work in react. We receive a HTMLObject and have to wrap it.
const withNoBorder = storyFn => {
  const div = document.createElement('div');
  // const existingElement = wrapper; // story is a [HTMLObject...]
  // If we get this work, we can als render a style tag;
  ReactDOM.render(
    <div style={{ padding: '10px', background: 'hotpink' }}>{storyFn()}</div>,
    div
  );
  return div;
};

storiesOf('Molecules/Cookie disclaimer/React', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Cookie disclaimer - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
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
      </AXACookieDisclaimerReact>,
      div
    );
    return div;
  });
