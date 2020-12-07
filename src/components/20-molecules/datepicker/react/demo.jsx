// /* global document */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import changelog from '../CHANGELOG.md';
// import readme from '../README.md';
// import DemoDatepickerExternalValidation from './DemoDatepickerExternalValidation';
// import DemoDatepickerNoInputfield from './DemoDatepickerNoInputfield';
// import DemoDatepickerOnDateChange from './DemoDatepickerOnDateChange';
// import DemoDatepickerOnInputfieldKeyUp from './DemoDatepickerOnInputfieldKeyUp';
// import DemoControlledDatepickerReact from './DemoDatepickerReact';
// import DemoDatepickerReactPod from './DemoDatepickerReactPod';
// import DemoDatepickerReRenderOnEveryKeyStroke from './DemoDatepickerReRenderOnDateChange';

// export default {
//   title: 'Examples/Datepicker/React',
//   parameters: {
//     readme,
//     changelog,
//   },
// };

// export const ControlledComponentWithInputfield = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoControlledDatepickerReact />, div);
//   return div;
// };

// export const UncontrolledOndateChangeDrivenWithInputfield = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoDatepickerOnDateChange />, div);
//   return div;
// };
// UncontrolledOndateChangeDrivenWithInputfield.story = {
//   name: 'Uncontrolled onDateChange - Driven With Inputfield',
// };

// export const ExternalValidationUsingOndatechangeDrivenWithInputfield = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoDatepickerExternalValidation />, div);
//   return div;
// };
// ExternalValidationUsingOndatechangeDrivenWithInputfield.story = {
//   name: 'External Validation Using onDateChange - Driven With Inputfield',
// };

// export const RerenderingOnEveryKeystrokeWithInputfield = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoDatepickerReRenderOnEveryKeyStroke />, div);
//   return div;
// };
// RerenderingOnEveryKeystrokeWithInputfield.story = {
//   name: 'Re-rendering On Every Keystroke With Inputfield',
// };

// export const NoInputfiledWithExternalShowAndHide = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoDatepickerNoInputfield />, div);
//   return div;
// };

// export const PodVersioned = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoDatepickerReactPod />, div);
//   return div;
// };
// PodVersioned.story = {
//   name: 'Pod-versioned',
// };

// export const UsingOninputfieldkeyupEvent = () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DemoDatepickerOnInputfieldKeyUp />, div);
//   return div;
// };

// UsingOninputfieldkeyupEvent.story = {
//   name: 'Using onInputfieldKeyUp Event',
// };
