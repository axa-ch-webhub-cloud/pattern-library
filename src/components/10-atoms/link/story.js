/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Link', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Hyperlink',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html">This simple link just links</axa-link>`
  )
  .add(
    'External Link',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html" external>All links with the 'external' attribute will open in a new tab</axa-link>`
  )
  .add(
    'Simple Link - Icon',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html" variant="icon" icon="download">Download Link</axa-link>`
  )
  .add(
    'Simple Link - Static Arrow Right',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html" variant="arrowright">Arrow Right Link</axa-link>`
  )
  .add(
    'Simple Link - Static Arrow Left',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html" variant="arrowleft">Arrow Left Link</axa-link>`
  )
  .add(
    'Simple Link - Animated Arrow Left',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html" variant="arrowleft-animated">Motion Link Left</axa-link>`
  )
  .add(
    'Simple Link - Animated Arrow Right',
    () =>
      `<axa-link href="https://axa.ch/en/private-customers.html" variant="arrowright-animated">Motion Link Right</axa-link>`
  )
  .add(
    'Simple Link - Red Color',
    () => `
    <axa-link href="https://axa.ch/en/private-customers.html" variant="icon-red" icon="download" external>External Download Link</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="icon-red" icon="download">Download Link</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowright-red">Arrow Right Link</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowleft-red">Arrow Left Link</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowleft-animated-red">Motion Link Left</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowright-animated-red">Motion Link Right</axa-link>
    `
  )
  .add(
    'Simple Link - White Color',
    () => `<style>body {background-color: #3032c1;}</style>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="icon-white" icon="download" external>External Download Link</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="icon-white" icon="download">Download Link</axa-link><br><br>
      <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowright-white">Arrow Right Link</axa-link><br><br>
      <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowleft-white">Arrow Left Link</axa-link><br><br>
      <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowleft-animated-white">Motion Link Left</axa-link><br><br>
      <axa-link href="https://axa.ch/en/private-customers.html" variant="arrowright-animated-white">Motion Link Right</axa-link>
      `
  )
  .add(
    'Simple Link - White Hyperlink & Underline',
    () => `<style>body {background-color: #3032c1;}</style>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="hyperlink-white">Hyperlink white</axa-link><br><br>
    <axa-link href="https://axa.ch/en/private-customers.html" variant="hyperlink-white-underline">Hyperlink white underlined</axa-link><br><br>
      `
  );
