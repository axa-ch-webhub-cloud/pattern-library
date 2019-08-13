/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

const storyAXACarousel = storiesOf('Organisms/Carousel', module);
storyAXACarousel.addDecorator(withKnobs);
storyAXACarousel.addDecorator(withNoBorder);
storyAXACarousel.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACarousel.add('Carousel', () => {
  const autorotatedisabled = boolean('autorotatedisabled', false);
  const autorotatetime = number('autorotatetime', 5000);
  const keysenabled = boolean('keysenabled', true);

  const wrapper = document.createElement('div');
  const template = html`
<div id="colorWrapper" style="background: lightcoral; color: white;">
    <axa-carousel
    autorotatetime="${autorotatetime}"
    ?autorotatedisabled="${autorotatedisabled}"
    ?keysenabled="${keysenabled}"
    >
      <span
        >Very helpful once I got through to the correct person but I was
        constantly being transferred from person to person, in the end I called
        into my local axa once in the city and got sorted in 10 minutes after 3
        weeks of phone calls.</span
      >
      <span
        >Very helpful once I got through to the correct person but I was
        constantly being transferred from person to person, in the end I called
        into my local axa once in the city and got sorted in 10 minutes after 3
        weeks of phone calls. Very helpful once I got through to the correct
        person but I was constantly being transferred from person to person, in
        the end I called into my local axa once in the city and got sorted in 10
        minutes after 3 weeks of phone calls. Very helpful once I got through to
        the correct person but I was constantly being transferred from person to
        person, in the end I called into my local axa once in the city and got
        sorted in 10 minutes after 3 weeks of phone calls. Very helpful once I
        got through to the correct person but I was constantly being transferred
        from person to person, in the end I called into my local axa once in the
        city and got sorted in 10 minutes after 3 weeks of phone calls.</span
      >
      <span>This is a small text.</span>
   </div> 
  `;

  render(template, wrapper);
  return wrapper;
});
