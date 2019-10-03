/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

const storyAXACarousel = storiesOf('Atoms/Carousel', module);
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
      <span>
        Very helpful once I got through to the correct person but I was
        constantly being transferred from person to person, in the end I called
        into my local axa once in the city and got sorted in 10 minutes after 3
        weeks of phone calls.
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor orci, bibendum vitae elementum sit amet, elementum sit amet velit. Sed condimentum mi metus, at facilisis sapien tristique eget. Pellentesque facilisis mauris eu dapibus vehicula. Sed ligula lectus, varius quis mauris in, aliquet ullamcorper nibh. Donec ultricies sapien at purus efficitur, in finibus urna facilisis. Proin accumsan faucibus ipsum, ut efficitur nisl venenatis a. Morbi nec sollicitudin justo. Nunc nec dolor libero. Cras eget accumsan ipsum. Morbi cursus in neque non bibendum. Nunc fermentum condimentum dui vel porttitor. Nullam enim felis, accumsan a massa vitae, condimentum tempus dolor. Nullam massa arcu, ultricies a magna vel, accumsan rutrum diam. Nunc a fermentum dolor. In hac habitasse platea dictumst. Fusce vitae pulvinar elit. Etiam gravida, elit nec varius tempor, eros erat tincidunt orci, et rutrum turpis ipsum eget elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque congue eu purus nec dictum. Nunc vitae sapien dui. Cras a consequat justo. Duis sed turpis non dolor feugiat porta. Vivamus dignissim purus sed felis bibendum, sit amet ullamcorper ante ultrices. Phasellus purus ante, feugiat iaculis pulvinar non, tempus et mauris. Morbi id orci vulputate lorem tincidunt congue. Mauris quis sapien posuere, tempus diam et, eleifend ipsum.
      </span>
      <span>This is a small text.</span>
   </div> 
  `;

  render(template, wrapper);
  return wrapper;
});
