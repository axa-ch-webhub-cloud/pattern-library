/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import './index';
import Readme from './README.md';

const storyAXACommercialHeroBanner = storiesOf(
  'Organisms/Commercial hero banner',
  module
);
storyAXACommercialHeroBanner.addDecorator(withNoBorder);
storyAXACommercialHeroBanner.addDecorator(withKnobs);
storyAXACommercialHeroBanner.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACommercialHeroBanner.add('Commercial hero banner', () => {
  const children = text('Text', 'Some Children');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-commercial-hero-banner>${children}</axa-commercial-hero-banner>
  `;

  render(template, wrapper);
  return wrapper;
});
