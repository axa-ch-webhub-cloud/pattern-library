/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Fieldset', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Fieldset', () => {
      const error = text('error', '');
      const horizontal = boolean('horizontal', false);

      const wrapper = document.createElement('div');
      const template = html`
      <axa-fieldset ?horizontal="${horizontal}" error="${error}">
        <axa-checkbox label="Ja, ich möchte online einen
        Versicherungsvertrag abschliessen.
        Die Allgemeinen Vertragsbedingungen (AVB),
        die Beraterinformation, sowie die Hinweise zum Datenschutz habe ich zur
        Kenntnis genommen und bin damit einverstanden." error="Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen."></axa-checkbox>
        <axa-checkbox label="Ich habe die in der Offerte beantworteten Antragsfragen geprüft und bestätige deren Richtigkeit." checked></axa-checkbox>
        <axa-checkbox label="kurzes Label"></axa-checkbox><axa-checkbox label="kurzes Label, danach 2 x disabled"></axa-checkbox>
        <axa-checkbox checked disabled></axa-checkbox><axa-checkbox disabled></axa-checkbox>
      </axa-fieldset>
    `;

      render(template, wrapper);
      return wrapper;
    });
