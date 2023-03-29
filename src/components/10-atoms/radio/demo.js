import { html } from 'lit';
import { CarSvg } from '@axa-ch-webhub-cloud/materials/images';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Examples/Radio/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const Radio = () => {
  const error = 'Bitte wählen Sie eine Option aus.';

  const handleClick = () => {
    setTimeout(() => {
      const atLeastOneChecked = [
        ...document.querySelectorAll('axa-radio[name="contract"]'),
      ]
        .map(radio => radio.checked)
        .reduce((acc, curr) => acc | curr, 0);
      document.querySelector('axa-fieldset').error = atLeastOneChecked
        ? ''
        : error;
    }, 0);
  };

  return html`
    <axa-fieldset error="${error}" @click="${handleClick}">
    <axa-radio name="contract" label="Ja,
    Versicherungsvertrag abschliessen." value="1"></axa-radio>
    <axa-radio name="contract" label="Ich brauche noch mehr Informationen" value="2"></axa-radio>
    <axa-radio name="contract" label="Nein, ich möchte keinen Versicherungsvertrag" value="3"></axa-radio>
    <axa-radio name="contract" label="Nein, ich bin bereits versichert" disabled></<axa-radio>
    </axa-fieldset>`;
};

export const RadioButtonAutoWidth = () =>
  `
<axa-fieldset horizontal>
<axa-radio button name="insurance" label="No, I'm already insured"></axa-radio>
<axa-radio button name="insurance" label="No, no need" ></axa-radio>
<axa-radio button name="insurance" label="Yes, take out insurance" checked></axa-radio>
<axa-radio button name="insurance" label="Yes, call me" disabled></axa-radio>
</axa-fieldset>`;

export const RadioButtonNoGap = () => `
<axa-fieldset horizontal>
<axa-radio button nogap name="insurance" label="No, I'm already insured"></axa-radio>
<axa-radio button nogap name="insurance" label="Yes, take out insurance" checked></axa-radio>
</axa-fieldset>`;

export const RadioButtonNoAutoWidth = () => `
<axa-fieldset horizontal>
<axa-radio button name="insurance" noautowidth label="No, I'm already insured"></axa-radio>
<axa-radio button name="insurance" noautowidth label="No, no need" ></axa-radio>
<axa-radio button name="insurance" noautowidth label="Yes, take out insurance" checked></axa-radio>
</axa-fieldset>`;

export const RadioButtonIcon = () => html`
  <axa-fieldset horizontal>
    <axa-radio
      button
      name="insurance"
      label="Option 1"
      .icon="${CarSvg}"
    ></axa-radio>
    <axa-radio
      button
      name="insurance"
      label="Option 2"
      .icon="${CarSvg}"
    ></axa-radio>
    <axa-radio
      button
      name="insurance"
      label="Option 3"
      checked
      .icon="${CarSvg}"
    ></axa-radio>
    <axa-radio
      button
      name="insurance"
      label="Option 4"
      disabled
      .icon="${CarSvg}"
    ></axa-radio>
  </axa-fieldset>
`;
