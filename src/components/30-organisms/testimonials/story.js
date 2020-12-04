import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Testimonials',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
  },
};

export const Testimonials = ({
  title,
  subtitle,
  autorotatedisabled,
  autorotatetime,
  keysenabled,
  showallinline,
}) => {
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
Testimonials.args = {
  title: 'Customer Reviews',
  subtitle:
    'AXA works hard to provide the best service possible to its customers.',
  autorotatedisabled: false,
  autorotatetime: 5000,
  keysenabled: true,
  showallinline: false,
};
