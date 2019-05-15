/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Fieldset', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Fieldset - default',
    () => `<axa-fieldset>
  <axa-checkbox label="Ja, ich möchte online einen
  Versicherungsvertrag abschliessen.
  Die Allgemeinen Vertragsbedingungen (AVB),
  die Beraterinformation, sowie die Hinweise zum Datenschutz habe ich zur
  Kenntnis genommen und bin damit einverstanden." error="Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen."></axa-checkbox>
  <axa-checkbox label="Ich habe die in der Offerte beantworteten Antragsfragen geprüft und bestätige deren Richtigkeit." checked></axa-checkbox>
  <axa-checkbox label="kurzes Label"></axa-checkbox><axa-checkbox label="kurzes Label, danach 2 x disabled"></axa-checkbox>
  <axa-checkbox checked disabled></axa-checkbox><axa-checkbox disabled></axa-checkbox>
  </axa-fieldset>`
  );
