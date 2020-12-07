/* global document */
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Examples/Checkbox/Pure HTML',
  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};

export const UseYourOwnLabelAsAChildOfTheComponent = () => {
  const template = html`
    <axa-checkbox
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
    </axa-checkbox>
  `;

  const wrapper = document.createElement('div');
  render(template, wrapper);
  return wrapper;
};

export const UseAStyledHtmlLabel = () => {
  const template = html`
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

  const wrapper = document.createElement('div');
  render(template, wrapper);
  return wrapper;
};

UseAStyledHtmlLabel.story = {
  name: 'Use A Styled HTML Label',
};

export const WithoutALabel = () => {
  const template = html`
    <axa-checkbox
      name="checkbox"
      error="This checkbox do not have a label, but its also clickable"
    >
    </axa-checkbox>
  `;

  const wrapper = document.createElement('div');
  render(template, wrapper);
  return wrapper;
};
