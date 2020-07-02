/* global document */
import { storiesOf } from '@storybook/html';
import {
  text,
  boolean,
  number,
  select,
  withKnobs,
  object,
} from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXADatepickerReact from './AXADatepickerReact';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

const localeOptions = {
  'de-CH': 'de-CH',
  'en-GB': 'en-GB',
  'it-IT': 'it-IT',
  'fr-CH': 'fr-CH',
};

storiesOf('Components|Datepicker/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Story', () => {
    const inputfield = boolean('inputfield', false);
    const locale = select('locale', localeOptions, 'de-CH');
    const year = number('year', '');
    const month = number('month', '');
    const day = number('day', '');
    const disabled = boolean('disabled', false);
    const autofocus = boolean('autofocus', false);
    const checkMark = boolean('checkMark', false);
    const label = text('label', '');
    const monthtitle = text('monthtitle', 'Choose Month');
    const yeartitle = text('yeartitle', 'Choose Year');
    const invaliddatetext = text('invaliddatetext', 'Invalid date');
    const invalid = boolean('invalid', false);
    const placeholder = text('placeholder', 'Please select a date');
    const defaultValue = text('defaultValue', '');
    const width = text('width', '400');
    const height = text('height', '40');
    const allowedYears = object('allowedyears', [
      '1971-2000',
      2012,
      2014,
      '2018-2022',
    ]);
    const div = document.createElement('div');

    ReactDOM.render(
      <AXADatepickerReact
        locale={locale}
        autofocus={autofocus}
        inputfield={inputfield}
        checkMark={checkMark}
        disabled={disabled}
        allowedyears={allowedYears}
        year={year}
        month={month}
        day={day}
        placeholder={placeholder}
        defaultValue={defaultValue}
        invaliddatetext={invaliddatetext}
        invalid={invalid}
        label={label}
        monthtitle={monthtitle}
        yeartitle={yeartitle}
        id="datepicker-react"
        data-test-id="datepicker-react"
        data-selenium-id="0815"
        data-display-name={AXADatepickerReact.displayName}
        className="my-special-class"
        onDateChange={newDate => {
          document.querySelector(
            'axa-datepicker[data-test-id="datepicker-react"]'
          ).title = newDate;
        }}
        width={width}
        height={height}
      />,
      div
    );
    return div;
  });
