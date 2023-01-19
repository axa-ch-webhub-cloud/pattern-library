import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';
import '../radio/index.wc.js';
import '../text/index.wc.js';

export default {
  title: 'Examples/Fieldset/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const ResponsiveStretch = () => html`
  <axa-text size="3">
    Resize your browser to a tablet or mobile width to see the effect of
    'horizontal="stretch"'</axa-text
  >
  <br />
  <axa-text>How old are you?</axa-text>
  <br />
  <axa-fieldset horizontal="stretch">
    <axa-radio button name="contract" label="18-45" value="1"></axa-radio>
    <axa-radio button name="contract" label="46-54" value="2"></axa-radio>
    <axa-radio button name="contract" label="55+" value="3"></axa-radio>
  </axa-fieldset>
`;
