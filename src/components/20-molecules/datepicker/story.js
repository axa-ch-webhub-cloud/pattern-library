import { storiesOf } from '@storybook/html';
import {
  text,
  number,
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const localeOptions = {
  'de-CH': 'de-CH',
  'en-GB': 'en-GB',
  'it-IT': 'it-IT',
  'fr-CH': 'fr-CH',
};

const defaultLocaleValue = 'de-CH';

const story = storiesOf('Molecules/Datepicker', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('Datepicker', () => {
  const inputfield = boolean('inputfield', false);
  const locale = select('locale', localeOptions, defaultLocaleValue);
  const year = number('year', 2020);
  const month = number('month', 4);
  const day = number('day', 22);
  const disabled = boolean('disabled', false);
  const autofocus = boolean('autofocus', false);
  const checkMark = boolean('checkMark', false);
  const label = text('label', '');
  const labelbuttoncancel = text('labelbuttoncancel', 'Cancel');
  const labelbuttonok = text('labelbuttonok', 'Ok');
  const monthtitle = text('monthtitle', 'Choose Month');
  const yeartitle = text('yeartitle', 'Choose Year');
  const invaliddatetext = text('invaliddatetext', 'Invalid date');
  const placeholder = text('placeholder', 'Please select a date');

  const wrapper = document.createElement('div');

  const template = html`
    <axa-datepicker
      locale="${locale}"
      ?inputfield="${inputfield}"
      ?autofocus="${autofocus}"
      ?checkMark="${checkMark}"
      ?disabled="${disabled}"
      allowedyears='["1971-2000", 2012, 2014, "2018-2022"]'
      year="${year}"
      month="${month}"
      day="${day}"
      placeholder="${placeholder}"
      invaliddatetext="${invaliddatetext}"
      label="${label}"
      monthtitle="${monthtitle}"
      yeartitle="${yeartitle}"
      labelbuttoncancel="${labelbuttoncancel}"
      labelbuttonok="${labelbuttonok}"
      data-test-id="datepicker"
    ></axa-datepicker>
  `;

  render(template, wrapper);
  return wrapper;
});
