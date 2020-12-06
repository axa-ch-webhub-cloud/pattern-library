/* global document */
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Examples/Textarea/Pure HTML',
  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};

export const CharacterCounter = () => `<div>
<axa-textarea
  style="display: block; margin-bottom: 20px;"
  label="Character counter with string pattern"
  maxlength="3"
  counter="still ##counter## characters left"
  countermax="character limit reached"
  checkmark
></axa-textarea>
<axa-textarea
  style="display: block; margin-bottom: 20px;"
  label="Character counter without string pattern"
  maxlength="3"
  counter="characters left"
></axa-textarea>
<axa-textarea
  label="Character counter, digits only"
  maxlength="3"
></axa-textarea>
</div>`;

export const ChildrenDefaultValue = () =>
  `<axa-textarea>prefilled value</axa-textarea>`;
export const MaxlengthAddedLater = () => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-textarea></axa-textarea>
  `;

  setTimeout(() => {
    document
      .querySelector('axa-textarea')
      .setAttribute('counter', 'Still ##counter## left');
    document.querySelector('axa-textarea').setAttribute('maxLength', 100);
    document
      .querySelector('axa-textarea')
      .setAttribute('countermax', 'Max maxLength reached');
  }, 2000);

  render(template, wrapper);
  return wrapper;
};
