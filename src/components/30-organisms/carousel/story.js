/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyAXACarousel = storiesOf('Organisms/Carousel', module);
storyAXACarousel.addDecorator(withKnobs);
storyAXACarousel.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACarousel.add('Carousel', () => {
  const children = text('Text', 'Some Children');
  
  const wrapper = document.createElement('div');
  const template = html`
    <axa-carousel>${children}<axa-carousel>
  `;
  
  render(template, wrapper);
  return wrapper;
});