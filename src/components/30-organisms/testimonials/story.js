import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Testimonials',
  parameters: {
    readme,
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const Testimonials = ({
  autorotatetime,
  autorotatedisabled,
  keysenabled,
  showallinline,
  title,
  subtitle,
}) => html`
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
        constantly being transferred from person to person, in the end I called
        into my local axa once in the city and got sorted in 10 minutes after 3
        weeks of phone calls.</span
      >
      <span class="o-testimonials__author">Andrew Jackson, Advocate</span>
    </div>
    <div class="o-testimonials__vertical-margin">
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
      <span class="o-testimonials__author">Andrew Müller, Advocate</span>
    </div>
    <span class="o-testimonials__vertical-margin"
      >This is a small text without an author.</span
    >
  </axa-testimonials>
`;
