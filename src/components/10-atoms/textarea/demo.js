import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Examples/Textarea/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const CharacterCounter = () =>
  `<div>
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

/* TODO rewrite this
export const DynamicMaxLength = () => {
  setTimeout(() => {
    document
      .querySelector('axa-textarea')
      .setAttribute('counter', 'Still ##counter## left');
    document.querySelector('axa-textarea').setAttribute('maxLength', 100);
    document
      .querySelector('axa-textarea')
      .setAttribute('countermax', 'Max maxLength reached');
  }, 2000);

  return html`<axa-textarea>123</axa-textarea>`;
};
 */
