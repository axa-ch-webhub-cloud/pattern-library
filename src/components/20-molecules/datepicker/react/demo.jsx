/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
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
  },
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

export const ExternalVAlidationUsingOndatechangeDrivenWithInputfield = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerExternalValidation />, div);
  return div;
};

export const RerenderingOnEveryKeystrokeWithInputfield = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerReRenderOnEveryKeyStroke />, div);
  return div;
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

export const UsingOninputgieldkeyupEvent = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDatepickerOnInputfieldKeyUp />, div);
  return div;
};
