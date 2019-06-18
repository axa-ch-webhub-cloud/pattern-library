/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Radio', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Radio - default',
    () => `
  <axa-fieldset horizontal>
  <axa-radio name="contract" label="Ja, ich möchte online einen
  Versicherungsvertrag abschliessen.
  Die Allgemeinen Vertragsbedingungen (AVB),
  die Beraterinformation, sowie die Hinweise zum Datenschutz habe ich zur
  Kenntnis genommen und bin damit einverstanden." error="Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen." checked></axa-radio>
  <axa-radio name="contract" label="Ich brauche noch mehr Informationen und möchte, dass ein Berater mit mir Kontakt aufnimmt."></axa-radio>
  <axa-radio name="contract" label="Nein, ich möchte momentan keinen Versicherungsvertrag abschliessen."></axa-radio>
  <axa-radio name="contract" label="Nein, ich bin bereits anderweitig versichert." disabled></<axa-radio>
  </axa-fieldset>`
  );
