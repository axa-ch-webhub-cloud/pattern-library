import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Examples/Checkbox/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const CustomLabel = () => html` <axa-checkbox
  class="hover"
  name="checkbox"
  .checked="${false}"
  required="true"
  ><p>
    <span class="non-link-label-text">I agree to</span>
    <a href="https://www.google.ch" target="_blank"
      >conditions of data protection.</a
    >
  </p>
</axa-checkbox>`;

export const StyledHtmlLabel = () => html`
  <axa-checkbox
    class="hover"
    name="checkbox"
    .checked="${false}"
    required="true"
    variant="checkmark"
    label="<p><span class='non-link-label-text'>This is an HTML label with a </span><a href='https://www.google.ch' target='_blank'>link.</a></p>"
    styled
  >
  </axa-checkbox>
`;

export const WithoutLabel = () => html`
  <axa-checkbox
    name="checkbox"
    error="This checkbox does not have a label, but it's still clickable"
  >
  </axa-checkbox>
`;
