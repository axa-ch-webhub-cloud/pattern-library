import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Examples/Input text/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const NativeOninputEventAttribute =
  () => `<axa-input-text oninput="{document.getElementById('output-oninput').innerText =
    'oninput event triggered on: ' + Date.now();}"></axa-input-text></br>
      <axa-text id="output-oninput">oninput event triggered on: </axa-text>`;

export const InfoPopup = () => {
  const info = `<h4>Zeitspanne bis zur Pensionierung</h4>
    <p>Für die Berechnung Ihres monatlichen Einkommens im Alter ist die Zeitspanne bis zum Zeitpunkt Ihrer Pensionierung entscheidend.</p>`;
  return `<div>
              <axa-input-text invalid error="Error Message is cool" label="Cool" info="${info}"></axa-input-text>
              <axa-input-text label="Cool 2"></axa-input-text>
              <axa-input-text label="Cool 3" info="${info}"></axa-input-text>
            </div>`;
};

export const NoMaxlengthSet = () =>
  `<axa-input-text counter="chars left"></axa-input-text>`;

export const NoCounterSet = () =>
  `<axa-input-text maxlength="50"></axa-input-text>`;
