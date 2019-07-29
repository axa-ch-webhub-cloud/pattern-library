/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import Readme from './README.md';

storiesOf('Atoms/Radio', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Radio - default',
    () => `
  <axa-fieldset horizontal>
  <axa-radio name="contract" label="Ja,
  Versicherungsvertrag abschliessen." error="Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen." checked></axa-radio>
  <axa-radio name="contract" label="Ich brauche noch mehr Informationen"></axa-radio>
  <axa-radio name="contract" label="Nein, ich möchte keinen Versicherungsvertrag"></axa-radio>
  <axa-radio name="contract" label="Nein, ich bin bereits versichert" disabled></<axa-radio>
  </axa-fieldset>`
  )
  .add(
    'Radio - button',
    () => `
  <axa-fieldset horizontal>
    <axa-radio button name="insurance" label="No, I'm already insured"></axa-radio>
    <axa-radio button nogap name="insurance" label="No, no need" ></axa-radio>
    <axa-radio button name="insurance" label="Yes, take out insurance" checked></axa-radio>
    <axa-radio button name="insurance" label="Yes, call me" disabled></axa-radio>
  </axa-fieldset>`
  );
