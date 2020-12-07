/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXADatepickerReact from './AXADatepickerReact';
import DemoDatepickerExternalValidation from './DemoDatepickerExternalValidation';
import DemoDatepickerNoInputfield from './DemoDatepickerNoInputfield';
import DemoDatepickerOnDateChange from './DemoDatepickerOnDateChange';
import DemoDatepickerOnInputfieldKeyUp from './DemoDatepickerOnInputfieldKeyUp';
import DemoControlledDatepickerReact from './DemoDatepickerReact';
import DemoDatepickerReactPod from './DemoDatepickerReactPod';
import DemoDatepickerReRenderOnEveryKeyStroke from './DemoDatepickerReRenderOnDateChange';

export default {
  title: 'Examples/Datepicker/React',
  parameters: {
    readme,
    changelog,
    controls: { disabled: false },
    options: { showPanel: true },
  },
};

const localeOptions = {
  'de-CH': 'de-CH',
  'it-CH': 'it-CH',
  'fr-CH': 'fr-CH',
  'en-CH': 'en-CH',
  'en-GB': 'en-GB',
  'it-IT': 'it-IT',
  'invalid/ unsupported': 'ff-XX', // To show the default language fallback scenario
};

export const Story = ({
  inputfield,
  locale,
  year,
  month,
  day,
  allowedYears,
  disabled,
  autofocus,
  checkMark,
  defaultValue,
  label,
  monthtitle,
  yeartitle,
  invaliddatetext,
  invalid,
  placeholder,
  width,
}) => {
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
    />,
    div
  );
  return div;
};

Story.args = {
  inputfield: false,
  locale: 'de-CH',
  year: 2020,
  month: 4,
  defaultValue: '',
  day: 20,
  allowedYears: ['1971-2000', 2012, 2014, '2018-2022'],
  disabled: false,
  autofocus: false,
  checkMark: false,
  label: '',
  monthtitle: 'Choose month',
  yeartitle: 'Choose year',
  invaliddatetext: 'Invalid date',
  invalid: false,
  placeholder: 'Please select a date',
  width: '',
};

Story.argTypes = {
  locale: { control: { type: 'select', options: localeOptions } },
};

export const ControlledComponentWithInputfield = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoControlledDatepickerReact />, div);
  return div;
};

export const UncontrolledOndateChangeDrivenWithInputfield = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerOnDateChange />, div);
  return div;
};
UncontrolledOndateChangeDrivenWithInputfield.story = {
  name: 'Uncontrolled onDateChange - Driven With Inputfield',
};

export const ExternalValidationUsingOndatechangeDrivenWithInputfield = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerExternalValidation />, div);
  return div;
};
ExternalValidationUsingOndatechangeDrivenWithInputfield.story = {
  name: 'External Validation Using onDateChange - Driven With Inputfield',
};

export const RerenderingOnEveryKeystrokeWithInputfield = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerReRenderOnEveryKeyStroke />, div);
  return div;
};
RerenderingOnEveryKeystrokeWithInputfield.story = {
  name: 'Re-rendering On Every Keystroke With Inputfield',
};

export const NoInputfiledWithExternalShowAndHide = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerNoInputfield />, div);
  return div;
};

export const PodVersioned = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerReactPod />, div);
  return div;
};
PodVersioned.story = {
  name: 'Pod-versioned',
};

export const UsingOninputfieldkeyupEvent = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerOnInputfieldKeyUp />, div);
  return div;
};

UsingOninputfieldkeyupEvent.story = {
  name: 'Using onInputfieldKeyUp Event',
};
