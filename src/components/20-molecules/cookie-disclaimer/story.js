import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';
import '../../10-atoms/link/index.wc.js';

export default {
  title: 'Components/Cookie Disclaimer',
  parameters: {
    readme,
    usage: {
      propsReact: 'title="Any Title"',
    },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const CookieDisclaimer = ({
  buttonname,
  title,
  fixed,
  description,
  href,
  slot,
}) => html`
  <axa-cookie-disclaimer
    buttonname="${buttonname}"
    title="${title}"
    variant="${fixed ? 'fixed' : ''}"
  >
    <p>${description}</p>
    <axa-link variant="arrowright-animated-white" href="${href}">
      ${slot}
    </axa-link>
  </axa-cookie-disclaimer>

  <!-- This is code only for the demo -->
  <br />
  <div style="border: 1px solid red; padding: 10px;">
    <h1>
      This is not rendered by the component. This story disappears after click
      (Empty your cache and/or localStorage if this page is only showing this
      message)
    </h1>
  </div>
`;
