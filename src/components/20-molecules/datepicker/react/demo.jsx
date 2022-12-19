import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
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
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const DatepickerControlledInputfield = () =>
  createReactContainer(<DemoControlledDatepickerReact />);

export const DatepickerUncontrolledOndatechange = () =>
  createReactContainer(<DemoDatepickerOnDateChange />);

export const DatepickerExternalValidation = () =>
  createReactContainer(<DemoDatepickerExternalValidation />);

export const DatepickerReRenderingOnEveryKeystroke = () =>
  createReactContainer(<DemoDatepickerReRenderOnEveryKeyStroke />);

export const DatepickerNoInputfield = () =>
  createReactContainer(<DemoDatepickerNoInputfield />);

export const DatepickerPodVersioned = () =>
  createReactContainer(<DemoDatepickerReactPod />);

export const DatepickerUsingOninputfieldKeyUp = () =>
  createReactContainer(<DemoDatepickerOnInputfieldKeyUp />);
