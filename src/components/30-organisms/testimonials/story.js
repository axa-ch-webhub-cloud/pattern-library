import { boolean, text, withKnobs, number } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from './CHANGELOG.md';

export default {
  title: 'Components/Testimonials',
  decorators: [withKnobs],
  parameters: {
    layout: 'fullscreen',
    changelog: Changelog,
  },
};

export const Testimonials = () => {
  const title = text('title', 'Customer Reviews');
  const subtitle = text(
    'Text',
    'AXA works hard to provide the best service possible to its customers.'
  );
  const autorotatedisabled = boolean('autorotatedisabled', false);
  const autorotatetime = number('autorotatetime', 5000);
  const keysenabled = boolean('keysenabled', true);
  const showallinline = boolean('showallinline', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-testimonials
      autorotatetime="${autorotatetime}"
      ?autorotatedisabled="${autorotatedisabled}"
      ?keysenabled="${keysenabled}"
      ?showallinline="${showallinline}"
      title="${title}"
      subtitle="${subtitle}"
    >
      <div class="o-testimonials__vertical-margin">
        <span
          >Very helpful once I got through to the correct person but I was
          constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls.</span
        >
        <span class="o-testimonials__author">Andrew Jackson, Advocate</span>
      </div>
      <div class="o-testimonials__vertical-margin">
        <span
          >Very helpful once I got through to the correct person but I was
          constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls. Very helpful once I got through to the
          correct person but I was constantly being transferred from person to
          person, in the end I called into my local axa once in the city and got
          sorted in 10 minutes after 3 weeks of phone calls. Very helpful once I
          got through to the correct person but I was constantly being
          transferred from person to person, in the end I called into my local
          axa once in the city and got sorted in 10 minutes after 3 weeks of
          phone calls. Very helpful once I got through to the correct person but
          I was constantly being transferred from person to person, in the end I
          called into my local axa once in the city and got sorted in 10 minutes
          after 3 weeks of phone calls.</span
        >
        <span class="o-testimonials__author">Andrew Müller, Advocate</span>
      </div>
      <span class="o-testimonials__vertical-margin"
        >This is a small text without an author.</span
      >
    </axa-testimonials>
  `;

  render(template, wrapper);
  return wrapper;
};
